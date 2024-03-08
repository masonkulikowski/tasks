import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState("");
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Pink",
        "Orange",
        "Black"
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <h3>Change Color</h3>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}
            >
                {colors.map((color) => (
                    <label
                        key={color}
                        style={{
                            backgroundColor: color,
                            color: "white",
                            marginRight: "10px"
                        }}
                    >
                        <input
                            type="radio"
                            name="colorOptions"
                            value={color}
                            onChange={(e) => setChosenColor(e.target.value)}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: chosenColor,
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px"
                }}
            >
                You have chosen {chosenColor}
            </div>
        </div>
    );
}
