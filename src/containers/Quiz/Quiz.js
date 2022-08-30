import React, { Component } from 'react'
import { ActiveQuiz } from '../../Components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'
export default class Quiz extends Component {
    state = {
        quiz: [
            {
                question: ['Who was discovered US ?'],
                answers: [
                    'Question',
                    'Question',
                    'Question',
                    'Question',
                ]
            }
        ]
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz answers={this.state.quiz[0].answers} />
                </div>
            </div>
        )
    }
}
