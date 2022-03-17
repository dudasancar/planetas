import React from "react";
import logo from "../../assets/Logo.svg";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} />
      <div>
        <PersonIcon />
        <p>Usuário</p>
        <KeyboardArrowDownIcon />
      </div>
    </Container>
  );
};

export default Header;
