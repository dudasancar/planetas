import api from "./api";

export const createPlanet = async (
  name: string,
  surfaceArea: number,
  sunDistance: number,
  day: string,
  gravity: string,
  description: string,
  image: unknown
  // card_image: string,
  // color: string
) => {
  try {
    console.log(image);
    return await api.post("planets", {
      name: name,
      surfaceArea: surfaceArea,
      sunDistance: sunDistance,
      day: day,
      gravity: gravity,
      description: description,
      image: image,
      card_image: "Earth.png",
      color: "#6174A74D",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
