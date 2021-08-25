import React from "react";

export default function About(props) {

    return (
        <div className="container my-3 p-3" style={{backgroundColor : props.mode==="light"?"#fff":"#191818"}}>
            <h2 className="my-2" style={{color: props.mode==="light"?"#191818":"#fff"}}>About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{color: props.mode==="light"?"#191818":"#fff", backgroundColor : props.mode==="light"?"#fff":"#191818"}}
                >
                Analyze Your Text.
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                style={{color: props.mode==="light"?"#191818":"#fff", backgroundColor : props.mode==="light"?"#fff":"#191818"}}
            >
                <div className="accordion-body">
                <strong>Using this utility you can Analyze your text in different ways.</strong>
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{color: props.mode==="light"?"#191818":"#fff", backgroundColor : props.mode==="light"?"#fff":"#191818"}}
>
                Free to use.
                </button>
            </h2>
            <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
                style={{color: props.mode==="light"?"#191818":"#fff", backgroundColor : props.mode==="light"?"#fff":"#191818"}}
            >
                <div className="accordion-body">
                <strong>This app is free to use.</strong>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
