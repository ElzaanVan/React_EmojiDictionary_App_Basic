import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";
import Footer from "./Footer"

function App() {
  return (
    <div>
      <h1>
        <span>emoji-dictionary</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map( em => (
        <Entry 
        key = {em.id}
        emoji= {em.emoji}
        name={em.name}
        meaning={em.meaning}
        />)
        )}
      </dl>
      <Footer />
    </div>

  );
}

export default App;

