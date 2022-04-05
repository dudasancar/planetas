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
