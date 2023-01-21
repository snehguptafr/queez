import React from "react";
import he from 'he';
import Choice from "./Choice";
export default function Question(props){
    const [options, setOptions]=React.useState([{isCorrect: false, value:props.incorrect[0]},
                    {isCorrect: false, value:props.incorrect[1]},
                    {isCorrect: false, value:props.incorrect[2]},
                    {isCorrect: true, value:props.correct}])
    React.useEffect(()=> {setOptions(prevOptions => prevOptions.sort(()=>Math.random()-0.5))
                            console.log("effect ran")}, [])
                    // const options = [...props.incorrect, props.correct]
    const choices = options.map(opt =>(
        <Choice key={options.indexOf(opt)} submit={props.submit} ques={props.question} value={he.decode(opt.value)} isCorrect={opt.isCorrect} />
    ))

    return(
        <div className="quiz-ui">
        <section className="question">
            <h2>{he.decode(props.question)}</h2>
            {choices}
        </section>
        <hr></hr>
        </div>
    )
}