import React from "react";
import "./styles.css";

function Article() {
  return (
    <>
      <article className="article">
        <h2 className="article__title">TitelTitel</h2>
        <label htmlFor="input">Input Field Baby</label>
        <input id="input"></input>
        <a className="article__link" href="https://de.wikipedia.org/wiki/Wurst">
          Wurst ist kein Käse
        </a>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Wurst_und_Schinken.jpg/1920px-Wurst_und_Schinken.jpg" />
      </article>
    </>
  );
}

export default function App() {
  return <Article />;
}
