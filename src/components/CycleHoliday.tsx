import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "New Year"
    | "Christmas"
    | "Halloween"
    | "Thanksgiving"
    | "Easter";

const holidayEmojis: Record<Holiday, string> = {
    "New Year": "🎉",
    Christmas: "🎄",
    Halloween: "🎃",
    Thanksgiving: "🦃",
    Easter: "🐰"
};

const holidayByAlphabet: Holiday[] = [
    "Christmas",
    "Easter",
    "Halloween",
    "New Year",
    "Thanksgiving"
];
const holidayByDate: Holiday[] = [
    "New Year",
    "Easter",
    "Halloween",
    "Thanksgiving",
    "Christmas"
];

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("New Year");

    const advanceByAlphabet = () => {
        const currentIndex = holidayByAlphabet.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % holidayByAlphabet.length;
        setHoliday(holidayByAlphabet[nextIndex]);
    };

    const advanceByDate = () => {
        const currentIndex = holidayByDate.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % holidayByDate.length;
        setHoliday(holidayByDate[nextIndex]);
    };

    return (
        <div>
            <p>Holiday: {holidayEmojis[holiday]}</p>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByDate}>Advance by Year</Button>
        </div>
    );
}
