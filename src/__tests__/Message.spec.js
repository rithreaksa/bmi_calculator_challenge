import React from "react";
import { shallow } from "enzyme";

import Message from "../components/Message";

describe("Message component", () => {
  const wrapper = shallow(<Message bmiMessage="Normal" bmiValue="23.59" />);

  it("renders with message prop", () => {
    expect(wrapper.find("#bmi-message").text()).toEqual(
      "You are Normal with a BMI of 23.59"
    );
  });
});
