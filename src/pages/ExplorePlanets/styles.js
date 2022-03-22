import styled from "styled-components";
import background from "../../assets/Background.png";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;

  .content {
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    // width: 90%;

    .back-home {
      display: flex;
      margin-left: 70px;
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

      .MuiBox-root {
      }

      .description-box {
        gap: 5rem;

        p {
          color: #fff;
          text-align: center;
        }

        h1 {
          color: #fff;
          text-align: center;
          text-transform: uppercase;
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
