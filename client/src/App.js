import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme.js";

import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Test from "./components/Test";

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* titlebar */}
          <Test></Test>
          <Card variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>

                    <Typography color="textSecondary">adjective</Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
                </Card>
          <Container>
            <GridList>
              <GridListTile cols={2}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>

                    <Typography color="textSecondary">adjective</Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
                </Card>
              </GridListTile>
              
            </GridList>
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
