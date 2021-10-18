import React from 'react'
import Home from '../home/Home'
import "../result/Result.css"
import { useHistory } from 'react-router';

function Result({ score }) {
    console.log(score)
    const history = useHistory();

    const refreshPage = () => {
        history.push('/')
    }

    var word;
    switch (score) {
        case 0:
            word = "Very Poor"
            break;
        case 1:
            word = "Poor"
            break;
        case 2:
            word = "Bad"
            break;
        case 3:
            word = "Good"
            break;
        case 4:
            word = "Strong"
            break;
        case 5:
            word = "Very Strong"


    }
    return (

        <div className="Result_Section">
            <h1>Welcome to Result Section</h1>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        You  have score {score} out of 5
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">
                        <h1>You have {word} General Knowledge</h1>
                    </div>
                </div>

            </div>

            <div className="col-12">
                <button type="button" class="btn btn-light" onClick={refreshPage} >Retry Quiz</button>
            </div>
        </div>
    )
}

export default Result
