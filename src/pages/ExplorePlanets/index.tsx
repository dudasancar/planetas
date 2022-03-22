import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { Box, Tabs } from "@mui/material";
import { getPlanetsInformation } from "../../services/ListPlanetsInformation";
import Earth from "../../assets/Earth.png";

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
          <ArrowBackIosNewIcon onClick={() => navigate("/home")} />
          <p>
            Home/Planetas/<strong>Explorar Planeta</strong>
          </p>
        </div>
        <div className="box">
          <Box style={{ maxWidth: 500, maxHeight: 500 }}>
            <Tabs
              value={value}
              onChange={() => handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <img src={Earth} />
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
      </div>
    </Container>
  );
};

export default ExplorePlanets;
