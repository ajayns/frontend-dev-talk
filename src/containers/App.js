import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import actions
import {
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit
} from '../actions'

import Navbar from '../components/Navbar'


class App extends Component {
    constructor(props) {
        super(props)

        this.handleMenuChange = this.handleMenuChange.bind(this)
    }

    handleMenuChange(e, {name}) {
        console.log(name)
        this.props.dispatch(selectSubreddit(name.replace(/ /g, '')))
    }

    handleRefreshClick() {
        console.log('refresh clicked')
    }

    render() {
        const { selectedSubreddit } = this.props

        return (
            <div>
                <Navbar
                    selectedSub={selectedSubreddit} 
                    handleMenuChange={this.handleMenuChange}
                    handleRefreshClick={this.handleRefreshClick}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { selectedSubreddit } = state

    return {
        selectedSubreddit
    }
}

export default connect(mapStateToProps)(App)