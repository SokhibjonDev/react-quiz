import React, { Component } from 'react'
import { ActiveQuiz } from '../../Components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'
export default class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: ['Who was discovered US ?'],
                id: 1,
                correnctAnswerId: 1,
                answers: [
                    { text: 'Columb', id: 1 },
                    { text: 'Beruniy', id: 2 },
                    { text: 'Ronaldo', id: 3 },
                    { text: 'Joe Biden ', id: 4 }
                ]
            },
            {
                question: ['When is independense day of UZB ?'],
                id: 2,
                correnctAnswerId: 2,
                answers: [
                    { text: '1994', id: 1 },
                    { text: '1991', id: 2 },
                    { text: '1992', id: 3 },
                    { text: '2001', id: 4 }
                ]
            }
        ]
    }
    onAnswerClickHandler = (answerId) => {
        const question = this.state.quiz[this.state.activeQuestion]

        if (question.correnctAnswerId === answerId) {
            if (this.state.activeQuestion === this.state.quiz.length - 1) {
                console.log('Finished');
            }else{
                const timeout = window.setTimeout(() => {
                this.setState({
                    activeQuestion: this.state.activeQuestion + 1
                })
                window.setTimeout(timeout)
            }, 500)
            }
            
        } else {

        }
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                        activeQuestion={this.state.activeQuestion + 1}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                    />
                </div>
            </div>
        )
    }
}
