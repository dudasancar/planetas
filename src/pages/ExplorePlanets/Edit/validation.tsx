import { number, object, string } from "yup";

export const initialValues = {
  name: "",
  description: "",
  surfaceArea: 0,
  sunDistance: 0,
  day: "",
  gravity: "",
  image: "",
};

export const validationSchema = object({
  name: string(),
  description: string(),
  surfaceArea: number(),
  sunDistance: number(),
  day: string(),
  gravity: string(),
  image: string(),
});
