import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
      button: {
        primary: "#785DE9",
        secondary: '#CA33FF'
      },
      background: {
        default: "#0C0C0C",
      },
      text: {
        secondary: "#AFAFAF",
      },
      special:{
        background: "rgba(7,7,16,.7)",
        border: "rgba(255, 255, 255, 0.2)"
      }
    },
    typography,
  });

export default theme;