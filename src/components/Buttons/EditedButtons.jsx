import { Button } from "@mui/material";
import React from "react";
import buttonStyles from '../../styles/Buttons/buttonsStyles';

const EditedButtons = ({ sx = {}, children, onClick, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{ ...buttonStyles, ...sx }}
      onClick={onClick} // Asegúrate de que esta prop se esté utilizando correctamente
      {...props}
    >
      {children}
    </Button>
  );
};

export default EditedButtons;
