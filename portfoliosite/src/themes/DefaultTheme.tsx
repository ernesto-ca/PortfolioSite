import createTheme from '@mui/material/styles/createTheme';
import { Space_Mono, Trispace } from 'next/font/google';

const spaceMono = Space_Mono({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
});

const trispace = Trispace({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
});

const DefaultTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#5d5f5f',
        },
        secondary: {
            main: '#000000',
        },
        info: {
            main: '#EAC05B',
        },
        background: {
            default: '#fcf8f8',
        },
        text: {
            primary: '#F3F3F3',
        },
    },
    shape: {
        borderRadius: 20,
    },
    typography: {
        fontFamily: trispace.style.fontFamily,
        h1: {
            fontWeight: 400,
            lineHeight: 1.4,
            fontSize: 'clamp( 4rem, 12vmin, 6rem )',
        },
        h2: {
            fontSize: 'clamp( 1.5rem, 5vmin, 2.5rem )',
            fontWeight: 400,
            lineHeight: 1.4,
        },
        h3: {
            fontSize: 'clamp( 1rem, 3.6vmin, 1.75rem )',
            lineHeight: 1.4,
            fontWeight: 400,
        },
        body1: {
            fontFamily: spaceMono.style.fontFamily,
            fontSize: 'clamp( 0.75rem, 2.4vmin, 1.5rem )',
            lineHeight: 1.6,
            fontWeight: 400,
        },
        body2: {
            fontFamily: spaceMono.style.fontFamily,
            fontSize: 'clamp( 0.5rem, 2vmin, 1.25rem )',
            lineHeight: 1.6,
            fontWeight: 400,
        },
        caption: {
            fontSize: 'clamp( 0.5rem, 2vmin, 1.25rem )',
            lineHeight: 1.6,
            fontWeight: 400,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    padding: '0.75rem 1.5rem',
                    borderRadius: 0,
                    '&:hover': {
                        color: '#F3F3F3',
                    },
                    textAlign: 'center',
                },
                outlined: ({ ownerState, theme }) => ({
                    '&:hover': {
                        backgroundColor:
                            ownerState.color != undefined &&
                            ownerState.color != 'inherit'
                                ? theme.palette[ownerState.color].main
                                : 'primary',
                    },
                }),
                text: {
                    fontSize: '1.2rem',
                },
            },
        },
        MuiInput: {
            defaultProps: {
                color: 'primary',
            },
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    border: '1px solid',
                    padding: '1rem 1.5rem',
                    borderColor:
                        ownerState.color != undefined
                            ? theme.palette[ownerState.color].main
                            : 'inherit',
                }),
            },
        },
        MuiSelect: {
            defaultProps: {
                color: 'primary',
            },
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    border: '1px solid',
                    borderRadius: '0',
                    padding: '0.25rem 0',
                    marginTop: 16,
                    borderColor:
                        ownerState.color != undefined
                            ? theme.palette[ownerState.color].main
                            : 'inherit',
                }),
            },
        },
        MuiInputLabel: {
            defaultProps: {
                color: 'primary',
            },
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    fontFamily: spaceMono.style.fontFamily,
                    color:
                        ownerState.color != undefined
                            ? theme.palette[ownerState.color].main
                            : 'inherit',
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