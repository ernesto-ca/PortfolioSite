import { createTheme } from "@mui/material/styles";

const DefaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1C237E",
      light: "#5959D9",
    },
    secondary: {
      main: "#000000",
      dark: "black",
    },
    background: {
      default:
        "linear-gradient(180deg, rgb(200, 200, 200) 20%, rgb(225, 225, 225) 80%, rgb(255, 255, 255) 100%)",
    },
    text: {
      primary: "#F3F3F3",
      secondary: "#000000",
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: (theme) => ({
    fontFamily: "Space Mono",
    h1: {
      fontWeight: 400,
      lineHeight: 1.4,
      fontSize: "clamp( 4rem, 12vmin, 6rem )",
      color: theme.primary.light,
    },
    h2: {
      fontSize: "clamp( 1.5rem, 5vmin, 2.5rem )",
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h3: {
      color: theme.secondary.dark,
      fontSize: "clamp( 1.2rem, 3.5vmin, 2rem )",
      lineHeight: 1.4,
      fontWeight: 600,
    },
    h4: {
      color: theme.secondary.dark,
      fontSize: "clamp( 1rem, 3vmin, 1.75rem )",
      lineHeight: 1,
      fontWeight: 400,
    },
    h5: {
      color: theme.secondary.dark,
      lineHeight: 1,
      fontWeight: 400,
    },
    body1: {
      fontFamily: "Trispace",
      fontSize: "clamp( 0.75rem, 2.4vmin, 1.5rem )",
      lineHeight: 1.6,
      fontWeight: 400,
      color: theme.secondary.dark,
    },
    body2: {
      fontFamily: "Trispace",
      fontSize: "clamp( 0.5rem, 2vmin, 1.25rem )",
      lineHeight: 1.6,
      fontWeight: 400,
      color: theme.secondary.dark,
    },
    caption: {
      fontSize: "clamp( 0.5rem, 2vmin, 1.25rem )",
      lineHeight: 1.6,
      fontWeight: 400,
    },
  }),
  components: {
    MuiCssBaseline: {
      styleOverrides: `
   
      `,
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          padding: "0.75rem 1.5rem",
          borderRadius: 0,
          "&:hover": {
            color: "#F3F3F3",
          },
          textAlign: "center",
        },
        outlined: ({ ownerState, theme }) => ({
          "&:hover": {
            backgroundColor:
              ownerState.color != undefined && ownerState.color != "inherit"
                ? theme.palette[ownerState.color].main
                : "primary",
          },
        }),
        text: {
          fontSize: "1.2rem",
        },
      },
    },
    MuiInput: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          border: "1px solid",
          padding: "1rem 1.5rem",
          borderColor:
            ownerState.color != undefined
              ? theme.palette[ownerState.color].main
              : "inherit",
        }),
      },
    },
    MuiSelect: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          border: "1px solid",
          borderRadius: "0",
          padding: "0.25rem 0",
          marginTop: 16,
          borderColor:
            ownerState.color != undefined
              ? theme.palette[ownerState.color].main
              : "inherit",
        }),
      },
    },
    MuiInputLabel: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          fontFamily: "Space Mono",
          color:
            ownerState.color != undefined
              ? theme.palette[ownerState.color].main
              : "inherit",
        }),
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        error: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body2,
        }),
      },
    },
  },
});

export default DefaultTheme;
