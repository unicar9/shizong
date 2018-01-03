import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker'
import Chart from '../src/components/Chart'

ReactDOM.render(<Chart />, document.getElementById('root'))
registerServiceWorker();
