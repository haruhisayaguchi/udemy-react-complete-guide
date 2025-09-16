import { useState, useCallback } from 'react'
import Question from './Question.jsx';
import Summary from './Summary.jsx';
import QUESTIONS from '../questions.js'

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);
	const activeQuestionIndex = userAnswers.length;
	const quizComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
		setUserAnswers(prev => [...prev, selectedAnswer])
	}, [])

	const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

	if (quizComplete) {
		return (
			<Summary userAnswers={userAnswers} />
		)
	}

	return (
		<div id='quiz'>
			<Question
				key={activeQuestionIndex}
				index={activeQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	)
}