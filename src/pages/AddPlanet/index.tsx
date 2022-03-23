import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container, Informations } from "./styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { useNavigate } from "react-router-dom";
import { Box, Tabs } from "@mui/material";
import { getPlanetsInformation } from "../../services/ListPlanetsInformation";
import DataPlanet from "./Data";

const AddPlanet: React.FC = () => {
  const [listPlanets, setListPlanets] = useState([]);
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
        <div className="box">
          <Box style={{ maxWidth: 520, maxHeight: 520 }}>
            <div>
              <AddAPhotoOutlinedIcon />
              <p>Add Foto</p>
            </div>
          </Box>
          <div className="description-box">
            <p>PLANETA</p>
            <h1>-</h1>
            <p className="description">Informe uma descrição...</p>
          </div>
        </div>
        <Informations>
          <div className="info-box">
            <p>Área de superfície</p>
            <p>-</p>
          </div>
          <div className="info-box">
            <p>Distância do sol</p>
            <p>-</p>
          </div>
          <div className="info-box">
            <p>Duração do dia</p>
            <p>-</p>
          </div>
          <div className="info-box">
            <p>Gravidade</p>
            <p>-</p>
          </div>
        </Informations>
        <DataPlanet />
      </div>
    </Container>
  );
};

export default AddPlanet;
