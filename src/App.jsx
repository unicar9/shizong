import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'
import SZCard from "./components/SZCard"
import SZPieChart from "./components/SZPieChart"

const getDate = () => {
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()

    return `${day}/${month}/${year}`
}

class App extends Component {
    
    render() {
        return (
            <Grid>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <h2>Log Your Activity Today</h2>
                    <h5>{getDate()}</h5>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <SZCard/>  
                </Grid.Column>
                <Grid.Column>
                    <SZPieChart/>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        )
    }
}

export default App