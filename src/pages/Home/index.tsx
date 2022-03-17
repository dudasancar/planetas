import React from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import planets from "../../assets/planets.svg";
import asteroid from "../../assets/asteroid.svg";
import star from "../../assets/star.svg";
import galaxy from "../../assets/galaxy.svg";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <div className="content">
        <h1>Sua jornada para desvendar o espaço começa aqui!</h1>
        <p>Planetas e galáxias inteiras aguardam para serem exploradas.</p>
        <div className="question">
          <p>O que vamos explorar hoje?</p>
        </div>
        <div className="menu">
          <button>
            <img src={planets} />
          </button>
          <p>Planetas</p>
          <button>
            <img src={asteroid} />
          </button>
          <p>Asteroides</p>
          <button>
            <img src={star} />
          </button>
          <p>Estrelas</p>
          <button>
            <img src={galaxy} />
          </button>
          <p>Galáxias</p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
