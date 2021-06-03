import React from "react";
import styled from "styled-components";
import "./Experience.scss";
const Card = styled.div`
  background: #2e2c2f;
  border-radius: 20px;
  width: fit-content;
`;

const TitleContainer = styled.div`
  display: inline;
`;

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

const Title2 = styled.h5`
  padding: 16px;
  font-size: 20px;
  background: -webkit-linear-gradient(left, #8075ff, #7247ff);
  background: -o-linear-gradient(right, #8075ff, #7247ff);
  background: -moz-linear-gradient(right, #8075ff, #7247ff);
  background: linear-gradient(to right, #8075ff, #7247ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Title3 = styled.h5`
  padding: 16px;
  font-size: 20px;
  background: -webkit-linear-gradient(left, #f991cc, #7247ff);
  background: -o-linear-gradient(right, #f991cc, #7247ff);
  background: -moz-linear-gradient(right, #f991cc, #7247ff);
  background: linear-gradient(to right, #f991cc, #7247ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const SubTitle = styled.h3`
  padding: 16px;
  font-size: 20px;
`;

const Link = styled.a``;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

function Experience(props) {
  return (
    <Card>
      <TitleContainer>
        {/* <Link href={props.link}> */}
        {/* <Logo src={props.src}></Logo> */}
        {props.color === "orange" && <Title>{props.title}</Title>}
        {props.color === "pink" && <Title3>{props.title}</Title3>}
        {props.color === "purple" && <Title2>{props.title}</Title2>}
        {/* <SubTitle>{props.title}</SubTitle> */}

        {/* </Link> */}
        {/* <Icon></Icon> */}
      </TitleContainer>
    </Card>
  );
}

export default Experience;
