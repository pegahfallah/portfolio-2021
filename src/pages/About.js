import React, { useState, useEffect } from "react";
// import "./About.scss";
import styled from "styled-components";
import Slide from "react-reveal/Fade";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-scroll";
import Contact from "./Contact";

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  padding-top: 10%;
  margin-bottom: 5%;
  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const Scroll = styled.div``;

const AboutPage = styled.div`
  @media only screen and (max-width: 960px) {
    margin-bottom: 40%;
  }
  @media only screen and (max-width: 800px) {
    padding-bottom: 200px;
  }
`;

const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
const RightContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const MarginContainer = styled.div`
  margin-top: 8%;
`;
const TextContainer = styled.div`
  text-align: left;
  padding-left: 20%;
  @media only screen and (max-width: 960px) {
    padding: 4%;
  }
`;
const Title = styled.h2`
  color: white;
  text-align: left;
`;
const SubTitle = styled.h3``;
const Text = styled.h4`
  color: white;
`;

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <AboutPage id="about">
      <Container>
        <LeftContainer>
          <TextContainer>
            <Slide bottom cascade>
              <Title>👋 Nice to meet You!</Title>{" "}
              <Text>
                I study computer science at York University in Toronto. My
                passion lies in building future-focussed, accessible, and
                impactful applications.
              </Text>
            </Slide>
          </TextContainer>
        </LeftContainer>
        <RightContainer>
          <MarginContainer>
            <Slide bottom cascade>
              <Contact id="contact"></Contact>
            </Slide>
          </MarginContainer>
        </RightContainer>
      </Container>
    </AboutPage>
  );
}
