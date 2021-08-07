import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

import store from './redux/store';

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
