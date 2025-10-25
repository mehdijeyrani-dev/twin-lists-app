import React, { useState } from "react";

interface SectionProps {
  initialText: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ initialText, className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div className={`w-fit max-w-full overflow-hidden ${className}`}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="field-sizing-content min-w-fit max-w-full bg-transparent"
          placeholder="Board name"
        />
      ) : (
        <h2 className="w-full truncate" onClick={() => setIsEditing(true)}>
          {text || "Board name"}
        </h2>
      )}
    </div>
  );
};

export default Section;
