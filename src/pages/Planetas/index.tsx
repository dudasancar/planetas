import React from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";

const Planetas: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSearch = (event: any) => {};
  return (
    <Container>
      <Header />
      <div className="content">
        <div className="back-home">
          <ArrowBackIosNewIcon onClick={() => navigate("/home")} />
          <p>
            Home/<strong>Planetas</strong>
          </p>
        </div>
        <div className="filter-box">
          <div className="filter">
            <p className="title-filter">Filtrar planetas</p>
            <form onSubmit={formik.handleSubmit} className="form">
              <FormControl fullWidth className="search">
                <TextField
                  variant="outlined"
                  placeholder="Pesquisar planeta..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => handleSearch(event)}
                />
              </FormControl>
              <FormControl
                fullWidth
                variant="outlined"
                error={formik.touched.filter1 && Boolean(formik.errors.filter1)}
              >
                <InputLabel
                  id="filter1"
                  style={{ color: " #cdcdcd", marginLeft: "30px" }}
                >
                  Selecione um filtro
                </InputLabel>
                <Select
                  name="filter1"
                  labelId="filter1"
                  id="filter1"
                  placeholder="Selecione uma habilidade"
                  value={formik.values.filter1}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="surfaceArea">Área de superficie</MenuItem>
                  <MenuItem value="sunDistance">Distância do sol</MenuItem>
                  <MenuItem value="day">Duração do dia</MenuItem>
                  <MenuItem value="gravity">Gravidade</MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.filter1 && formik.errors.filter1}
                </FormHelperText>
              </FormControl>
              <FormControl
                fullWidth
                className="function"
                variant="outlined"
                error={formik.touched.filter2 && Boolean(formik.errors.filter2)}
              >
                <InputLabel
                  id="filter2"
                  style={{ color: " #cdcdcd", marginLeft: "30px" }}
                >
                  Selecione um filtro
                </InputLabel>
                <Select
                  name="filter2"
                  labelId="filter2"
                  id="filter2"
                  placeholder="Selecione um filtro"
                  value={formik.values.filter2}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="biggest">Maior ao menor</MenuItem>
                  <MenuItem value="smaller">Menor ao maior</MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.filter2 && formik.errors.filter2}
                </FormHelperText>
              </FormControl>
              <Button
                className="btn-filter"
                color="secondary"
                variant="contained"
                type="submit"
              >
                Filtrar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Planetas;
