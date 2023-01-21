import './App.css';
import React from "react";
import FirstPage from './components/FirstPage';
import Question from './components/Question';

function App() {
	const [start, setStart] = React.useState(false)

	return (
		start?<Question />:<FirstPage onClick={()=>setStart(true)}/>
	);
}

export default App;
