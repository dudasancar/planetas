import React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { Divider } from "@mui/material";

interface IProps {
  open: boolean;
  anchorEl: any;
  id: any;
}

const SimplePopper = ({ open, anchorEl, id }: IProps): React.ReactElement => {
  return (
    <div>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          sx={{
            border: 1,
            borderRadius: 5,
            p: 2,
            fontSize: 18,
            cursor: "pointer",
            bgcolor: "background.paper",
          }}
        >
          Minha conta
          <Divider
            style={{
              margin: "10px 0 10px 0",
              borderColor: "#2A2A2A",
              width: "100%",
            }}
          />
          Sair
        </Box>
      </Popper>
    </div>
  );
};

export default SimplePopper;
