import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import styled from "styled-components";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-scroll";
import About from "./About";

const Container = styled.div`
  margin: auto;
  padding-top: 4.5%;

  @media only screen and (max-width: 600px) {
    margin-top: 15%;
  }
`;
const Container2 = styled.div`
  height: 100vh;
`;
const Container3 = styled.div`
  margin-top: 15%;
`;

export default function HomePage() {
  const [play, setPlay] = useState(false);

  return (
    <>
      <Container2>
        <Container>
          <h1 className="rainbow-text">Hi. I'm Pegah. </h1>
        </Container>
      </Container2>
      <div className="margin">
        <About id="about"></About>
      </div>
    </>
  );
}
