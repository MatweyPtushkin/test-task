import React from "react";
import "./About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftTitle: "",
      rightTitle: "",
      col: "",
      leftText: "",
      rightText: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/alexandrov-va/7f353ca822d074d7ce22d3af3d13696f/raw/0907091de6fedf6153cdb718f32a4215dc2c53cf/page.json"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          leftTitle: data.components[1].metadata.components[0].metadata.title,
          col: data.components[1].metadata.components[0].col,
          leftText: data.components[1].metadata.components[0].metadata.text,
          rightText: data.components[1].metadata.components[1].metadata.text,
          rightTitle: data.components[1].metadata.components[1].metadata.title,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className="about">
        <div className="row">
          <div className={"col-" + this.state.col}>
            <h1>{this.state.leftTitle}</h1>
            <div dangerouslySetInnerHTML={{ __html: this.state.leftText }} />
          </div>
          <div className={"col-" + this.state.col}>
            <h1>{this.state.rightTitle}</h1>
            <div dangerouslySetInnerHTML={{ __html: this.state.rightText }} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
