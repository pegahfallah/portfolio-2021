import { Sub } from "@styled-icons/crypto";
import React from "react";
import styled from "styled-components";
import "./Projects.scss";
const Container = styled.div`
  margin: auto;
  height: 100vh;
  margin-left: 8%;
  margin-right: 8%;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 100%;
    margin-top: 500px;

    padding-bottom: 70%;
  }
`;

const CardContainer = styled.div`
  width: 30%;
  @media only screen and (max-width: 700px) {
    width: 50%;
  }
`;
const Card = styled.div`
  background: #2e2c2f;
  border-radius: 25px;
  padding: 16px;
  width: fit-content;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 700px) {
    margin-top: 20%;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
const TitleContainer = styled.div``;

const Title = styled.h5`
  padding: 16px;
  font-size: 20px;
  background: -webkit-linear-gradient(left, #fb4d3d, #ef476f);
  background: -o-linear-gradient(right, #fb4d3d, #ef476f);
  background: -moz-linear-gradient(right, #fb4d3d, #ef476f);
  background: linear-gradient(to right, #fb4d3d, #ef476f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const TextTitle = styled.h2`
  color: white;
  text-align: left;
  margin-bottom: 5%;
  padding-top: 10%;
`;
const Text = styled.p`
  color: white;
  text-align: left;
`;
const SubTitle = styled.p`
  font-size: 20px;
  color: white;
  text-align: left;
  padding-top: 16px;
  margin: 0;
  @media only screen and (max-width: 700px) {
  }
`;

const Link = styled.a``;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

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
              Android application development, Hedera Hashgraph tokenization
              service, file service
            </Text>
          </TitleContainer>
        </CardContainer>
        {/* <CardContainer>
          <Card className="card">
            <a
              href="https://www.youtube.com/watch?v=CNVPAGsSwdY"
              target="_blank"
            >
              <Image src="./vaccine.png" width="250px" height="240px"></Image>
            </a>
          </Card>
          <TitleContainer>
            <SubTitle>More</SubTitle>
            <Text>
              Android application development, Hedera Hashgraph tokenization
              service, file service
            </Text>
          </TitleContainer>
        </CardContainer> */}
      </Content>
    </Container>
  );
}

export default Projects;
