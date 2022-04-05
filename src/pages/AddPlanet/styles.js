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
        .image {
          width: 400px;
          height: 400px;
          border: 1px solid #cdcdcd;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          .MuiSvgIcon-root {
            color: #fff;
            width: 35px;
            height: 35px;
            margin-bottom: 10px;
          }

          label {
            font-size: 32px;
            color: #fff;
            margin-left: 20px;
          }

          input {
            display: none;
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

export const Form = styled.div`
  border: 1px solid #cdcdcd;
  border-radius: 6px;
  width: 90%;
  margin-left: 70px;
  margin-top: 40px;

  .content {
    padding: 40px;

    h1 {
      color: #fff;
      font-size: 32px;
    }

    .form {
      .MuiFormControl-root {
        background-color: #2a2a2a;
        border: 2px solid #cdcdcd;
        border-radius: 5px;

        input {
          width: 524px;
          height: 30px;
        }

        label {
          color: #cdcdcd;
        }
      }

      .textfield-2 {
        display: grid;

        .name {
          width: 600px;
          height: 60px;
          grid-area: name;
        }

        .description {
          width: 600px;
          grid-area: description;
        }

        .surfaceArea {
          width: 600px;
          height: 60px;
          grid-area: surfaceArea;
          margin-top: 40px;
        }

        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
          "name description"
          "surfaceArea description";
        grid-column-gap: 1rem;
      }

      .textfield-3 {
        display: grid;
        margin-top: 30px;
        grid-column-gap: 1rem;

        .sunDistance {
          width: 380px;
          height: 60px;
          grid-area: sunDistance;
        }

        .day {
          width: 380px;
          height: 60px;
          grid-area: day;
        }

        .gravity {
          width: 380px;
          height: 60px;
          grid-area: gravity;
        }

        grid-template-columns: repeat(3, 1fr);
        grid-template-areas: "sunDistance day gravity";
      }
    }

    .buttons {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      .btn-cancel {
        width: 143px;
        height: 53px;
        color: #fff;
        border: 1px solid #fff;
        margin-right: 20px;
      }

      .btn-save {
        width: 142px;
        height: 53px;
        background-color: #63bcbc;
        color: #fff;
        margin-right: 37px;
      }
    }
  }
`;
