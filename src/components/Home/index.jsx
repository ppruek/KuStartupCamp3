import React, { Component } from "react";
import { Container, Image, Divider } from "semantic-ui-react";
import main_pic from "./main_pic.png";
import balen from "./balen.jpg";
import celine from "./celine.jpg";
import chanel from "./chanel.jpg";
import coah from "./coah.jpg";
import gucci from "./gucci.jpg";
import hermes from "./hermes.jpg";
import louis from "./louis vitt.jpg";
import prada from "./prada.jpg";

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

class Home extends Component {
  render() {
    return (
      <Container text>
        <div style={Head} />
        <Image src={main_pic} style={Img} />
        <div style={center}>LABXURY</div>
        <div>
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
            <Image src={coah} style={groupImg} />
          </Image.Group>
        </div>
      </Container>
    );
  }
}

export default Home;
