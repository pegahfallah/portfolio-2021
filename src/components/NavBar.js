import React from "react";
import styled from "styled-components";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import LinkedIn from "./LinkedIn";
import "./NavBar.scss";
const Container = styled.div`
  width: 45%;
  font-size: 1em;
  font-weight: bold;
  color: white;
  display: inline-block;
  margin-right: auto;
  font-family: "Work Sans";
`;

const ContainerRight = styled.div`
  width: 5%;
  font-size: 1.2em;
  color: white;
  background: red;
  margin-left: auto;
  display: inline-block;
`;
const Home = styled.div`
  width: 5%;
  display: inline-block;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const Link = styled.a``;

function NavBar(props) {
  const player = React.createRef(); // initialize your ref

  return (
    <div className="container">
      <Container>
        <List className="header">
          <li>
            <a href="/project">About</a>
          </li>
          <li>
            <a href="/project">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </List>
      </Container>
      <Home>hi</Home>
      <ContainerRight>
        <List className="header">
          <li>
            {/* <Player
              autoplay
              src="https://assets5.lottiefiles.com/packages/lf20_b7o3uner.json"
              style={{ height: "50px", width: "50px" }}
              hover={true}
            ></Player>
             */}

            <LinkedIn></LinkedIn>
          </li>
        </List>
      </ContainerRight>
    </div>
  );
}

export default NavBar;
