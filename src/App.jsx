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
        // this.hideFixedHeader = this.hideFixedHeader.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)

        this.state = {
            calculations: {
              percentagePassed: 0,
              bottomPassed: false
            },
        }
    }

    showFixedHeader() {
        this.setState({visible: true})
    }

    handleUpdate(e, { calculations }) {
       this.setState({ calculations })
       this.state.calculations.percentagePassed > 0.4 && this.setState({visible: true})
       !this.state.calculations.bottomPassed && this.state.calculations.percentagePassed < 0.4 && this.setState({visible: false})
    }

    render() {
        const { visible, calculations } = this.state
        return (
            <div>
                {visible
                    ? <Menu fixed='top'>Hello</Menu>
                    : null}

                <Visibility
                    onUpdate={this.handleUpdate}
                    onBottomPassed={this.showFixedHeader}
                    once={false}>
                    <Segment
                        color='teal'
                        inverted
                        textAlign='center'
                        style={{
                        minHeight: 700,
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
                                <SZPieChart style={{margin: "0 auto"}}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


                <Segment
                    color='teal'
                    inverted
                    textAlign='center'
                    style={{
                    minHeight: 200,
                    padding: '1em 0em'
                    }}
                    vertical
                >
                      <Header
                        as='h2'
                        content='How are you hahahahah'
                        inverted
                        style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal'
                    }}/>

                </Segment>
            </div>
        )
    }
}

export default App