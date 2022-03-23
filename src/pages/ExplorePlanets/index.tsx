import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container, Informations } from "./styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { Box, Tabs } from "@mui/material";
import { getPlanetsInformation } from "../../services/ListPlanetsInformation";
import Earth from "../../assets/Earth.png";
import EditPlanet from "./Edit";

const ExplorePlanets: React.FC = () => {
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
            Home/Planetas/<strong>Explorar Planeta</strong>
          </p>
        </div>
        <div className="box">
          <Box style={{ maxWidth: 520, maxHeight: 520 }}>
            <Tabs
              value={value}
              onChange={() => handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              {listPlanets.map((planet: any) => (
                <img src={planet.image} />
              ))}
            </Tabs>
          </Box>
          <div className="description-box">
            <p>PLANETA</p>
            <h1>Terra</h1>
            <p className="description">
              A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o
              quinto maior dos oito planetas do Sistema Solar. É também o maior
              dos quatro planetas telúricos. É por vezes designada como Mundo ou
              Planeta Azul.'
            </p>
          </div>
        </div>
        <Informations>
          <div className="info-box">
            <p>Área de superfície</p>
            <p>510.100.000 km²</p>
          </div>
          <div className="info-box">
            <p>Distância do sol</p>
            <p>149.600.000 km</p>
          </div>
          <div className="info-box">
            <p>Duração do dia</p>
            <p>0d 23h 56m</p>
          </div>
          <div className="info-box">
            <p>Gravidade</p>
            <p>9,807 m/s²</p>
          </div>
        </Informations>
        <EditPlanet />
      </div>
    </Container>
  );
};

export default ExplorePlanets;