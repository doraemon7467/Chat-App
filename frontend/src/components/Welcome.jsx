import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logout from "./Logout";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    (async()=>{setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );})();
  }, []);
  return (
    <Container>
      <Logout></Logout>
      <br></br>
      <br></br>
      <br></br>
      <h1>
        Welcome , <span>{userName} !</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
      <br></br>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #A90BD4;
  }

  .giphy-embed{
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;