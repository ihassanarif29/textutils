import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpperCase = () => {
    //console.log("Handle Upper Case Function");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    //console.log("Handle On Change");
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="11"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCase}>
        Convert to Uppercase
      </button>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
