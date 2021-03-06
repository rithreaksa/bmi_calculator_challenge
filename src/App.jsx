import React, { Component } from "react";
import Card from "./components/Card";
import CenteredContainer from "./components/CenteredContainer";
import Form from "./components/Form";
import Header from "./components/Header";
import Message from "./components/Message";
import { calculateBMI } from "./helpers/bmiHelper";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
  };

  onChangeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = (e) => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBMI(
      this.state.weight,
      this.state.height
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  render() {
    return (
      <CenteredContainer>
        <Header>BMI Calculator</Header>
        <Card>
          <Form
            weight={this.state.weight}
            height={this.state.height}
            onChangeHandler={this.onChangeHandler}
            onSubmitHandler={this.onSubmitHandler}
          />

          {this.state.bmiValue && (
            <Message
              bmiValue={this.state.bmiValue}
              bmiMessage={this.state.bmiMessage}
            />
          )}
        </Card>
      </CenteredContainer>
    );
  }
}

export default App;
