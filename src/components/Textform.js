import React, { useState } from "react";



export default function Textform(props) {
  const handleUpclick = () => {
    // console.log("Handle Up clicked" + text);
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("converted to uppercase", "success")
  };
  const handleLowclick = () => {
    // console.log("Handle Down clicked" + text);
    let newText = text.toLowerCase();

    setText(newText);
    props.showAlert("converted to lowercase", "success")
    
  };
  const handlereverseclick = () => {
    // console.log("Handle Down clicked" + text);
    let newText = text.repeat();
    props.showAlert("text cleared", "success")

    setText(newText);
  };
  const HandleOnchange = (event) => {
    // console.log("Handle change");
    setText(event.target.value);
  };

  const hanleextraspaces = () => {
    let newText = text.split (/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra spaces cleared", "success")

  }
  const [text, setText] = useState(" ");

  // Text ('Change the text'); Wrong way
  // setText ('Change the text'); right way

  return (
    <>
    <div className = "container"  style = {{color : props.mode ==='dark'?'white':'#042743' }}>
      <h1>{props.heading} </h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          style={{backgroundColor:props.mode ==='dark'?'grey':'white',color : props.mode ==='dark'?'white':'#042743' }}
          value={text}
          onChange={HandleOnchange}
          id="MyBox"
          rows="15"
          ></textarea>
      </div>
      <button className=" btn btn-primary mx-3" onClick={handleUpclick}>
        Convert to Uppercase
      </button>

      <button className=" btn btn-primary mx-3" onClick={handleLowclick}>
        Convert to Lowercase
      </button>

      <button className=" btn btn-primary mx-3" onClick={handlereverseclick}>
        Click to clear
      </button>
      <button className=" btn btn-primary mx-3" onClick={hanleextraspaces}>
        delete extra spaces
      </button>
     
    </div>
    <div className="container my-3 " style = {{color : props.mode ==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.010 * text.split(" ").length} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"} </p>
         </div>
          </>
  );
}
