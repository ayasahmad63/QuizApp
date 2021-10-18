import React, { useState, useEffect } from 'react'
import "../quiz/Quiz.css"
import Questions from '../questions/Questions'

function Quiz({ score, questions, setquestions, setscore }) {
    const [options, setOptions] = useState()
    const [currQues, setcurrQues] = useState(0)




    useEffect(() => {
        // console.log(questions);

        setOptions(() => {
            return
            questions &&
                handleShuffle([
                    questions[currQues]?.correct_answer,
                    ...questions[currQues]?.incorrect_answers,
                ])
        }

        );


    }, [currQues, questions]);

    // console.log(options);


    const handleShuffle = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5);

    }



    return (
        <div className="contsinrr">
            {
                questions ? (<div>
                    <Questions questions={questions} />
                </div>) : (

                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only"></span>
                    </div>
                )
            }
        </div>
    )
}

export default Quiz
