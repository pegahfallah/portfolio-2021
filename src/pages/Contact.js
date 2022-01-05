import React, { useState } from "react";

import styled from "styled-components";
import "./Contact.scss";
import axios from "axios";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";
import { MailWithCircle } from "@styled-icons/entypo-social/MailWithCircle";
import { PhoneCall } from "@styled-icons/boxicons-solid/PhoneCall";
import { Github } from "@styled-icons/bootstrap/Github";

const GithubIcon = styled(Github)`
  width: 40px;
  color: white;
  margin: auto;
`;

const LinkedInIcon = styled(LinkedinWithCircle)`
  width: 40px;
  color: white;
  margin: auto;
`;
const EmailIcon = styled(MailWithCircle)`
  width: 60px;
  color: white;
  margin: auto;
`;
const PhoneCallIcon = styled(PhoneCall)`
  width: 60px;
  color: white;
  margin: auto;
`;

const Container = styled.div`
  margin: auto;
  height: 50vh;
  margin-left: 8%;
  margin-right: 8%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 700px) {
    margin-top: 50%;
    margin-left: 2%;
    margin-right: 2%;
  }
`;

const CardContainer = styled.div`
  width: 30%;
`;
const Card = styled.div`
  background: #2e2c2f;
  border-radius: 25px;
  padding: 16px;
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
const TitleContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  background: -webkit-linear-gradient(left, #fb4d3d, #ef476f);
  background: -o-linear-gradient(right, #fb4d3d, #ef476f);
  background: -moz-linear-gradient(right, #fb4d3d, #ef476f);
  background: linear-gradient(to right, #fb4d3d, #ef476f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const TextTitle = styled.h3`
  color: white;
  text-align: left;
  margin-left: 10%;
`;
const Text = styled.a`
  color: white;
  text-align: left;
  text-align: left;
  text-decoration: none;
  margin: auto;
`;
const Label = styled.p`
  font-size: 16px;
  color: white;
  text-align: left;
  margin-left: 10%;
`;

const Input = styled.input`
  padding: 16px;
  width: 80%;
  border-radius 25px;
  font-family: Raleway;
  border: 1px solid white;
  background: transparent;
`;

const Submit = styled.input`
  padding: 16px;
  background: transparent;
  width: 40%;
  border-radius 25px;
  border:none;
  margin-top: 5%;
`;

const Button = styled.button`
  padding: 16px;
  background: transparent;
  width: 200px;
  border-radius 25px;
  border: 1px solid white;
  margin-top: 5%;
  margin: auto;
  @media only screen and (max-width: 700px) {
    width: 200px;
  }
    `;
const Message = styled.textarea`
  padding: 16px;
  width: 80%;
  border-radius 25px;
  height: 150px;
  font-family: Raleway;
  border: 1px solid white;
  background: transparent;
`;

function Contact(props) {
  return (
    <Container id="contact">
      <div>
        <a
          className="margin"
          href="https://www.linkedin.com/in/pegah-fallah/"
          target="_blank"
        >
          <LinkedInIcon></LinkedInIcon>
        </a>
        <a href="https://github.com/pegahfallah" target="_blank">
          <GithubIcon></GithubIcon>
        </a>
      </div>
    </Container>
  );
}

export default Contact;
