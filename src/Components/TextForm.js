import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleOnChange}
          value={text}
          style={{
            backgroundColor: `${
              props.mode === "light" ? "#ebebeb" : "rgb(199 199 199)"
            }`,
            color: `${props.mode === "light" ? "black" : "white"}`,
          }}
        ></textarea>

        <button
          type="button"
          className={`${
            text === "" ? "disabled" : ""
          } btn btn-primary mx-1 my-3`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          type="button"
          className={`${
            text === "" ? "disabled" : ""
          } btn btn-primary mx-1 my-3`}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>

        <button
          type="button"
          className={`${
            text === "" ? "disabled" : ""
          } btn btn-primary mx-1 my-3`}
          onClick={handleClearClick}
        >
          Clear text
        </button>

        <button
          type="button"
          className={`${
            text === "" ? "disabled" : ""
          } btn btn-primary mx-1 my-3`}
          onClick={handleCopyClick}
        >
          Copy text
        </button>
      </div>
      <div className="m-3">
        <h3>Text Summary</h3>
        {
          text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length
        }{" "}
        words and {text.length} characters
        <div className="m-3">
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </div>
        <h3>Preview</h3>
        <div className="container">{text ? text : "Enter text to preview"}</div>
      </div>
    </>
  );
}