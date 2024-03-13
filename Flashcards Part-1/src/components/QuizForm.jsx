import React, {Component, useState} from "react";
const QuizForm = ({ userAnswer, onChangeAnswer, onSubmitAnswer, isAnswerCorrect }) =>{
    const inputStyles = {
        border: isAnswerCorrect === true ? '2px solid green' : isAnswerCorrect === false ? '2px solid red' : '2px solid #ccc',
      };
    
    return(
        <div className="QuizForm">
        <div className="input-container">
        <h2>Guess the Answer here: </h2>
      <input
        type="text"
        value={userAnswer}
        onChange={onChangeAnswer}
        style={inputStyles}
      />
      <button type="button" className="button submit" onClick={onSubmitAnswer}>Check Answer</button>
      </div>
      {isAnswerCorrect !== null && (
        <p>{isAnswerCorrect ? 'Correct!' : 'Incorrect. Please try again.'}</p>
      )}
            {/* <form>

            </form>
            <h2>Guess the Answer here: </h2>
            <button type="submit" className="button submit" onClick={onCheckAnswer}>Check Answer</button> */}
        </div>
    )
}
export default QuizForm;