import styled from "styled-components";
import background from "../../assets/Background.png";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  .form {
    background-color: #202024;
    width: 423px;
    height: 378px;
    border: 1px solid #70707040;
    border-radius: 8px;
    margin-right: 30px;
    padding: 30px 30px 0 30px;

    .field {
      background-color: #121214;
      width: 100%;
      height: 55px;
      margin-top: 30px;
      border-radius: 4px;

      fieldset {
        border: none;
      }

      svg {
        color: #cdcdcd;
      }

      input {
        color: #cdcdcd;
      }
    }

    span {
      color: #6bcecc;
      text-decoration: underline;
    }

    button {
      width: 100%;
      height: 50px;
      background-color: #6bcecc;
      color: #ffffff;
      margin-top: 70px;
    }
  }

  .logo {
    margin: 30px;

    h1 {
      color: #ececec;
      font-size: 60px;
      width: 388px;
      line-height: 1.5;
    }
  }
`;
