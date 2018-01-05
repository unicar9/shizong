import React, {Component} from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility
} from 'semantic-ui-react'
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
    constructor(props) {
        super(props)

        this.showFixedHeader = this.showFixedHeader.bind(this)
        this.hideFixedHeader = this.hideFixedHeader.bind(this)

        this.state = {}
    }

    showFixedHeader() {
        this.setState({visible: true})
    }

    hideFixedHeader() {
        this.setState({visible: false})
    }

    render() {
        const {visible} = this.state
        return (
            <div>
                {visible
                    ? <Menu fixed='top'>Hello</Menu>
                    : null}

                <Visibility
                    onBottomPassed={this.showFixedHeader}
                    onBottomVisible={this.hideFixedHeader}
                    once={false}>
                    <Segment
                        color='teal'
                        inverted
                        textAlign='center'
                        style={{
                        minHeight: 500,
                        padding: '1em 0em'
                    }}
                        vertical>
                        <Container text>
                            <Header
                                as='h1'
                                content='SHI ZONG'
                                inverted
                                style={{
                                fontSize: '4em',
                                fontWeight: 'normal',
                                marginBottom: 0,
                                marginTop: '3em'
                            }}/>
                            <Header
                                as='h2'
                                content='Track Your Activities Today'
                                inverted
                                style={{
                                fontSize: '1.7em',
                                fontWeight: 'normal'
                            }}/>
                        </Container>
                    </Segment>
                </Visibility>

                <Segment
                    style={{ padding: '3em 3em' }}
                    vertical>
                    <Grid stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <SZCard/>
                            </Grid.Column>
                            <Grid.Column floated='right' width={8}>
                                <SZPieChart/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

export default App