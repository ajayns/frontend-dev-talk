import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import actions
import {
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit
} from '../actions'

// Import components
import Navbar from '../components/Navbar'
import Posts from './Posts'

import { Dimmer, Loader } from 'semantic-ui-react'


class App extends Component {
    constructor(props) {
        super(props)

        this.handleMenuChange = this.handleMenuChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    handleMenuChange(e, { name }) {
        const sub = name.replace(/ /g, '')
        this.props.dispatch(selectSubreddit(sub))
        this.props.dispatch(fetchPostsIfNeeded(sub))
    }

    handleRefreshClick() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render() {
        const { selectedSubreddit, posts, isFetching } = this.props

        return (
            <div>
                <Dimmer blurring active={isFetching}>
                    <Loader>Loading</Loader>
                </Dimmer>
                <Navbar
                    selectedSub={selectedSubreddit} 
                    handleMenuChange={this.handleMenuChange}
                    handleRefreshClick={this.handleRefreshClick}
                />
                {posts.length > 0 &&
                    <Posts posts={posts} />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state
    const { isFetching, items: posts } = postsBySubreddit[selectedSubreddit] || { isFetching: true, items: [] }

    return {
        selectedSubreddit,
        posts,
        isFetching
    }
}

export default connect(mapStateToProps)(App)