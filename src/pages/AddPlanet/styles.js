import styled from "styled-components";
import background from "../../assets/Background.png";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;

  .content {
    padding: 50px;

    .back-home {
      display: flex;
      margin-left: 70px;
      cursor: pointer;

      svg {
        color: #ffffff;
        margin-top: 3px;
      }

      p {
        color: #ffffff;
        font-size: 24px;
        margin: 0;
        padding-left: 10px;
      }
    }

    .box {
      display: flex;
      justify-content: space-around;
      margin-top: 5rem;

      .MuiBox-root {
        div {
          width: 400px;
          height: 400px;
          border: 1px solid #cdcdcd;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            color: #fff;
            width: 35px;
            height: 35px;
            margin-bottom: 10px;
          }

          p {
            font-size: 32px;
            color: #fff;
            margin-left: 20px;
          }
        }

        span {
          display: none;
        }
      }

      .description-box {
        margin-top: 4rem;

        p {
          color: #fff;
          text-align: center;
        }

        h1 {
          color: #fff;
          text-align: center;
          text-transform: uppercase;
          font-size: 48px;
        }

        .description {
          width: 655px;
          text-align: center;
          font-size: 24px;
        }
      }
    }
  }
`;

export const Informations = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;

  .info-box {
    background-color: #2a2a2a4d;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    padding: 10px;
    width: 215px;
    height: 136px;

    p {
      color: #fff;
      margin: 30px 0 0 20px;
    }

    p + p {
      font-size: 24px;
      margin: 30px 0 0 20px;
    }
  }
`;
