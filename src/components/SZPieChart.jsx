import React, { Component } from 'react'
import { PieChart, Pie, Cell, Tooltip, LabelList, ResponsiveContainer } from 'recharts'


class SZPieChart extends Component {
  
  state = {  }
  render(){

    return (
        <PieChart 
          width={500} 
          height={800} 
          onMouseEnter={this.onPieEnter}
          style={{margin: "0 auto"}}
        >
          <Pie 
            data={this.props.data}
            cx={250}
            cy={400}
            labelLine={true}
            label
            innerRadius={50}
            outerRadius={150}
            fill="grey"
          >
            {this.props.children}
          </Pie>
          <Tooltip  />
        </PieChart>
    )
  }
}

export default SZPieChart