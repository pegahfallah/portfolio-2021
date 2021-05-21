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
  padding-left 10%;
 @media only screen and (max-width: 960px) {
    width: 100%;
    
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
  return (
    <AboutPage id="about">
      <Container>
        <LeftContainer>
          <TextContainer>
            <Slide bottom cascade>
              <Title>👋 Nice to meet You!</Title>{" "}
            </Slide>

            <Slide bottom cascade>
              <Text>
                I'm Pegah, a technology enthusiast, blockchain newbie, artist,
                and avid coffee drinker. I'm in my third year of Computer
                Science at York University.
              </Text>
              <Text>
                In my second year, I joined a startup working with React, and
                since then, frontend development has become my outlet for
                creativity. I am currently on an internship with Honda as an IT
                engineer. There I work with Java, SQL, QA testing, data
                analysis, troubleshooting and a LOT of debugging software. You
                can also catch me at a hackathon every free chance I get (and
                the proof is in my laptop stickers).
              </Text>
              <Text>
                I love to learn. Whenever I hear a new framework or tech term I
                never heard of, I add it to my reading list. Right now I like
                <code> Java, </code>
                <code>Javascript, </code> learning
                <code> Python,</code> designing and handcrafting my{" "}
                <code>CSS,</code> learning about new applications in{" "}
                <code>Blockchain,</code> working with frameworks like{" "}
                <code>React,</code>
                <code>Next.js,</code>
                <code>Vue.js</code> and more!
              </Text>
              <Text>
                I wrote my first line of HTML at 13, attempting to design my
                Tumblr page with sparkles, I remember feeling super excited
                about my little achievement when I got it to work.I took a leap
                and picked up programming once again in University and
                thankfully I fell in love!
              </Text>
            </Slide>
          </TextContainer>
        </LeftContainer>
        <RightContainer>
          <Slide bottom cascade>
            <Title>What am I up to right now?</Title>
          </Slide>
          <MarginContainer>
            <Slide bottom cascade>
              <Experience color="orange" title="Honda IT Engineering" />
              <a target="_blank" href="https://hypedocs.co/">
                <Experience
                  color="orange"
                  title="HypeDocs Software Development Apprentice"
                />
              </a>

              <Experience
                color="orange"
                title="Helen Carswell STEM Program Mentor"
              />
              <a target="_blank" href="http://mybeeapp.com/">
                <Experience
                  color="orange"
                  title="My Bee Technologies Front End Developer"
                />
              </a>
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
