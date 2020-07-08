import React from "react";
import "./Gallery.css";
import Slider from "../slider/Slider";

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/alexandrov-va/7f353ca822d074d7ce22d3af3d13696f/raw/0907091de6fedf6153cdb718f32a4215dc2c53cf/page.json"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          title: data.components[0].metadata.title,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className="gallery">
        <div className="row">
          <div className="myCarousel col-md-12">
            <header>
              <h1 className="text-left">{this.state.title}</h1>
            </header>
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
