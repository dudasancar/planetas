import { object, string } from "yup";

export const initialValues = {
  filter1: "",
  filter2: "",
};

export const validationSchema = object({
  filter1: string(),
  filter2: string(),
});
