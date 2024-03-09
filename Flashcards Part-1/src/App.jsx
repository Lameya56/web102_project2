import { useState } from 'react'
import Flashcards from './components/Flashcards' 
import './App.css'


const App= () =>{
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleFlip = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % quiz.length);
  };

  const quiz =
  [
    {
      question: 'What is the largest planet in our solar system?',
      answer: 'Jupiter'
    },
    {
      question: 'Which planet in our solar system has massive rings that are easily visible with a small telescope?',
      answer: 'Saturn'
    },
    {
      question: 'Mars is often called “The Red Planet,” but why does it look so red to begin with?',
      answer: 'The surface has a lot of iron which turns orange-red when it rusts'
    },
    {
      question: 'Which planets spins on its side?',
      answer: 'Uranus'
    },
    {
      question: 'During the day this planet gets hot enough to melt lead, but at night the temperature drops to -290°F?',
      answer: 'Mercury'
    },
    {
      question: 'The Sun is considered to be a “medium-sized” yellow dwarf star. But how many Earths would it take to fill the volume of the Sun?',
      answer: '1.3 million'
    },
    {
      question: 'The Sun is considered to be pleasantly “middle-aged”. But how long before it is on its “death bed”?',
      answer: '6.5 billion years'
    },
    {
      question: 'The mass of the Sun accounts for 99.8% of the mass of the entire Solar System. But what makes up most of the other 0.2%?',
      answer: 'Jupiter'
    },
    {
      question: 'Which is the furthest planet from the Sun?',
      answer: 'Neptune'
    },
    {
      question: 'One year on Mercury is equal to how many days on Earth?',
      answer: '88 days'
    }
  ]

  return (
    <div className="App">
      <div className="header">
        <h1>Solar System Quiz!</h1>
        <h2>Are you ready to embark on a cosmic journey and test your knowledge of the universe? Prepare to delve into the mysteries of our Solar System with 10 thought-provoking questions. Discover how much you truly know about the wonders of space and challenge yourself to reach for the stars! </h2>
        </div>

      {/* {
        quiz.map((card,index) =>{
          return(
            <Flashcards
            key={index}
            question={card.question}
            answer={card.answer}
            />   
          )
        })
      } */}
      <Flashcards
        question={quiz[currentCardIndex].question}
        answer={quiz[currentCardIndex].answer}
        showAnswer={showAnswer}
        onFlip={handleFlip}
      />
      <button onClick={handleNextCard}>Next Card</button>
     
    </div>
  )
}

export default App


