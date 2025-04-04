import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router';

import { router } from '~/routes';

import { theme } from '../styles/theme';

const App = () => (
    <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
    </ChakraProvider>
);

export default App;
