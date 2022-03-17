import styled from "styled-components";
import background from "../../assets/Background.png";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: #ffffff;
      font-size: 48px;
      width: 650px;
      text-align: center;
      line-height: 1.5;
    }

    p {
      color: #ffffff;
      font-size: 24px;
    }

    .question {
      color: #ffffff;
      background-color: #2a2a2a4d;
      border: 1px solid #cdcdcd;
      border-radius: 5px;
      width: 20%;
      height: 56px;
      text-align: center;
      margin: 20px;
      p {
        font-size: 20px;
        margin-top: 15px;
      }
    }

    .menu {
      display: flex;
      button {
        background-color: #ffffff;
        border-radius: 100%;
        width: 45px;
        height: 45px;
        cursor: pointer;
      }
    }
  }
`;
