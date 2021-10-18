import React, { useState, useEffect } from 'react'
import '../questions/Questions.css'
import Result from '../result/Result'
import { useHistory } from 'react-router';
import Timer from '../timer/Timer';


function Questions({ quiz }) {

    const [number, setNumber] = useState(0)
    // console.log(quiz[number].options)
    const [score, setScore] = useState(0)
    const [stop, setStop] = useState(false)

    const [timer, setTimer] = useState(60)
    // console.log(stop)


    useEffect(() => {

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        const interval1 = setInterval(() => {
            setStop(true)
        }, 60000)
    }, [])
    // console.log(sto

    console.log(stop)
    const pickAnswer = (e) => {

        let userAnswer = e.target.outerText;

        if (quiz[number].answer === userAnswer) setScore(score + 1);
        setNumber(number + 1);
    }


    return (
        <div className="Questions">




            {stop ? <Result score={score} /> : (
                <div className="vv">
                    {quiz[number] &&


                        <div className="container">
                            <div className="row">
                                <div className="col-2 offset-10">Time Left : {timer} sec</div>
                                <div className="col-12 mt-5">
                                    <h1>{quiz[number].question}</h1>
                                </div >
                            </div >

                            <div className="row">

                                {quiz[number].options.map((item, index) => {
                                    return (

                                        <div className="col-12">
                                            <button type="button" key={index} class="btn option_button  btn-light mt-5" onClick={pickAnswer}> {item} </button>
                                        </div>
                                    )
                                })}



                            </div>
                        </div >





                    }
                    {
                        number === 5 && <Result score={score} />
                    }

                </div>
            )}
        </div >
    )
}

export default Questions
