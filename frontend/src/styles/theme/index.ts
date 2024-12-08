import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#1E3832',
    },
    secondary: {
      main: '#00754A',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h4',
          subtitle2: 'h4',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
  zIndex: {
    mobileStepper: 1,
    fab: 2,
    speedDial: 3,
    appBar: 4,
    drawer: 5,
    modal: 6,
    snackbar: 7,
    tooltip: 8
  },
  transitions: {
    create: () => 'none'
}
});
