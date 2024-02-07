import { useState } from "react";

export default function Player({initialName, symbol}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        // event is automatic for onChange with every keystroke
        console.log(event);
        // target is the field itself, the input in this case
        setPlayerName(event.target.value)
    }

    let editiblePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit"

    if (isEditing) {
        editiblePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption = "Save"
    }

    return (
        <li>
            <span className="player">
                {editiblePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}