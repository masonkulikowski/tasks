import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>W header or no?</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and Hello World
            </header>
            <img
                src={require("./webappss.png")}
                alt="hardstuck or what?"
                height="300"
            />
            <ul>
                <li>valorant</li>
                <li>is an</li>
                <li>awful game</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: "red"
                            }}
                        ></div>
                        I love columns
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: "red"
                            }}
                        ></div>
                        they are fun
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. Mason Kulikowski
            </p>
        </div>
    );
}

export default App;
