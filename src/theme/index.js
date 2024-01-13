import { blueGrey } from '@mui/material/colors';
import { alpha, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00D7BB',
        },
        secondary: {
            main: '#01F298',
        },
        muted: {
            main: '#313741',
        },
    },
    typography: {
        fontFamily: "'Glory', sans-serif",
    },
    fontSize: {
        micro: '0.35rem',
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
    borderRadius: {
        none: '0',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
    },
    fontWeight: {
        thin: 200,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    blur: {
        primary: 'blur(10px)',
    },
});
// ============== gradient

theme.gradient = {
    alpha75_1: `linear-gradient(45deg, ${alpha(theme.palette.secondary.main, 0.75)} 25%, ${alpha(theme.palette.primary.main, 0.75)} 100%)`,
    alpha75_2: `linear-gradient(45deg, ${alpha(theme.palette.secondary.main, 1)} 0%, ${alpha(theme.palette.common.white, 0.75)} 70%)`,
    secondaryDark: `linear-gradient(0deg, ${alpha(theme.palette.common.black, 0.75)} 0%, ${alpha(theme.palette.primary.main, 0)} 100%)`,
};

theme.palette.common.black = '#313741';
theme.palette.common.grey = blueGrey[500];
theme.palette.common.greyLight = blueGrey[50];
theme.palette.greyDark = {
    main: blueGrey[500],
};
// =============== SHADOW
theme.shadows = {
    ...theme.shadows,
    default: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
    png: {
        WebkitFilter: 'drop-shadow(0px 6px 6px rgba(0,0,0,0.2))',
        filter: 'drop-shadow(0px 6px 6px rgba(0,0,0,0.2))',
    },
};

// =============== css override
theme.components = {
    ...theme.components,
    MuiCssBaseline: {
        styleOverrides: `          
  		`,
    },
};

export default theme;
