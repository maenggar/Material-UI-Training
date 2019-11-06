import React from "react";
import ReactDOM from "react-dom";
import { Header, Main, Footer } from "./layout";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
