import { Button, InputAdornment, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import logo from "../../assets/Logo.svg";
import { initialValues, validationSchema } from "./validation";
import { Container, Content } from "./styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <Content>
        <form onSubmit={formik.handleSubmit}>
          <div className="form">
            <TextField
              id="email"
              name="email"
              placeholder="E-mail"
              variant="outlined"
              className="field"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="password"
              name="password"
              placeholder="Senha"
              variant="outlined"
              className="field"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <p>Esqueci minha senha</p>
            <Button type="submit">Entrar</Button>
          </div>
        </form>
        <div className="logo">
          <img src={logo} />
          <h1>Faça seu login na plataforma</h1>
        </div>
      </Content>
    </Container>
  );
};

export default Login;
