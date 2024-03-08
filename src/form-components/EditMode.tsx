import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                Edit Mode:
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={() => setIsEditMode(!isEditMode)}
                />
            </label>
            {isEditMode ? (
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Is a student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                        />
                    </label>
                </div>
            ) : (
                <div>
                    {name} is {isStudent ? "" : "not "}a student
                </div>
            )}
        </div>
    );
}
