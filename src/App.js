import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import AppRoute from './routes/Route';
import { loadUser } from './reducers/useReducers';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

function App() {

  const theme = extendTheme({
    colors: {
      primaryBlack: {
        100: '#1a1a1a',
      },
      primaryGreen: {
        100: '#0bd46e',
      },
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('phaseUser') !== null) {
        let user = JSON.parse(localStorage.getItem('phaseUser') ?? '{}');
        dispatch(loadUser(user));
      } else if (Cookies.get('phaseUser') !== undefined) {
        let user = JSON.parse(Cookies.get('phaseUser') ?? '{}');
        dispatch(loadUser(user));
      }
    })();
   
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <AppRoute />
    </ChakraProvider>
  );
}

export default App;
