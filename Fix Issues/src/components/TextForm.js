import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {orangeBtn, yellowBtn, greenBtn} from  '../css/Palette'
import {cyanBtn} from  '../css/Palette' 

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [btnColor, setbtnColor] = useState({
        backgroundColor: "#000",
        color: "#fff",
        padding: "8px 10px",
        border: "none",
        margin: "5px 0px",
        marginRight: "5px",
        fontWeight: "bold"
    });
    const handleUpperCaseClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Text has been Capitalized.","success");
    }
    const handleLowerCaseClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Text has been Converted to Lower.","success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClear = ()=>{
        setText("");
        props.showAlert("Text has been Cleared.","success");

    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been Copied.","success");
    }
    const handleInverseSingleWord = ()=>{
        let textParts = text.split("");
        let reverseParts = textParts.reverse();
        let reverseText = reverseParts.join("");
        setText(reverseText);
        props.showAlert("Word is Inversed.","success");

    }
    const handleRemoveSpacing = ()=>{
        let words = text.split(" ");
        let removeSpaceText = words.join("");
        setText(removeSpaceText);
        props.showAlert("Spaces have been removed from text.","success");
    }
    const handleEveryWordFirstCharacterCapitalize = ()=>{
        function capitalizeFirstCharacter(str) {
            let processedWord = str.charAt(0).toUpperCase() + str.slice(1);
            return processedWord;
        }
        let EveryWordCapitalizeText = text.split(' ').map(capitalizeFirstCharacter).join(' ');
        setText(EveryWordCapitalizeText);
        props.showAlert("Every first letter of each word in capitalized.","success");
    }
    const showBtnsOrange=()=>{
        setbtnColor({
            backgroundColor: "#FF5733",
            color: "#fff",
            padding: "8px 10px",
            border: "none",
            margin: "5px 0px",
            marginRight: "5px",
            fontWeight: "bold"
        });
    }
    const showBtnsYellow=()=>{
        setbtnColor({
            backgroundColor: "#D3D30C",
            color: "#fff",
            padding: "8px 10px",
            border: "none",
            margin: "5px 0px",
            marginRight: "5px",
            fontWeight: "bold"
        });
    }
    const showBtnsGreen=()=>{
        setbtnColor({
            backgroundColor: "#0ABF28",
            color: "#fff",
            padding: "8px 10px",
            border: "none",
            margin: "5px 0px",
            marginRight: "5px",
            fontWeight: "bold"
        });
    }
    const showBtnsCyan=()=>{
        setbtnColor({
            backgroundColor: "#0ABF92",
            color: "#fff",
            padding: "8px 10px",
            border: "none",
            margin: "5px 0px",
            marginRight: "5px",
            fontWeight: "bold"
        });
    }
    return (
        <>
            <div className="container my-3" style={{color: props.mode==="light"?"#191818":"#fff"}}>
                <div>
                    <h2>Color Palette:</h2>
                    <div>
                        <button style={orangeBtn} onClick={showBtnsOrange}></button>
                        <button style={yellowBtn} onClick={showBtnsYellow} className="mx-2"></button>
                        <button style={greenBtn} onClick={showBtnsGreen}></button>
                        <button style={cyanBtn} onClick={showBtnsCyan} className="mx-2"></button>
                    </div>
                </div>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor : props.mode==="light"?"#fff":"#191818", color: props.mode==="light"?"#000":"#fff", border: props.mode==="light"?"0.5px solid #000":"0.5px solid #fff"}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button style={btnColor} onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button style={btnColor} onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button style={btnColor} onClick={handleInverseSingleWord}>Inverse Single Word</button>
                <button style={btnColor} onClick={handleRemoveSpacing}>Remove Spaces</button>
                <button style={btnColor} onClick={handleEveryWordFirstCharacterCapitalize}>Every First Character Capitalize</button>
                <button style={btnColor} onClick={handleClear}>Clear</button>
                <button style={btnColor} onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my-3" style={{color: props.mode==="light"?"#191818":"#fff"}}>
                <h2>Your Text Summary : </h2>
                <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words, <b>{text.length}</b> chracters.</p>
                <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008}</b> minutes read.</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter text to preview"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}