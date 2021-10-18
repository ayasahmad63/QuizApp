import React from 'react'
import "../quiz/Quiz.css"
import Questions from '../questions/Questions'

function Quiz({ quiz }) {







    console.log(quiz);






    return (
        <div className="contsinrr">
            {
                quiz[0] ? (<div>
                    <Questions quiz={quiz} />
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
