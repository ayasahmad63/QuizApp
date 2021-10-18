
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Quiz from './components/quiz/Quiz';
import Result from './components/result/Result';

function App() {
  const [questions, setQuestions] = useState({})
  const [score, setscore] = useState(0)

  const fetchQuestion = async (Level) => {
    await fetch(
      `https://opentdb.com/api.php?amount=5&category=9&difficulty=${Level}`
    )
      .then((res) => res.json())
      .then((questions) => {

        setQuestions(questions.results);
        // console.log(questions);
        // console.log(data);

      });

    // console.log(questions)
  }

  return (
    <BrowserRouter>
      <div className="App">



        <Switch>

          <Route path="/" exact>
            <Home fetchQuestion={fetchQuestion} />
          </ Route >


          <Route path="/quiz" exact >
            <Quiz
              questions={questions}
              score={score}
              setscore={setscore}
              setQuestions={setQuestions} />
          </ Route >

          <Route path="/result" >
            <Result />
          </ Route >


        </ Switch>


      </div>
    </ BrowserRouter >
  );
}

export default App;
