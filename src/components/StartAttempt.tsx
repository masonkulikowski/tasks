import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [started, setStarted] = useState<boolean>(false);

    const startQuiz = () => {
        setStarted(true);
        setAttempts(attempts - 1);
    };

    const stopQuiz = () => {
        setStarted(false);
    };

    const mulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <Button onClick={startQuiz} disabled={started || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!started}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={started}>
                Mulligan
            </Button>
            <p>Attempts: {attempts}</p>
        </div>
    );
}
