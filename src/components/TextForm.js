import React,{useState} from 'react'
const TextForm = (props) => {



const [text, setText] = useState("");
const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
}
const handleOnChange = (event) =>{
    setText(event.target.value);
    
    
}
const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("") 
    props.showAlert("Converted to lowercase!", "success");
}
const handleClearText = () =>{
    setText(""); 
    props.showAlert("TextCleared", "success");
}
const handleCopy = () =>{
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
}
const handleExtraSpace = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}
  return (
<>
<div className="container" style = {{color: props.mode==='dark'?'white':'#042743'
  }}>
  <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value = {text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'#042743'
  }}></textarea>
  </div>
<button disabled={text.length===0}className="btn btn-primary" onClick={handleUpClick}>
    Convert to Upper Case
</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>
    Convert to Lower Case
</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleClearText}>
    Clear text
</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleCopy}>
    Copy text
</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleExtraSpace}>
    Remove Spaces
</button>
</div>
<div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'
  }}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charcter</p>
    <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Reead</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
</div>
</>
  )
}

export default TextForm