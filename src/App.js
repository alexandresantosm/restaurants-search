import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

import theme from './styles/theme';
import GlobalStyle from './styles/global';

// CSS - Input restaurants search
import '@material/react-text-field/dist/text-field.css';
import '@material/react-material-icon/dist/material-icon.css';

// CSS - Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
