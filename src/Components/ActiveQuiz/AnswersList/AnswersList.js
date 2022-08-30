import React from 'react'
import classes from './AnswersList.module.css'

export const AnswersList = (props) => {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        return <li key={index}>{answer}</li>
      })}
    </ul>
  )
}