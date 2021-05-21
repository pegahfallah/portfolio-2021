import { Sub } from "@styled-icons/crypto";
import React from "react";
import styled from "styled-components";
import "./Projects.scss";
const Container = styled.div`
  margin: auto;
  margin-left: 8%;
  margin-right: 8%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 960px) {
    margin: auto;
    width: 100%;
  }
`;

const CardContainer = styled.div`
  width: 30%;
  margin: 8px;
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;
const Card = styled.div`
  background: #2e2c2f;
  border-radius: 25px;
  padding: 16px;
  width: fit-content;
  @media only screen and (max-width: 980px) {
    margin: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 980px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
const TitleContainer = styled.div`
  @media only screen and (max-width: 960px) {
    padding-left: 4%;
    text-align: center;
  }
`;

const TextTitle = styled.h2`
  color: white;
  text-align: left;
  margin-bottom: 4%;
  @media only screen and (max-width: 960px) {
    text-align: center;
  }
`;
const Text = styled.p`
  color: white;
  text-align: left;
  @media only screen and (max-width: 960px) {
    text-align: center;
  }
`;
const SubTitle = styled.p`
  font-size: 20px;
  color: white;
  text-align: left;
  padding-top: 16px;
  margin: 0;
  @media only screen and (max-width: 960px) {
    text-align: center;
  }
`;

const Link = styled.a``;

const Image = styled.img`
  border-radius: 20px;
`;
function Projects(props) {
  return (
    <Container id="projects">
      <TextTitle>✨ Projects</TextTitle>

      <Content>
        <CardContainer>
          <Card className="card">
            <a href="https://rockpaperscissorsai.netlify.app" target="_blank">
              <Image src="./rps.png" width="250px"></Image>
            </a>
          </Card>
          <TitleContainer>
            <SubTitle> Rock Paper Scissors</SubTitle>
            <Text>What I learned: Google Teachable Machine, React.JS</Text>
          </TitleContainer>
        </CardContainer>
        <CardContainer>
          <Card className="card">
            <a
              href="https://www.youtube.com/watch?v=vgG3xqArYTs"
              target="_blank"
            >
              <Image src="./crypto.gif" width="240px"></Image>
            </a>
          </Card>
          <TitleContainer>
            <SubTitle> Cryptble</SubTitle>
            <Text>
              What I learned: Web Dev, blockchain fundamentals and NFTs, Hedera
              Hashgraph tokenization APIs
            </Text>
          </TitleContainer>
        </CardContainer>
        <CardContainer>
          <Card className="card">
            <a
              href="https://www.youtube.com/watch?v=CNVPAGsSwdY"
              target="_blank"
            >
              <Image src="./vaccine.png" width="250px" height="240px"></Image>
            </a>
          </Card>
          <TitleContainer>
            <SubTitle> Vaccine Passport</SubTitle>
            <Text>
              What I learned: Android application development, Hedera Hashgraph
              tokenization service, file service
            </Text>
          </TitleContainer>
        </CardContainer>
        <CardContainer>
          <Card className="card">
            <a href="https://vagon.tech" target="_blank">
              <Image src="./vagon.png" width="250px" height="240px"></Image>
            </a>
          </Card>
          <TitleContainer>
            <SubTitle> Vagon.tech</SubTitle>
            <Text>What I learned: Vue.JS, Nuxt.js, Golang, CockroachDB</Text>
          </TitleContainer>
        </CardContainer>
      </Content>
    </Container>
  );
}

export default Projects;
