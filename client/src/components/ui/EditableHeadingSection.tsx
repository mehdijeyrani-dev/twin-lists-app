import React, { useState } from "react";

interface EditableHeadingSectionProps {
  initialText?: string;
  onSave?: (newText: string) => void;
  className?: string;
}

const EditableHeadingSection = ({
  initialText,
  onSave,
  className,
}: EditableHeadingSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleBlur = () => {
    const trimmed = text?.trim();
    if (trimmed === "") {
      setText(initialText);
    } else if (trimmed !== initialText) {
      onSave?.(trimmed!);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = e.target as HTMLInputElement;
      input.blur();
    }
  };

  return (
    <div className={`w-fit max-w-full overflow-hidden ${className}`}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          autoFocus
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="field-sizing-content min-w-fit max-w-full bg-transparent outline-none"
          placeholder="Board name"
        />
      ) : (
        <h2
          className="w-full truncate cursor-pointer"
          onClick={() => setIsEditing(true)}
        >
          {text || "Board name"}
        </h2>
      )}
    </div>
  );
};

export default EditableHeadingSection;
