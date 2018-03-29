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


class App extends Component {
    constructor(props) {
        super(props)

        this.handleMenuChange = this.handleMenuChange.bind(this)
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    handleMenuChange(e, { name }) {
        this.props.dispatch(selectSubreddit(name.replace(/ /g, '')))
    }

    handleRefreshClick() {
        console.log('refresh clicked')
    }

    render() {
        const { selectedSubreddit, posts, isFetching } = this.props

        return (
            <div>
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