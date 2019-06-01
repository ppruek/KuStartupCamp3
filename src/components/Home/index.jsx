import React, { Component } from "react";
import { Container, Image, Divider } from "semantic-ui-react";
import main_pic from "./main_pic.png";
import balen from "./balen.jpg";
import celine from "./celine.jpg";
import chanel from "./chanel.jpg";
import fendi from "./fendi.jpg";
import gucci from "./gucci.jpg";
import hermes from "./hermes.jpg";
import louis from "./louis vitt.jpg";
import prada from "./prada.jpg";
import Carousel from "react-bootstrap/Carousel";

const Head = {
  position: "absolute",
  width: "100vw",
  height: 40,
  left: 0,
  top: 0,
  background: "rgba(12, 16, 20, 0.94)"
};

const Img = {
  display: "block",
  width: "1440px",
  height: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "-5%"
};

const center = {
  color: "white",
  fontSize: "50px",
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const groupImg = {
  width: "250px",
  height: "250px",
  margin: "0px 50px 10px 72px"
};

const brandSize = {
  width: "1500px"
};
const myCarousel = {};

class Home extends Component {
  render() {
    return (
      <Container text>
        <div style={Head} />
        <Image src={main_pic} style={Img} />
        <div style={center}>LABXURY</div>
        <div style={myCarousel}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div style={brandSize}>
          <Image.Group>
            <Image src={gucci} style={groupImg} />
            <Image src={prada} style={groupImg} />
            <Image src={chanel} style={groupImg} />
            <Image src={balen} style={groupImg} />
          </Image.Group>
          <Divider hidden />
          <Image.Group>
            <Image src={hermes} style={groupImg} />
            <Image src={louis} style={groupImg} />
            <Image src={celine} style={groupImg} />
            <Image src={fendi} style={groupImg} />
          </Image.Group>
        </div>
      </Container>
    );
  }
}

export default Home;
