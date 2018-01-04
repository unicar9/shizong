import React, { Component } from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

const COLORS = ['#CA3B33', '#F3BE43', '#4FB2AC', '#5C3EC2']

class SZPieChart extends Component {
  
  state = {  }
  render(){
    const data = [
      { name: "Reading", value: 500 },
      { name: "Workout", value: 300 },
      { name: "Study", value: 200 },
      { name: "Meditation", value: 200 }
    ]

    return (
      <PieChart width={1000} height={1000} onMouseEnter={this.onPieEnter}>
        <Pie 
          data={data}
          cx={300}
          cy={300}
          labelLine={false}
          label
          outerRadius={200}
          fill="#8884d8"
        >
         {
           data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
         }
        </Pie>
        <Tooltip  />
      </PieChart>
    )
  }
}

export default SZPieChart