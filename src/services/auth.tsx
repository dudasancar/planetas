import api from "./api";

export const LoginUser = async (email: string, password: string) => {
  try {
    return await api.post("auth", {
      email: email,
      password: password,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
