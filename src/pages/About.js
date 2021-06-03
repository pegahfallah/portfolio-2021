import React, { useState, useEffect } from "react";
// import "./About.scss";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Slide from "react-reveal/Fade";
import Experience from "../components/Experience";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-scroll";

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
            </Slide>

            <Slide bottom cascade>
              <Text alt="About Pegah">
                I'm Pegah, a technology enthusiast, blockchain newbie, artist,
                and avid coffee drinker. I study computer science at York
                University in Toronto.
              </Text>
              <Text>
                I am currently on an internship with Honda as an applications
                engineer, working mostly with Java, SQL, and data analytics to
                make sure cars are built right. My passion lies in building
                future-focussed, accessible, and impactful applications in Web3
                ! Right now, you can find me developing the frontend of an NFT
                web application for{" "}
                <span className="rainbow">
                  <a
                    href="https://www.linkedin.com/company/layer-technologies/"
                    target="_blank"
                  >
                    Layer Technologies.
                  </a>
                </span>{" "}
              </Text>
              <Text>
                I love to learn. Whenever I hear a about a new framework or tech
                term, I add it to my reading list. You can find me exploring the
                applications of Blockchain, learning
                <code> Clarity,</code>
                bringing designs to life with
                <code> Javascript, HTML, and CSS, </code>working with modern
                frameworks like <code>React,</code> <code>Next.js,</code>{" "}
                <code>Vue.js</code> and more !
              </Text>
              <Text>
                I have designed and developed with startups like{" "}
                <span className="rainbow">
                  <a href="https://mybee.app" target="_blank">
                    MyBee
                  </a>
                </span>{" "}
                and{" "}
                <span className="rainbow">
                  <a href="https://hypedocs.co" target="_blank">
                    Hypedocs,
                  </a>
                </span>{" "}
                and I love contributing to cool projects, so feel free to reach
                out!
              </Text>
            </Slide>
          </TextContainer>
        </LeftContainer>
        <RightContainer>
          <Slide bottom cascade>
            {/* <Title>What am I up to right now?</Title> */}
          </Slide>
          <MarginContainer>
            <Slide bottom cascade>
              <img
                alt="memoji of pegah"
                height="300px"
                src={open ? "./Image.png" : "./me.png"}
                onMouseOver={() => setOpen(true)}
                onMouseOut={() => setOpen(false)}
              />
            </Slide>
          </MarginContainer>
        </RightContainer>
      </Container>
      <Scroll>
        <Link to="projects" spy={true} smooth={true} offset={50} duration={800}>
          <Player
            autoplay
            src="https://assets2.lottiefiles.com/temp/lf20_J1XkLr.json"
            style={{ height: "50px", width: "50px" }}
            seek
            loop
          ></Player>
        </Link>
      </Scroll>
    </AboutPage>
  );
}
