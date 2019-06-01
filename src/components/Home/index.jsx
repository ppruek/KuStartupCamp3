import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";
import main_pic from "./main_pic.png";

const Head = {
  position: "absolute",
  width: "100vw",
  height: 20,
  left: 0,
  top: 0,
  background: "rgba(12, 16, 20, 0.94)"
};

const Img = {
  display: "block",
  marginTop: "2.8vh",
  marginLeft: "auto",
  marginRight: "auto",
  opacity: 0.7
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
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.63) 0%, rgba(255, 255, 255, 0) 100%)"
          }}
        >
          <Image src={main_pic} style={Img} />
          <div style={center}>BANDNAMEBAG</div>
        </div>

        <div style={myContainer}>
          <h1>BRANDNAME</h1>
        </div>
      </Container>
    );
  }
}

export default Home;
