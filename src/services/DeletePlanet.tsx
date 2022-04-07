import api from "./api";

export const deletePlanetById = (id: any) => {
  try {
    return api.delete(`planets/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
