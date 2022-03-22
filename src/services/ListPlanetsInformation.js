import Mercury from "../assets/Mercury.png";
import Venus from "../assets/Venus.png";
import Earth from "../assets/Earth.png";
import Mars from "../assets/Mars.png";
import Jupiter from "../assets/Jupiter.png";
import Saturn from "../assets/Saturn.png";
import Uranus from "../assets/Uranus.png";

export const getPlanetsInformation = async () => {
  const fakeData = [
    {
      planet: "Mercúrio",
      surfaceArea: 74800000,
      sunDistance: 57910000,
      day: "58d 15h 30m",
      gravity: "3,7",
      image: Mercury,
      description:
        "Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.",
    },
    {
      planet: "Vênus",
      surfaceArea: 460200000,
      sunDistance: 108200000,
      day: "116d 18h 0m",
      gravity: "8,87",
      image: Venus,
      description:
        "Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite.",
    },
    {
      planet: "Terra",
      surfaceArea: 510100000,
      sunDistance: 149600000,
      day: "0d 23h 56m",
      gravity: "9,807",
      image: Earth,
      description:
        "A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul.'",
    },
    {
      planet: "Marte",
      surfaceArea: 144800000,
      sunDistance: 227900000,
      day: "1d 0h 37m",
      gravity: "3,721",
      image: Mars,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      planet: "Júpiter",
      surfaceArea: 61420000000,
      sunDistance: 778330000,
      day: "0d 9h 56m",
      gravity: "24,79 m/s²",
      image: Jupiter,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      planet: "Saturno",
      surfaceArea: 42612133285,
      sunDistance: 1434000000,
      day: "0d 10h 42m",
      gravity: "10,44",
      image: Saturn,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      planet: "Urano",
      surfaceArea: 8083079690,
      sunDistance: 2870658186,
      day: "0d 17h 14m",
      gravity: "8,87",
      image: Uranus,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  try {
    return Promise.resolve(fakeData);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
