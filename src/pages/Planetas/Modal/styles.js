import styled from "styled-components";
import stars from "../../../assets/Starts.svg";

export const ContentModal = styled.div`
  background: #fff;
  border-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 672px;
  height: 530px;
  border: none;

  .stars {
    background-color: #080808;
    width: 672px;
    height: 189px;
    display: flex;
    justify-content: center;
    border-radius: 5px;

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

    img {
      width: 206px;
      height: 206px;
      margin-top: 40px;
      box-shadow: 5px 5px 6px #70707096;
      border-radius: 100%;
    }
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px;
    text-align: center;
    margin-top: 40px;
    z-index: 2;
    position: relative;

    h1 {
      color: #2a2a2a;
    }

    p {
      font-size: 18px;
      line-height: 1.5rem;
      color: #2a2a2a;
    }

    .buttons {
      margin-top: 20px;
      .btn-delete {
        width: 143px;
        height: 53px;
        color: #6a7eb1;
        border: 1px solid #6a7eb1;
        border-radius: 5px;
        margin-left: 10px;
      }

      .btn-back {
        width: 143px;
        height: 53px;
        background-color: #6a7eb1;
        color: #fff;
        border-radius: 5px;
        margin-right: 10px;
      }
    }
  }
`;
