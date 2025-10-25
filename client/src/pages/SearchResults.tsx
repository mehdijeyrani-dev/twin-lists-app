import React, { useState } from "react";

function SearchResults() {
  const [inputValue1, setInputValue1] = useState(""); // برای onInput
  const [inputValue2, setInputValue2] = useState(""); // برای onChange

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>مثال تفاوت onInput و onChange</h2>

      {/* onInput */}
      <div style={{ marginBottom: "20px" }}>
        <label>با onInput: </label>
        <input
          type="text"
          onInput={(e) => setInputValue1(e.target.value)}
          placeholder="اینجا تایپ کن"
        />
        <p>مقدار لحظه‌ای: {inputValue1}</p>
      </div>

      {/* onChange */}
      <div>
        <label>با onChange: </label>
        <input
          type="text"
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="اینجا تایپ کن"
        />
        <p>مقدار بعد از خروج از فیلد: {inputValue2}</p>
      </div>
    </div>
  );
}

export default SearchResults;
