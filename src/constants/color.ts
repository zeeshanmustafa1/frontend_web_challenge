import { createTheme } from '@mui/material/styles';

// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
  interface Palette {
    ochre: Palette['primary'];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}

export const theme = createTheme({
  palette: {
    white: {
      main: '#ffff',
      contrastText: '#242105',
    },
  },
});