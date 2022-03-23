import styled from "styled-components";
import background from "../../assets/Background.png";
import stars from "../../assets/Starts.svg";

export const Container = styled.div`
  background-image: url(${background});
  position: relative;
  background-size: cover;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-image: url(${stars});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }

  .content {
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 90%;
    position: relative;
    z-index: 2;

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

    .filter-box {
      margin: 40px 0 0 70px;

      .filter {
        border: 1px solid #9c9c9c;
        border-radius: 5px;
        padding: 10px;

        .title-filter {
          color: #fff;
          font-size: 24px;
          margin-left: 30px;
        }

        form {
          display: flex;
          margin-bottom: 20px;
          .MuiFormControl-root {
            width: 350px;

            input,
            .MuiSelect-select {
              height: 53px;
            }
          }

          .MuiOutlinedInput-root {
            background: #2a2a2a;
            color: #cdcdcd;
            border: 1px solid #2a2a2a;
            border-radius: 5px;
            margin-left: 30px;
            svg {
              color: #cdcdcd;
            }
          }

          .btn-filter {
            width: 142px;
            height: 53px;
            background-color: #63bcbc;
            color: #ffffff;
            margin-left: 30px;
            margin-right: 30px;
          }
        }
      }
    }

    .add {
      border: 1px solid #ffffff;
      border-radius: 5px;
      width: 220px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 63px;

      svg {
        color: #ffffff;
      }

      p {
        color: #ffffff;
        font-size: 24px;
        margin-left: 15px;
      }
    }

    .planets {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      justify-items: center;
      margin: 40px 0 0 20px;

      .planet {
        background: #2a2a2a;
        border-radius: 5px;
        width: 220px;
        margin: 63px;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0px 0px 5px 5px;

          p {
            color: #ffffff;
            font-size: 24px;
            margin-right: 15px;
            display: flex;
            align-self: start;
          }

          svg {
            color: #ffffff;
            margin-left: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
