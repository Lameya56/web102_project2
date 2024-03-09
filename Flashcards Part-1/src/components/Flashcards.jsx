import React from "react";

const Flashcards= ({ question, answer, showAnswer, onFlip })=> {
    return (
        <div className="Flashcard" onClick={onFlip}>
        <div className={`card ${showAnswer ? 'flipped' : ''}`}>
          <div className="front">
            <h3>{question}</h3>
          </div>
          <div className="back">
            <h3>{answer}</h3>
          </div>
        </div>
      </div>
    )
}
export default Flashcards;
