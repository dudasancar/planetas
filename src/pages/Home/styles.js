import styled from "styled-components";
import background from "../../assets/Background.png";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5rem;

    .box-1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        color: #ffffff;
        font-size: 48px;
        width: 650px;
        // text-align: center;
        line-height: 1.5;
      }

      h4 {
        color: #ffffff;
        font-size: 24px;
      }

      p {
        color: #ffffff;
        background-color: #2a2a2a4d;
        border: 1px solid #cdcdcd;
        border-radius: 5px;
        padding: 20px;
        text-align: center;
        font-size: 20px;
      }
    }

    .menu {
      display: flex;
      justify-content: space-around;
      gap: 15rem;

      button {
        background-color: #ffffff;
        border-radius: 100%;
        width: 45px;
        height: 45px;
        cursor: pointer;
      }

      p {
        color: #ffffff;
        font-size: 18px;
      }
    }
  }
`;
