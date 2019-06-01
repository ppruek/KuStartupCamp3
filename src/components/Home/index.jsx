import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";
import main_pic from "./main_pic.png";

const Head = {
  position: "absolute",
  width: "100%",
  height: 20,
  left: 0,
  top: 0,
  background: "rgba(12, 16, 20, 0.94)"
};

const Img = {
  position: "block",
  width: "100%",
  height: "545px",
  marginLeft: "auto",
  marginRight: "auto",
  opacity: 0.4
};

const center = {
  color: "white",
  fontSize: "50px",
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const myContainer = {
  position: "relative",
  width: "50%",
  fontFamily: "Abhaya Libre Medium"
};

class Home extends Component {
  render() {
    return (
      <Container text>
        <div style={Head} />
        <Image src={main_pic} style={Img} />
        <div style={center}>BANDNAMEBAG</div>

        <div style={myContainer}>
          <h1>BRANDNAME</h1>
        </div>
      </Container>
    );
  }
}

export default Home;
