import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
      background: {
        default: "#0C0C0C",
      },
      text: {
        secondary: "#AFAFAF",
      },
    },
    typography,
  });

export default theme;