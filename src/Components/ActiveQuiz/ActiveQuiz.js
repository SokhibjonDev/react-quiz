import React from 'react'
import classes from './ActiveQuiz.module.css'
import { AnswersList } from './AnswersList/AnswersList.js'

export const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}><strong>{props.activeQuestion}</strong>.{props.question}</p>

            <small>{props.activeQuestion} in {props.quizLength}</small>

            <AnswersList answers={props.answers} onAnswerClick={props.onAnswerClick} />
        </div>
    )
}