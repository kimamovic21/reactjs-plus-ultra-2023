import React from "react";

const Score = ({score, questions}) => {

    return (
        <div>
            <h2>Rezultat je: {score}</h2>
            <h3>Broj tacnih je: {score / 5}</h3>
            <h3>Broj netacnih je: {questions.length - (score / 5) }</h3>
        </div>
    );
};

export default Score;