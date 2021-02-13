import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Root } from 'containers';
import store from 'store';
import { theme, ThemeProvider } from 'styles';

const App = () => (
  <Provider store={ store }>
    <ThemeProvider theme={ theme }>
      <Router>
        <Root/>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
