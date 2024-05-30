import React from "react";
import Entry from "./component/entry";
import emojipedia from "./component/emojipedia";
import './App.css';


function App() {
  return (
    <div>
      <div className="creater">
<<<<<<< HEAD
        <h3 >By Sumit Kumar Shriwastava</h3>
=======
        <h3 >By Amit Giri</h3>
>>>>>>> a66c5df32adcce5157490e981d908572fa970004
      </div>
      <h1>
        <span>Emoji Center</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(nEntry => (
        <Entry
          key={nEntry.id}
          emoji={nEntry.emoji}
          name={nEntry.name}
          mean={nEntry.meaning}
        />
      ))
      }</dl>
    </div>
  );
}

export default App;
