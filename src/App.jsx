
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Quiz from './components/quiz/Quiz';
import Result from './components/result/Result';

function App() {


  const [quiz, setQuiz] = useState([])

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const fetchQuestion = async (Level) => {
    await fetch(
      `https://opentdb.com/api.php?amount=5&category=9&difficulty=${Level}`
    )
      .then((res) => res.json())
      .then(res => {
        // console.log(res.results);
        setQuiz(res.results.map(item => (

          {
            question: item.question,
            options: shuffle([...item.incorrect_answers, item.correct_answer]),
            answer: item.correct_answer
          }

        )));
      })
      .catch(err => console.error(err))


  }
  // console.log(quiz)
  return (
    <BrowserRouter>
      <div className="App">



        <Switch>

          <Route path="/" exact>
            <Home fetchQuestion={fetchQuestion} />
          </ Route >


          <Route path="/quiz" exact >
            <Quiz



              quiz={quiz} />
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
