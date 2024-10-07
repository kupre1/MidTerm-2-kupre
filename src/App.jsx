import React, { useState } from "react";

function App() {
  const [inputvalue, setValue] = useState("");
  const [word, setWord] = useState([]);

  const addword = (event) => {
    event.preventDefault();
    if (inputvalue) {
      setWord([...word, inputvalue]);
      setValue("");
    }
  };

  return (
    <>
      <form onSubmit={addword}>
        <input
          type="text"
          value={inputvalue}
          onChange={(prev) => setValue(prev.target.value)}
          className=""
          placeholder="chawere sityva"
        />
        <button type="submit"> damateba</button>
      </form>
      <div>
        <ul>
          {word.map((word, index) => (
            <li key={index}> {word}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
