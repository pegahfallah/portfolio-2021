import React, { useState } from "react";

import styled from "styled-components";
import "./Contact.scss";
import axios from "axios";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";
import { MailWithCircle } from "@styled-icons/entypo-social/MailWithCircle";
import { PhoneCall } from "@styled-icons/boxicons-solid/PhoneCall";
const LinkedInIcon = styled(LinkedinWithCircle)`
  width: 60px;
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
    margin-top: 500px;
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
  width: 10%;
  border-radius 25px;
  border: 1px solid white;
  margin-top: 5%;
  margin: auto;
  @media only screen and (max-width: 700px) {
    width: 50%;
margin-top: 50%;
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
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // axios({
    //   method: "POST",
    //   url: "http://localhost:3002/send",
    //   data: name,
    //   email,
    //   message,
    // }).then((response) => {
    //   if (response.data.status === "success") {
    //     alert("Message Sent.");
    //     resetForm();
    //   } else if (response.data.status === "fail") {
    //     alert("Message failed to send.");
    //   }
    // });
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <Container id="contact">
      <Button className="btn">
        <Text
          target="_blank"
          href="https://docs.google.com/document/d/1Em-e7OOJIPWYti-UhfoFr8wu-OXrCmk6JmqR3OeHUFQ/edit?usp=sharing"
        >
          Resume
        </Text>
      </Button>
      <a href="https://www.linkedin.com/in/pegah-fallah/" target="_blank">
        <LinkedInIcon></LinkedInIcon>
      </a>
      <TitleContainer>
        {/* <EmailIcon></EmailIcon> */}
        <Text
        //   target="_blank"
        //   href="https://docs.google.com/document/d/1Em-e7OOJIPWYti-UhfoFr8wu-OXrCmk6JmqR3OeHUFQ/edit?usp=sharing"
        >
          pegahfallah@outlook.com
        </Text>{" "}
        <Text> 4167387278</Text>
      </TitleContainer>
      <TitleContainer>{/* <PhoneCallIcon></PhoneCallIcon> */}</TitleContainer>
      {/* <Card>
        <TextTitle>Say Hello</TextTitle>

        <form onSubmit={handleSubmit}>
          <Label>Name:</Label>

          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Label>Email:</Label>

          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Message:</Label>

          <Message
            rows="10"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Submit className="btn" type="submit" value="Submit" />
        </form>
      </Card> */}
    </Container>
  );
}

export default Contact;
