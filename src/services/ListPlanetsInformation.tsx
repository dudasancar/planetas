import Mercury from "../assets/Mercury.png";
import Venus from "../assets/Venus.png";
import Earth from "../assets/Earth.png";
import Mars from "../assets/Mars.png";
import Jupiter from "../assets/Jupiter.png";
import Saturn from "../assets/Saturn.png";
import Uranus from "../assets/Uranus.png";
import api from "./api";

export const getPlanetsInformation = async () => {
  try {
    const response = await api.get("planets");
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
