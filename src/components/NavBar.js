import React from "react";
import styled from "styled-components";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import LinkedIn from "./LinkedIn";
import Logo from "./Logo";
import "./NavBar.scss";
import { Link } from "react-scroll";
const Container = styled.div`
  font-size: 1em;
  font-weight: bold;
  color: white;
  font-family: "Work Sans";
  width: 45%;
`;

const ContainerRight = styled.div`
  width: 45%;
  font-size: 1.2em;
  color: white;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 12px;
  padding-right: 40px;
`;
const Home = styled.div`
  width: 5%;
  justify-content: center;
  align-self: center;
  align-items: center;
  display: flex;
  height: 20px;
  margin: auto;
  justify-content: center;
  width: 28px;
  z-index: 10;
  padding-left: 4%;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

function NavBar(props) {
  const player = React.createRef(); // initialize your ref

  return (
    <div className="container">
      <Container>
        <List className="header">
          <li>
            <Link
              className="nav"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="nav"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="nav"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
            >
              Contact
            </Link>
          </li>
        </List>
      </Container>
      <Home>
        <Logo></Logo>
      </Home>
      <ContainerRight>
        <a target="_blank" href="https://www.linkedin.com/in/pegah-fallah">
          <LinkedIn></LinkedIn>
        </a>
      </ContainerRight>
    </div>
  );
}

export default NavBar;
