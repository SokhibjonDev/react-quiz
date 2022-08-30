import React from 'react'
import AnswerItem from './AnswerItem/AnswerItem'
import classes from './AnswersList.module.css'

export const AnswersList = (props) => {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        return <AnswerItem
          answer={answer}
          key={index}
          onAnswerClick={props.onAnswerClick}
        />
      })}
    </ul>
  )
}