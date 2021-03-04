import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Root } from './containers';
import store from './store';
import { theme, ThemeProvider, GlobalStyle } from './styles';

const App = () => (
  <Provider store={ store }>
    <ThemeProvider theme={ theme }>
      <Router>
        <Fragment>
          <GlobalStyle/>
            <Root/>
        </Fragment>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
