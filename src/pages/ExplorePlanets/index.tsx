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
        setListPlanets(response.planets);
        console.log(response.planets);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Header />
      {listPlanets.map((planet: any) => (
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
                <img src={planet.image} />
              </Tabs>
            </Box>

            <div className="description-box">
              <p>PLANETA</p>
              <h1>{planet?.name}</h1>
              <p className="description">{planet?.description}</p>
            </div>
          </div>
          <Informations>
            <div className="info-box">
              <p>Área de superfície</p>
              <p>{planet?.surfaceArea} km²</p>
            </div>
            <div className="info-box">
              <p>Distância do sol</p>
              <p>{planet?.sunDistance} km</p>
            </div>
            <div className="info-box">
              <p>Duração do dia</p>
              <p>{planet?.day}</p>
            </div>
            <div className="info-box">
              <p>Gravidade</p>
              <p>{planet?.gravity} m/s²</p>
            </div>
          </Informations>

          <EditPlanet planetId={planet.id} />
        </div>
      ))}
    </Container>
  );
};

export default ExplorePlanets;
