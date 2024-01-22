import { Button } from "@mui/material";
import React from "react";

const EditedButtons = ({ sx = {}, children, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#785DE9",
        borderRadius: "0px",
        width: { xs: "150px", sm: "170px", md: "204px" }, 
        height: { xs: "32px", sm: "36px", md: "40px" }, 
        padding: { xs: "2px 24px", sm: "3px 28px", md: "4px 32px" }, 
        mb:{xs:"34px"},
        color: "text.primary",
        fontWeight: 700,
        fontSize: { xs: "14px", sm: "15px", md: "16px" }, 
        lineHeight: { xs: "28px", sm: "30px", md: "32px" },
        '&:hover': {
          backgroundColor: '#CA33FF',
        },
        ...sx,
      }}
      {...props}
    >
        {children}
    </Button>
  );
};

export default EditedButtons;
