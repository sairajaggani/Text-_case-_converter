import React, { useState } from "react";

export default function Textfield(props) {
  let [text, setText] = useState("");

  const upper = () => {
    let newtext = text.toUpperCase();

    setText(newtext);
  };
  const lower = () => {
    let newtext = text.toLowerCase();

    setText(newtext);
  };
  const captilise = () => {
    var words = text.split(' ');  
    var CapitalizedWords = [];  
    words.forEach(element => {  
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
    });  
  
    setText(CapitalizedWords.join(' '));
  };
  const spaces= ()=>{
    let result = text.replace(/\s+/g, ' ').trim()
    setText(result)
  }
  const copy=()=>{
    
    navigator.clipboard.writeText(text);
    alert("Copied the text: " + text);
  }
  const invert=()=>{
    let str = text;
    var s = '';
    var i = 0;
    while (i < str.length) {
        var n = str.charAt(i);
        if (n === n.toUpperCase()) {
            // *Call* toLowerCase
            n = n.toLowerCase();
        } else {
            // *Call* toUpperCase
            n = n.toUpperCase();
        }

        i += 1;
        s += n; 
    }
    setText(s);
  }
  const clear=()=>{
    let s= "";
    setText(s);
  }

  const newfun = (event) => {
    setText(event.target.value);
  };
  return (
    <>

        {" "}
        <h1>Enter text {props.head}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="please enter text"
            value={text}
            onChange={newfun}
            id="mybox"
            rows="5"
          ></textarea>
        </div>
        <div className="buttons">
          <button className="btn btn-outline-success" onClick={upper}>
            Upper case
          </button>
          <button className="btn btn-outline-info" onClick={lower}>
            Lower case
          </button>
          <button className="btn btn-outline-warning" onClick={captilise}>
            Captilise
          </button>
          <button className="btn btn-outline-dark" onClick={spaces}>
            Remove spaces
          </button>
          <button className="btn btn-outline-info" onClick={copy}>
            Copy
          </button>
          <button className="btn btn-outline-warning" onClick={invert}>
            Invert Text
          </button>
          <button className="btn btn-outline-warning" onClick={clear}>
            Clear
          </button>
        </div>
        
      <div>
        <h2 className="my-3">The Count results</h2>
        <p>
          There are {text.split(" ").filter(word => word !== '').length} words and {text.length} characters
        </p>
        <h2>Converted Text </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
