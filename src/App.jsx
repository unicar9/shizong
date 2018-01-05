import React, { Component } from 'react'
import { Grid, Container, textAlign } from 'semantic-ui-react'
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
            <Grid verticalAlign='middle'>
                <Grid.Row textAlign='center' columns={1}>
                    <Grid.Column>
                        <h2>Shi Zong</h2>
                        <h5>{getDate()}</h5>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={8}>
                        <SZCard/>  
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <SZPieChart/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default App