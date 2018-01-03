import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker'
import Chart from '../src/components/Chart'
import SZPieChart from '../src/components/SZPieChart'

ReactDOM.render(<SZPieChart />, document.getElementById('root'))
registerServiceWorker();
