import React from 'react'
import "../home/Home.css"
import { useState } from "react";
import { useHistory } from 'react-router';

function Home({ fetchQuestion }) {

    const history = useHistory();
    const [Level, setLevel] = useState("easy")

    const handleSumbit = () => {
        console.log(Level)
        fetchQuestion(Level);
        history.push('/quiz')
    }

    return (
        <div className="Home">

            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <h1>Take the Quiz</h1>
                    </div>
                </div>




                <div className="row start-button">
                    <div className="col-12   ">
                        <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button"
                            onClick={handleSumbit}>
                            Start Quiz
                        </button>
                    </div>
                </div>






                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Diffculty Level
                </label>
                <div class="inline-block relative w-64">
                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => setLevel(e.target.value)}
                    >
                        <option>easy</option>
                        <option>medium</option>
                        <option>hard</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>















            </div>
        </div>
    )
}

export default Home
