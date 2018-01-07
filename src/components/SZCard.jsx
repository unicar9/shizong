import React, { Component } from 'react'
import { Button, Header, Form, Segment } from 'semantic-ui-react'

const activityOptions = [
    { text: "Reading", value: "reading" },
    { text: "Workout", value: "workout" },
    { text: "Study", value: "study" },
    { text: "Meditation", value: "meditation" }
]

class SZCard extends Component {
    constructor(props) {
        super(props)
    
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e, name) {
        this.props.onHandleChange(e, name)
    }

    render(){
        const { value, hour, minute, color } = this.props

        return(
            <Segment inverted color={color}>
                <Header as="h2" textAlign="center">Log Your Activity</Header>
                <Form onSubmit={this.props.handleSubmit} size="large">
                    <Form.Dropdown selection selectonBlur={false} options={activityOptions} placeholder='Activity' value={value} onChange={this.props.handleSelectionChange} />
                    
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