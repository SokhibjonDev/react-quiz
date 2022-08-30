import React from 'react'
import classes from './ActiveQuiz.module.css'
import { AnswersList } from './AnswersList/AnswersList.js'

export const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}> <strong>2.</strong>Who was discovered US ?</p>
            <AnswersList answers={props.answers}/>
        </div>
    )
}