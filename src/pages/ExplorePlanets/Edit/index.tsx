import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { updatePlanet } from "../../../services/UpdatePlanet";
import { Container } from "./styles";
import { initialValues, validationSchema } from "./validation";

interface IEditPlanet {
  name: string;
  surfaceArea: number;
  sunDistance: number;
  day: string;
  gravity: string;
  description: string;
}

interface IProps {
  planetId: string;
}

const EditPlanet = ({ planetId }: IProps): React.ReactElement => {
  const navigate = useNavigate();

  const update = async (values: IEditPlanet) => {
    updatePlanet(
      planetId,
      values.name,
      values.surfaceArea,
      values.sunDistance,
      values.day,
      values.gravity,
      values.description
    );
    navigate("/planetas");
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: update,
  });

  return (
    <Container>
      <div className="content">
        <h1>Editar Planeta</h1>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="textfield-2">
            <TextField
              name="name"
              className="name"
              label="Nome do planeta"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <TextField
              name="description"
              className="description"
              multiline
              rows={6}
              label="Descrição do planeta"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <TextField
              name="surfaceArea"
              className="surfaceArea"
              label="Área de superfície"
              value={formik.values.surfaceArea}
              onChange={formik.handleChange}
            />
          </div>
          <div className="textfield-3">
            <TextField
              name="sunDistance"
              className="sunDistance"
              label="Distância do sol"
              value={formik.values.sunDistance}
              onChange={formik.handleChange}
            />
            <TextField
              name="day"
              className="day"
              label="Duração do dia"
              value={formik.values.day}
              onChange={formik.handleChange}
            />
            <TextField
              name="gravity"
              className="gravity"
              label="Gravidade"
              value={formik.values.gravity}
              onChange={formik.handleChange}
            />
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
