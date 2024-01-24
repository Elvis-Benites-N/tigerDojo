import { Button } from "@mui/material";
import React from "react";
import buttonStyles from '../../styles/Buttons/buttonsStyles';

const EditedButtons = ({ sx = {}, children, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{ ...buttonStyles, ...sx }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default EditedButtons;
