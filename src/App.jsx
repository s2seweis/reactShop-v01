/* eslint-disable react/forbid-prop-types */
import { Preloader } from 'components/common';
import PropType from 'prop-types';
import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from 'routers/AppRouter';
import { ProSidebarProvider } from 'react-pro-sidebar';






const App = ({ store, persistor }) => { 

  

  return (
  
  <ProSidebarProvider>
    
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Preloader  />} persistor={persistor}>


        <AppRouter />


      </PersistGate>
    </Provider>
    
  </StrictMode>
      </ProSidebarProvider>
      );
};

App.propTypes = {
  store: PropType.any.isRequired,
  persistor: PropType.any.isRequired
};

export default App;
