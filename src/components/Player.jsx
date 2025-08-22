import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing((prev) => !prev);
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" />
        )}

        <span clasName="player-symbol">{symbol}</span>
        <button onClick={handleEditing}>{!isEditing ? "Edit" : "Save"}</button>
      </span>
    </li>
  );
}
