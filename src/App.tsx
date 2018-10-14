import * as React from "react";
import "./App.css";
// import { Chap01 } from "./chap01";
// import { Chap02 } from "./chap02";
// import { Chap03 } from "./chap03";
// import { Chap04 } from "./chap04";
// import { Chap05 } from "./chap05";
import { Chap06 } from "./chap06";

import logo from "./logo.svg";

class App extends React.Component {
  public Hoge() {
    // Chap01();
    // Chap02();
    // Chap03();
    // Chap04();
    // Chap05();
    Chap06();
  }
  public render() {
    this.Hoge();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">こんにちは React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
