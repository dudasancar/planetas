import Mercury from "../assets/half-mercury.png";
import Venus from "../assets/half-venus.png";
import Earth from "../assets/half-earth.png";
import Mars from "../assets/half-mars.png";
import Jupiter from "../assets/half-jupiter.png";
import Saturn from "../assets/half-saturn.png";
import Uranus from "../assets/half-uranus.png";

export const getPlanetsCards = async () => {
  const fakeData = [
    {
      name: "Mercúrio",
      color: "#6174a74d",
      image: Mercury,
    },
    {
      name: "Vênus",
      color: "#FFA1A1",
      image: Venus,
    },
    {
      name: "Terra",
      color: "#72B7F4",
      image: Earth,
    },
    {
      name: "Marte",
      color: "#FE7000",
      image: Mars,
    },
    {
      name: "Júpiter",
      color: "#9D588E",
      image: Jupiter,
    },
    {
      name: "Saturno",
      color: "#CF6F0B",
      image: Saturn,
    },
    {
      name: "Urano",
      color: "#32B9D9",
      image: Uranus,
    },
  ];
  try {
    return Promise.resolve(fakeData);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
