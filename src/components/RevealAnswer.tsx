import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);

    const onClick = () => {
        setRevealed(!revealed);
    };
    return (
        <div>
            <Button onClick={onClick}>Reveal Answer</Button>
            {revealed && <p>42</p>}
        </div>
    );
}
