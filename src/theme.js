import { createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: "roboto",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#3766E8",
    },
  },
});
