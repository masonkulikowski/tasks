import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const typeNames: Record<QuestionType, string> = {
        short_answer_question: "Short Answer",
        multiple_choice_question: "Multiple Choice"
    };

    const onClick = () => {
        setType(
            type === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };
    return (
        <div>
            <Button onClick={onClick}>Change Type</Button>
            <p>{typeNames[type]}</p>
        </div>
    );
}
