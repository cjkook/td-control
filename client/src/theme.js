import { createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
  paper: {
    backgroundColor: "#000000",
    // color: theme.palette.primary.contrastText,
  },
});

export default theme;
