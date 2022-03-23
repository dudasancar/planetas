import styled from "styled-components";

export const Container = styled.div`
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
