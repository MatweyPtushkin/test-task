import React from "react";
import "./App.css";
import Header from "../header/Header";
import Main from "../main/Main";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <div className="mySite">
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
