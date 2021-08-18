import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpperCaseClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }
    const handleLowerCaseClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClear = ()=>{
        setText("");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        alert("Copied");
    }
    const handleInverseSingleWord = ()=>{
        let textParts = text.split("");
        let reverseParts = textParts.reverse();
        let reverseText = reverseParts.join("");
        setText(reverseText);
    }
    const handleRemoveSpacing = ()=>{
        let words = text.split(" ");
        let removeSpaceText = words.join("");
        setText(removeSpaceText);
    }
    const handleEveryWordFirstCharacterCapitalize = ()=>{
        function capitalizeFirstCharacter(str) {
            let processedWord = str.charAt(0).toUpperCase() + str.slice(1);
            return processedWord;
        }
        let EveryWordCapitalizeText = text.split(' ').map(capitalizeFirstCharacter).join(' ');
        setText(EveryWordCapitalizeText);
    }
    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-success mx-3" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button className="btn btn-dark" onClick={handleInverseSingleWord}>Inverse Single Word</button>
                <button className="btn btn-warning mx-3" onClick={handleRemoveSpacing}>Remove Spaces</button>
                <button className="btn btn-light" onClick={handleEveryWordFirstCharacterCapitalize}>Every First Character Capitalize</button>
                <button className="btn btn-danger mx-3" onClick={handleClear}>Clear</button>
                <button className="btn btn-info" onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary : </h2>
                <p><b>{text.split(" ").length}</b> words, <b>{text.length}</b> chracters.</p>
                <p><b>{text.split(" ").length * 0.008}</b> minutes read.</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}