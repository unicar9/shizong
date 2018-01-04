import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker'
import Chart from '../src/components/Chart'
import SZCard from '../src/components/SZCard'
import SZDropdown from '../src/components/SZDropdown'

ReactDOM.render(<SZDropdown />, document.getElementById('root'))
registerServiceWorker();
