import React from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import planets from "../../assets/planets.svg";
import asteroid from "../../assets/asteroid.svg";
import star from "../../assets/star.svg";
import galaxy from "../../assets/galaxy.svg";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <div className="content">
        <div className="box-1">
          <h1>Sua jornada para desvendar o espaço começa aqui!</h1>
          <h4>Planetas e galáxias inteiras aguardam para serem exploradas.</h4>
          <p>O que vamos explorar hoje?</p>
        </div>
        <div className="menu">
          <div>
            <button onClick={() => navigate("/planetas")}>
              <img src={planets} />
            </button>
            <p>Planetas</p>
          </div>
          <div>
            <button>
              <img src={asteroid} />
            </button>
            <p>Asteroides</p>
          </div>
          <div>
            <button>
              <img src={star} />
            </button>
            <p>Estrelas</p>
          </div>
          <div>
            <button>
              <img src={galaxy} />
            </button>
            <p>Galáxias</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
