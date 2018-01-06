import React, { Component } from 'react'
import { PieChart, Pie, Cell, Tooltip, LabelList, ResponsiveContainer } from 'recharts'

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
        <PieChart 
          width={500} 
          height={800} 
          onMouseEnter={this.onPieEnter}
          style={{margin: "0 auto"}}
        >
          <Pie 
            data={data}
            cx={250}
            cy={400}
            labelLine={true}
            label
            innerRadius={50}
            outerRadius={150}
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