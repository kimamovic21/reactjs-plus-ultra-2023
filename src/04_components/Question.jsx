import React, {useState} from 'react';

const Question = ({question, setActiveQuestion, setScore, finalQuestion, setShowScore, setAreYouSure, setCheckIsSure, checkIsSure, areYouSure}) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleClickNext = () => {
        if(selectedAnswer) {
            // kalkulacija za score
            if(selectedAnswer === question.correctAnswer) {
                setScore(prevState => prevState + 5);
            }
            setActiveQuestion((prevState) => prevState + 1)
            setSelectedAnswer(null);
        };
    };

    const handleFinish = () => {
        if(selectedAnswer) {
            if(selectedAnswer === question.correctAnswer) {
                setScore(prevState => prevState + 5);
            }
            setCheckIsSure(true);
        };
    };

    return (
        <div className="question-wrapper">
            <h4>{question.title}</h4>
            <div className="choices-wrapper">
                {question.choices.map((choice) =>  
                    <div key={choice} 
                         className="choice"
                         onClick={() => setSelectedAnswer(choice)}>{choice}
                    </div>
                )}
            </div>

             {finalQuestion ? 
                <>{checkIsSure ? <button onClick={() => setShowScore(true)}>Are you sure</button> : 
                    <button className={`next-button ${!selectedAnswer ? 'disabled' : 'pointer'}`} 
                            onClick={handleFinish} 
                            disabled={!selectedAnswer}>
                        Finish
                    </button>
                }  </> :
                    <button className={`next-button ${!selectedAnswer ? 'disabled' : 'pointer'}`} 
                            onClick={handleClickNext} 
                            disabled={!selectedAnswer}>
                        Next
                    </button>
            }
        </div>
    );
};

export default  Question;



// {
//     title: "How can a datatype be declared to be a constant type?",
//     choices: ["const", "var", "let", "constant"],
//     correctAnswer: "const",
//   },
