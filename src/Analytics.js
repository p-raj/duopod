import React, {Component} from 'react';
import './App.css';
import {Bar, Line} from 'react-chartjs-2';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


export default class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {

    }

    get_line_chart_Data = (dataa) => {
        let data = dataa["results"]
        let language_watch_count = {};
        for (let index = 0; index < data.length; index++) {
            let record = data[index];
            console.log("data--", record)
            let language = record["language"];
            let current_count = language_watch_count[language]
            if (current_count) {
                language_watch_count[language] = current_count + 1
            } else {
                language_watch_count[language] = 1
            }
        }
        console.log(language_watch_count)

        let language = [];
        let count = [];
        for (var key in language_watch_count) {
            language.push(key)
            count.push(language_watch_count[key])
        }

        console.log(
            {
                labels: language,
                datasets: [
                    {
                        label: "Language-wise Counts",
                        data: count,
                        backgroundColor: [
                            "#3cb371",
                            "#0000FF",
                            "#9966FF"
                        ]
                    }

                ]
            }
        )

        return {
            labels: language,
            datasets: [
                {
                    label: "Language-wise Counts",
                    data: count,
                    backgroundColor: [
                        "#3cb371",
                        "#0000FF",
                        "#9966FF",
                        "#3cb371",
                        "#0000FF",
                        "#9966FF"
                    ]
                }

            ]
        }


    };

    render() {


        return (
            <Container>

                <Row style={{height: 400}}>
                    <Col>
                        <Line
                            data={this.get_line_chart_Data(this.props.analytics)}
                            options={{maintainAspectRatio: false}}
                        />
                    </Col>


                </Row>

                <Row style={{height: 400}}>
                    <Bar data={this.get_line_chart_Data(this.props.analytics)}
                         options={{maintainAspectRatio: false}}/>
                </Row>
            </Container>
        )
            ;
    }
}
