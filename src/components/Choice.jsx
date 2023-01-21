import React from "react";

export default function Choice(props){
    const styleOnSubmit = {
        backgroundColor: props.submit&&props.isCorrect&&"#94D7A2"
    }
    return(
        <span className="option">
            <input type="radio" name={props.ques} id={props.value} disabled={props.submit?true:false}/>
            <label style={styleOnSubmit} htmlFor={props.value}>{props.value}</label>
        </span>
    )
}