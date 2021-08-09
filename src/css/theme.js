import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#D759FF",
      main: "#D15DFF",
      dark: "#C363FF",
    },

    secondary: {
      light: "#e3ef86", //click
      main: "#cae023", // background
      dark: "#e1ff00", // hover
      contrastText: "red",
    },
  },
});
