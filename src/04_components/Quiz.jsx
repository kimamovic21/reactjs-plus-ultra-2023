import { PITANJA } from '../pitanja';
import Question from './Question';
import { useState, useEffect } from 'react';
import Score from './Score';

const Quiz = () => {
    const {questions} = PITANJA;
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [areYouSure, setAreYouSure] = useState(false);
    const [checkIsSure, setCheckIsSure]= useState(false);

    useEffect(() => {
        console.log(score);
    }, [score]);

    return (
        <div>
            <h3>Quiz game</h3>
            <h4>{PITANJA.title}</h4>
            <div className="question">
                {showScore ? 
                    <Score 
                        score={score} 
                        questions={questions} 
                    /> :
                    <Question
                        question={questions[activeQuestion]}
                        setActiveQuestion={setActiveQuestion}
                        setScore={setScore}
                        finalQuestion={questions.length === activeQuestion + 1}
                        setShowScore={setShowScore}
                        setAreYouSure={setAreYouSure}
                        setCheckIsSure={setCheckIsSure}
                        checkIsSure={checkIsSure}
                        areYouSure={areYouSure}
                    />
                }
            </div>
        </div>
    );
};

export default Quiz;