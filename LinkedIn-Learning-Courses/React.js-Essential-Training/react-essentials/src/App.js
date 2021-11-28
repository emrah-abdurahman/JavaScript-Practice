import React from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Eve's Kitchen</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Main</h2>
      <h3>Footer</h3>
    </div>
  );
}

export default App;
