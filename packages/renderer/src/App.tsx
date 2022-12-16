import { ApolloProvider } from '@merged/solid-apollo';
import MenuIcon from '@suid/icons-material/Menu';
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@suid/material';
import { green, purple } from '@suid/material/colors';
import { createTheme, ThemeProvider } from '@suid/material/styles';
import { apolloClient } from './apolloClient';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: green[500],
    },
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <Grid container direction="column" height="100vh">
          <Grid marginTop={'64px'} />

          <Grid item overflow="auto" flex={1}>
            <Grid container height="200vh">
              <Grid item>
                <Typography variant="h1">Hello World!</Typography>
                <Typography variant="body1">Hello World</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ApolloProvider>
    </ThemeProvider>
  );
}
