import React from "react";
import {
    Row,
    Col,
    PageHeader,
    Descriptions,
    Button,
    Typography,
    Space,
} from "antd";
import "./style.css";
import "antd/dist/antd.less";
import "antd/dist/antd.css";
import Form from "antd/lib/form/Form";

const { Item } = Descriptions;
const { Text, Link, Title } = Typography;

class PoemDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            poems: "",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            subTitle: "",
            frameHeight: 800,
            frameWidth: 450,
        };
    }

    renderRandomText() {
        console.log(this.state.poems.split("\n"))
        return this.state.poems
            ? this.state.poems.split("\n").map((item, index) => (
                  <Text key={index} className="paragraph-line">
                      {item}
                  </Text>
            ))
            : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                  <Text key={index} className="paragraph-line">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
              ));
    }

    render() {
        return (
            <Col span={24}>
                <Row className="outer-cover">
                    <Col span={8} className="cover-of-video">
                        <Row className="cover-video">
                            <iframe
                                src="/mp3.mp4"
                                title=":3"
                                height={this.state.frameHeight}
                                width={this.state.frameWidth}
                                autoplay="0"
                            ></iframe>
                        </Row>
                    </Col>

                    <Col span={8} className="cover-of-poem">
                        <Row className="poem-header">
                            <Title style={{margin: "auto"}}>
                                {this.state.title}
                            </Title>
                        </Row>

                        <Row className="poem-paragraph">
                            <Space
                                direction="vertical"
                                className="main-paragraph"
                            >
                                {this.renderRandomText()}
                            </Space>
                        </Row>
                    </Col>

                    <Col span={8} className="cover-of-about-us">
                        <Row>
                            <input
                                name="poemStarter"
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({
                                        subTitle: e.target.value,
                                    });
                                }}
                            />
                            <button
                                onClick={(e) => {
                                    const requestOptions = {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                    };
                                    fetch(
                                        "http://localhost:8008/getInp",
                                        requestOptions
                                    )
                                        .then((response) => response.json())
                                        .then((data) =>
                                            this.setState({
                                                poems: data.resPoem,
                                            })
                                        );

                                    this.setState({
                                        title: this.state.subTitle
                                    })
                                }}
                            >
                                oke
                            </button>
                        </Row>
                        <Row className="author-information">
                            {/* <Space
                                direction="vertical"
                                className="main-information "
                            >
                                <Text className="paragraph-line">
                                    Lorem Ipsum: Lorem Ipsum dolor sit amet
                                </Text>
                                <Text className="paragraph-line">
                                    Lorem Ipsum: Lorem Ipsum dolor sit amet
                                </Text>
                                <Text className="paragraph-line">
                                    Lorem Ipsum: Lorem Ipsum dolor sit amet
                                </Text>
                                <Text className="paragraph-line">
                                    Lorem Ipsum: Lorem Ipsum dolor sit amet
                                </Text>
                            </Space> */}
                        </Row>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default PoemDisplay;
