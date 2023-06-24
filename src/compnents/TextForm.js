import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpChange=()=>{
        // console.log("To UpperCase ");
        setText(text.toUpperCase());
    }
    const handleLowChange=()=>{
        // console.log("To UpperCase ");
        setText(text.toLowerCase());
    }
    const handleCleanChange=()=>{
        // console.log("To UpperCase ");
        setText('');
    }

    const handleCopy=()=>{
        var tx =document.getElementById('myBox');
        tx.select();
        navigator.clipboard.writeText(tx.value);
    }
    const handleExtraSpace=()=>{
        let temp=text.split(/[ ]+/);
        setText(temp.join([" "]));
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
        // console.log("on Change");
    }
    const wordCount=(tx)=>{
        let arr=tx.split(" ");
        let size=arr.length;
        // console.log(arr);
        let temp=0
        arr.forEach(e => {
            if(e==="")temp++;
        });
        return size-temp;
    }
    const [text,setText]=useState('');
    // console.log(wordCount(text));

  return (
    <>   
    <div className="container">    
        <h2>{props.title}</h2>
        <div className="mb-3">
        <textarea placeholder='Enter Your Text Here' className="form-control shadow" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        <div className="btn btn-primary my-3" onClick={handleUpChange}>Convert to UpperCase</div>
        <div className="btn btn-primary my-3 mx-2" onClick={handleLowChange}>Convert to LowerCase</div>
        <div className="btn btn-danger my-3 mx-2" onClick={handleCleanChange}>Clear All</div>
        <div className="btn btn-info my-3 mx-2" onClick={handleCopy}>Copy</div>
        <div className="btn btn-secondary my-3 mx-2" onClick={handleExtraSpace}>Remove Extra Space</div>
</div>
</div>
<div className="container">
    <h2>Your Text Summary</h2>
    <p><strong>{wordCount(text)}</strong> Words & <strong>{text.length} </strong>Characters</p>
    <p><strong>{0.008*wordCount(text)}</strong>  Minutes will be required to read this!</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>

    </>
  )
}
