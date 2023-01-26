import './App.css';
import React from "react";
import FirstPage from './components/FirstPage';
import Question from './components/Question';

function App() {
	const [start, setStart] = React.useState(false);
	const [questionsArray, setQuestionsArray] =React.useState([]) ;
	const [isSubmitted, setIsSubmitted] = React.useState(false);

	function startQueez(){
		setStart(true);
		fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
			.then(response => response.json())
			.then(data => setQuestionsArray(data.results))
	}
	
	let questions =[];
	if(start){
		questions = questionsArray.map(que => (
			<Question key={questionsArray.indexOf(que)} submit={isSubmitted} question={que.question} correct={que.correct_answer} incorrect={[...que.incorrect_answers]} />
		))
	}
	
	return (
		start?<main>
			<div>
				{questions}	
			
			{isSubmitted?
				<button className="submit" onClick={()=>{setStart(false);setIsSubmitted(false);setQuestionsArray([])}}>Play Again</button>:
				<button className="submit" onClick={()=>setIsSubmitted(true)}>Submit</button>}
			</div>
			</main>:<FirstPage onClick={startQueez}/>
	);
}

export default App;
