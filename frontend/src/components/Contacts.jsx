import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { updateStatusRoute } from "../utils/APIRoutes";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  const [isToggled, toggle] = useState(JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  ).status);

  const callback = async () => {
      toggle(!isToggled)
      const id = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      )._id;

      console.log(id);
      const data = await axios.patch(`${updateStatusRoute}/${id}`);
      console.log(data.status)
  }
  useEffect(() => {
    (async() => {const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);})();
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {(
        <Container>
          <div className="brand">
            <h3>ChatterBox</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="username">
              <label>
                  <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
                  <span />
                  <strong style={{color: "white"}}>{isToggled ? "Availabale" : "Busy"}</strong>
              </label> 
            </div>
              <h2>{currentUserName}</h2>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080B53;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }



  .current-user {
    background-color: #0d0d30;
    display: flex;
    padding: 0 15px; 
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;

      h2 {
        color: white;
      }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
        h2 {
          font-size: 1rem;
        }
      
    }
  }
`;