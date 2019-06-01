import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";
import main_pic from "./main_pic.png";

const Head = {
  position: "absolute",
  width: "100vw",
  height: 40,
  left: 0,
  top: 0,
  //   marginLeft: "40px",
  background: "rgba(12, 16, 20, 0.94)"
};

const Img = {
  display: "block",
  width: "1440px",
  height: "700px",
  marginLeft: "auto",
  marginRight: "auto"
};

const center = {
  color: "white",
  fontSize: "50px",
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

class Home extends Component {
  render() {
    return (
      <Container text>
        <div style={Head} />
        <Image src={main_pic} style={Img} />
        <div style={center}>LABXURY</div>
      </Container>
    );
  }
}

export default Home;
