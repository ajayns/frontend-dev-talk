import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';

render(
    <Root />,
    document.getElementById('root')
)
registerServiceWorker();
