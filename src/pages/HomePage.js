import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Container = styled.div`
  margin: auto;
`;

export default function HomePage() {
  const [play, setPlay] = useState(false);

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <h1 className="rainbow-text">Hi. I'm Pegah. </h1>
        {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src=""  background="transparent"  speed="1"  style="width: 200px; height: 200px;" hover loop controls autoplay></lottie-player> */}
        <Player
          autoplay
          src="https://assets2.lottiefiles.com/temp/lf20_J1XkLr.json"
          style={{ height: "70px", width: "70px" }}
          seek
          loop
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </Container>
    </>
  );
}
