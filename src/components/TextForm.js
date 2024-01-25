import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log(text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = ()=>{
      // console.log(text);
      let newText = text.toLowerCase();
      setText(newText)
  }

  const handleClearClick = ()=>{
    // console.log(text);
    let newText = ("");
    setText(newText)
}

    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value);
    }
        const [text, setText] = useState('');
    // setText("new text");

    
  return (
<>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
<div>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#042443':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Uppercase</button>
<button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
</div>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
  <h2 style={{color: props.mode==='dark'?'white':'black'}}>your text summary</h2>
  <p style={{color: props.mode==='dark'?'white':'black'}}>{text.split(" ").length} words and {text.length} characters</p>
  <p style={{color: props.mode==='dark'?'white':'black'}}>{0.008 * text.split("").length}Minutes read</p>

  <h3 style={{color: props.mode==='dark'?'white':'black'}}>Preview</h3>
  <p style={{color: props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter Something here"}</p>
</div>
</>
  
  )
}

