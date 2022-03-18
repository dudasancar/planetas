import React from "react";
import logo from "../../assets/Logo.svg";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Container } from "./styles";
import SimplePopper from "./Popper";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <>
      <SimplePopper id={id} open={open} anchorEl={anchorEl} />
      <Container>
        <img src={logo} />
        <div onClick={handleClick}>
          <PersonIcon />
          <p>Usuário</p>
          <KeyboardArrowDownIcon />
        </div>
      </Container>
    </>
  );
};

export default Header;
