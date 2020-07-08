import React from "react";
import "./Main.css";
import Gallery from "../gallery/Gallery";
import About from "../about/About";
import Form from "../form/Form";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Gallery/>
        <About/>
        <Form/>
      </div>
    );
  }
}

export default Main;
