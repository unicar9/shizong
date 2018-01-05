import React, { Component } from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

const COLORS = ['#CA3B33', '#F3BE43', '#4FB2AC', '#5C3EC2', 'grey']


class SZPieChart extends Component {
  
  state = {  }
  render(){
    const data = [
      { name: "Reading", value: 3.5 },
      { name: "Workout", value: 2.0 },
      { name: "Study", value: 1.8 },
      { name: "Meditation", value: 4.5 },
      { name: "Rest", value: 12.2 }
    ]

    return (
      <PieChart width={1000} height={1000} onMouseEnter={this.onPieEnter}>
        <Pie 
          data={data}
          cx={300}
          cy={300}
          labelLine={true}
          label
          innerRadius={80}
          outerRadius={200}
          fill="grey"
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