import React, { Component } from 'react'
import { Button, Header, Form, Segment } from 'semantic-ui-react'

const activityOptions = [
    { key: 1, text: "Reading", value: "reading" },
    { key: 2, text: "Workout", value: "workout" },
    { key: 3, text: "Study", value: "study" },
    { key: 4, text: "Meditation", value: "meditation" },
]

class SZCard extends Component {
    constructor(props) {
        super(props)
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelectionChange = this.handleSelectionChange.bind(this) 
    }

    handleChange() {
        this.props.onHandleChange
    }

    handleSelectionChange() {
        this.props.onHandleSelectionChange
    }

    handleSubmit(event) {
        event.preventDefault()
    }
    
    render(){
        const { value, hour, minute } = this.props

        return(
            <Segment inverted color='olive'>
                <Header as="h2" textAlign="center">Log Your Activity</Header>
                <Form onSubmit={this.handleSubmit} size="large">
                    <Form.Dropdown selection options={activityOptions} placeholder='Activity' value={value} onChange={this.handleSelectionChange} />
                    
                    <Form.Group widths='equal'>
                        <Form.Input placeholder='Hour' value={hour} onChange={(event) => this.handleChange(event, "hour")}/>
                        <Form.Input placeholder='Minute' value={minute} onChange={(event) => this.handleChange(event, "minute")}/>
                    </Form.Group>
                    
                    <Form.Field control={Button} color='white'>OK</Form.Field>
                </Form>
            </Segment>
        )
    }
}

export default SZCard