import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [userAnswer, setUserAnswer] = useState("");

    const handleUse = () => {
        setAttempts(attempts - 1);
    };

    const handleGain = () => {
        const parsedAttempts = parseInt(userAnswer);
        if (!isNaN(parsedAttempts)) {
            setAttempts(attempts + parsedAttempts);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attempts}</div>
            <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={handleUse} disabled={attempts === 0}>
                Use
            </button>
            <button onClick={handleGain}>Gain</button>
        </div>
    );
}
