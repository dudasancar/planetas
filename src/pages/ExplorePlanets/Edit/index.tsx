import { Button, TextField } from "@mui/material";
import React from "react";
import { Container } from "./styles";

const EditPlanet: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <h1>Editar Planeta</h1>
        <form className="form">
          <div className="textfield-2">
            <TextField name="name" className="name" label="Nome do planeta" />
            <TextField
              name="description"
              className="description"
              multiline
              rows={6}
              label="Descrição do planeta"
            />
            <TextField
              name="surfaceArea"
              className="surfaceArea"
              label="Área de superfície"
            />
          </div>
          <div className="textfield-3">
            <TextField
              name="sunDistance"
              className="sunDistance"
              label="Distância do sol"
            />
            <TextField name="day" className="day" label="Duração do dia" />
            <TextField name="gravity" className="gravity" label="Gravidade" />
          </div>
          <div className="buttons">
            <Button className="btn-cancel" variant="outlined">
              Cancelar
            </Button>
            <Button className="btn-save" variant="contained" type="submit">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default EditPlanet;
