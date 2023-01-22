import React from "react";
import he from 'he';
import Choice from "./Choice";
export default function Question(props){
    const [options, setOptions]=React.useState([{isCorrect: false, value:props.incorrect[0]},
                    {isCorrect: false, value:props.incorrect[1]},
                    {isCorrect: false, value:props.incorrect[2]},
                    {isCorrect: true, value:props.correct}])
    const [choices, setChoices] = React.useState([])
    React.useEffect(()=> {
        setOptions(prevOptions => prevOptions.sort(()=>Math.random()-0.5))
    }, [])
    
    // Dont know why but deleting this effect results in an unpleasant bug
    React.useEffect(()=>{
        setChoices(options.map(opt =>{
        return <Choice key={options.indexOf(opt)} submit={props.submit} ques={props.question} value={he.decode(opt.value)} isCorrect={opt.isCorrect} />
    }))},[props.submit, options, props.question])

    return(
        <div className="quiz-ui">
        <section className="question">
            <h2>{he.decode(props.question)}</h2>
            <Choice key={options.indexOf(options[0])} submit={props.submit} ques={props.question} value={he.decode(options[0].value)} isCorrect={options[0].isCorrect} />
            <Choice key={options.indexOf(options[1])} submit={props.submit} ques={props.question} value={he.decode(options[1].value)} isCorrect={options[1].isCorrect} />
            <Choice key={options.indexOf(options[2])} submit={props.submit} ques={props.question} value={he.decode(options[2].value)} isCorrect={options[2].isCorrect} />
            <Choice key={options.indexOf(options[3])} submit={props.submit} ques={props.question} value={he.decode(options[3].value)} isCorrect={options[3].isCorrect} />
            
        </section>
        <hr></hr>
        </div>
    )
}