import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia";

function createEntry(term) {
  return (
    <Entry key={term.id} icon={term.icon} name={term.name} text={term.text} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
