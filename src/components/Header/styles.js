import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #ffffff45;

  img {
    margin: 30px 0 30px 40px;
  }

  div {
    display: flex;
    margin: 50px 40px 0 0;
    color: #ffffff;
    cursor: pointer;

    p {
      margin: 0 10px 0 10px;
      font-size: 18px;
    }
  }
`;
