import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container, Form, Informations } from "./styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, Input, Tabs, TextField } from "@mui/material";
import { getPlanetsInformation } from "../../services/ListPlanetsInformation";
import { initialValues, validationSchema } from "./validation";
import { useFormik } from "formik";
import { createPlanet } from "../../services/CreatePlanet";

interface INewPlanet {
  name: string;
  surfaceArea: number;
  sunDistance: number;
  day: string;
  gravity: string;
  description: string;
  image: unknown;
}

const AddPlanet: React.FC = () => {
  const [listPlanets, setListPlanets] = useState([]);
  const [baseImage, setBaseImage] = useState<unknown>("");
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    getPlanetsInformation()
      .then((response: any) => {
        setListPlanets(response);
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const UploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const register = async (values: INewPlanet) => {
    values.image = baseImage;
    console.log(values);
    createPlanet(
      values.name,
      values.surfaceArea,
      values.sunDistance,
      values.day,
      values.gravity,
      values.description,
      values.image
    );
    navigate("/planetas");
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: register,
  });

  return (
    <Container>
      <Header />
      <div className="content">
        <div className="back-home">
          <ArrowBackIosNewIcon onClick={() => navigate("/planetas")} />
          <p>
            Home/Planetas/<strong>Adicionar Planeta</strong>
          </p>
        </div>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="box">
            <Box style={{ maxWidth: 520, maxHeight: 520 }}>
              <div>
                <div
                  className="image"
                  style={{
                    backgroundImage: `url('${baseImage}')`,
                  }}
                >
                  {baseImage ? (
                    <div></div>
                  ) : (
                    <div>
                      <label>
                        <Input
                          inputProps={{ accept: "image/*" }}
                          type="file"
                          onChange={(e) => UploadImage(e)}
                          name="image"
                          id="image"
                          value={formik.values.image}
                        />
                        <IconButton component="span">
                          <AddAPhotoOutlinedIcon />
                        </IconButton>
                        Add Foto
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </Box>
            <div className="description-box">
              <p>PLANETA</p>
              <h1>-</h1>
              <p className="description">Informe uma descri????o...</p>
            </div>
          </div>
          <Informations>
            <div className="info-box">
              <p>??rea de superf??cie</p>
              <p>-</p>
            </div>
            <div className="info-box">
              <p>Dist??ncia do sol</p>
              <p>-</p>
            </div>
            <div className="info-box">
              <p>Dura????o do dia</p>
              <p>-</p>
            </div>
            <div className="info-box">
              <p>Gravidade</p>
              <p>-</p>
            </div>
          </Informations>
          <Form>
            <div className="content">
              <h1>Informe os dados do planeta</h1>
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
                  label="Descri????o do planeta"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
                <TextField
                  name="surfaceArea"
                  className="surfaceArea"
                  label="??rea de superf??cie"
                  value={formik.values.surfaceArea}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="textfield-3">
                <TextField
                  name="sunDistance"
                  className="sunDistance"
                  label="Dist??ncia do sol"
                  value={formik.values.sunDistance}
                  onChange={formik.handleChange}
                />
                <TextField
                  name="day"
                  className="day"
                  label="Dura????o do dia"
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
            </div>
          </Form>
        </form>
      </div>
    </Container>
  );
};

export default AddPlanet;
