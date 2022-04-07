import { object, string } from "yup";

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = object({
  email: string().email("Email inválido"),
  password: string().min(4, "Minímo 4 caracteres"),
});
