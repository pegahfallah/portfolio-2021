import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import styled from "styled-components";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-scroll";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

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
          {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src=""  background="transparent"  speed="1"  style="width: 200px; height: 200px;" hover loop controls autoplay></lottie-player> */}
          <Container3>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
            >
              <Player
                autoplay
                src="https://assets2.lottiefiles.com/temp/lf20_J1XkLr.json"
                style={{ height: "50px", width: "50px" }}
                seek
                loop
              ></Player>
            </Link>
          </Container3>
        </Container>
      </Container2>
      <div className="margin">
        <About id="about"></About>
      </div>
      <div>
        <Projects id="projects"></Projects>
      </div>
      <div className="margin">
        <Contact id="contact"></Contact>
      </div>
    </>
  );
}
