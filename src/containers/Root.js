import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from '../configureStore'
import App from './App'

// Configure redux store
const store = configureStore()

// Base of the app
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}