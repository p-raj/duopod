import React, {Component} from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Analytics from "./Analytics";

const BASE_URL = "https://tq2dnljnk8.execute-api.us-east-1.amazonaws.com/dev";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "email": "",
            "user_id": null,
            "analytics_data": null
        };
    }

    on_submit = (event) => {
        event.preventDefault();
        this.get_user_listener_deatils(2)
    };

    handle_email_change = (event) => {
        console.log(event)
        this.setState({email: event.target.value})

    };


    get_user_listener_deatils = (email_id) => {
        let user_id  = 2;
        let url = BASE_URL + "/creator/" + user_id + "/listenerStats/";
        axios.get(url)
            .then(res => {
                console.log(res.data)
                this.setState({analytics_data: res.data});
            })
            .catch(error => {
            });
    }

    componentDidMount() {

    }

    render() {
        let analytics_data = this.state.analytics_data;
        let section;
        if(analytics_data){
            section = <Analytics
                analytics = {this.state.analytics_data}
            />
        }
        else {
            section = <Row/>
        }
        return (
            <div className="App">
                <Container fluid style={{}}>
                    <Row style={{borderBottom: '5px solid'}}>
                        <Col><h1>DuoPod</h1></Col>
                    </Row>
                    <Row style={{borderBottom: '2px solid', paddingBottom: 10}}>
                        <Container>
                            <form>
                                <label>
                                    Email :
                                    <input type="text" name="name" value={this.state.email} onChange={this.handle_email_change}/>
                                </label>
                                <input type="submit" value="Submit" onClick={this.on_submit}/>
                            </form>
                        </Container>
                    </Row>
                    {section}

                </Container>
            </div>
        );
    }
}
