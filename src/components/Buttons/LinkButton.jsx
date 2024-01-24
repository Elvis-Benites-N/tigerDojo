import React from "react";
import { Stack } from "@mui/material";
import linkStyles from "../../styles/Buttons/linkStyles";

const LinkButton = ({ children, ...props }) => {
  return(
  <Stack
  sx={{ ...linkStyles }} {...props}
  >
    {children}
  </Stack>
  );
};

export default LinkButton;
