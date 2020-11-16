import React, { Component } from "react";
import Form from "./components/Form";
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
      <div>
        <Form
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
      </div>
    );
  }
}

export default App;
