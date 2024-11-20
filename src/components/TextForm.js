import React, { useState } from "react";

export default function TextForm(props) {
  const toU = () => {
    let newText1 = text.toUpperCase();
    setText(newText1);
    props.showAlert("Text is in UpperCase", "success");
  };
  const toLow = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("Text is in Lowercase", "success");
  };
  const toClear = () => {
    let newText3 = "";
    setText(newText3);
    props.showAlert("Text is cleared", "warning");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const toCopy = () => {
    navigator.clipboard.writeText(text);

    props.showAlert("Text is copied", "success");
  };
  const removeSpace = () => {
    let newText4 = text.split(/[ ]+/);
    setText(newText4.join(" "));
    props.showAlert("Space is removed", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-1 ">
        <h2 className="mb-1">{props.heading}</h2>
        <br />
        <div
          className="mb-3 mx-1"
          style={{ color: props.mode === "dark" ? "red" : "black" }}
        >
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="5"
            onChange={handleOnChange}
            placeholder="Enter your text here"
            style={{
              backgroundColor: props.mode === "dark" ? "#2B3035" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-1 "
          onClick={toU}
          disabled={text.length === 0}
        >
          To UpperCase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={toLow}
          disabled={text.length === 0}
        >
          To LowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={toCopy}
          disabled={text.length === 0}
        >
          Copy
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={removeSpace}
          disabled={text.length === 0}
        >
          Remove extra Spaces
        </button>
        <button
          className="btn btn-danger mx-2 my-1"
          onClick={toClear}
          disabled={text.length === 0}
        >
          Clear
        </button>
        <br />
      </div>

      <div
        className={`container my-4 
          `}
      >
        <h2>Your text contains</h2>
        <h6>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          word(s) <br />
          {text.split(".").length - 1} sentences(s)
          <br />
          {text.length} character(s)
        </h6>
        <h4>
          Estimated time to read:{" "}
          {0.005 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </h4>
        <h3>Your preview</h3>
        <p
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "#2B3035" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {text.length === 0 ? "*Your text will be shown here*" : text}
        </p>
      </div>
    </>
  );
}
