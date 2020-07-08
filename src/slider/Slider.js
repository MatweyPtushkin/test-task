import React from "react";
import Slider from "react-slick";
import "./Slider.css";

export default class MultipleItems extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      images: [],
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
          images: data.components[0].metadata.images,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 700,
      autoplaySpeed: 4000,
      cssEase: "linear",
      adaptiveHeight: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 700,
            autoplaySpeed: 3000,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 700,
            autoplaySpeed: 2000,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slider-item">
            <img src={"/" + this.state.images[0]} alt="img1" />
          </div>
          <div className="slider-item">
            <img src={"/" + this.state.images[1]} alt="img2" />
          </div>
          <div className="slider-item">
            <img src={"/" + this.state.images[2]} alt="img3" />
          </div>
          <div className="slider-item">
            <img src={"/" + this.state.images[3]} alt="img4" />
          </div>
          <div className="slider-item">
            <img src={"/" + this.state.images[4]} alt="img5" />
          </div>
          <div className="slider-item">
            <img src={"/" + this.state.images[5]} alt="img6" />
          </div>
          <div className="slider-item">
            <img src={"/" + this.state.images[6]} alt="img7" />
          </div>
          <div className="slider-item">
            <img src={"/" + this.state.images[7]} alt="img8" />
          </div>
        </Slider>
      </div>
    );
  }
}
