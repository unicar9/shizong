import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker'
import Chart from '../src/components/Chart'
import SZCard from '../src/components/SZCard'

ReactDOM.render(<SZCard />, document.getElementById('root'))
registerServiceWorker();
