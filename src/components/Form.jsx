import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <div>
        <label
          style={{ width: "80px", display: "inline-block" }}
          htmlFor="weight"
        >
          Weight
        </label>
        <input
          style={{ fontSize: "1rem", width: "200px" }}
          type="number"
          required
          placeholder="Weight in kgs"
          value={props.weight}
          name="weight"
          id="weight"
          onChange={props.onChangeHandler}
        />
      </div>
      <div>
        <label
          style={{ width: "80px", display: "inline-block" }}
          htmlFor="height"
        >
          Height
        </label>
        <input
          style={{ fontSize: "1rem", width: "200px" }}
          type="number"
          required
          placeholder="Height in cm"
          value={props.height}
          name="height"
          id="height"
          onChange={props.onChangeHandler}
        />
      </div>
      <button style={{ fontSize: "1rem", width: "100%" }} id="calculate">
        Calculate BMI
      </button>
    </form>
  );
};

export default Form;
