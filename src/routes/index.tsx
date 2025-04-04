import { createBrowserRouter } from 'react-router'; // Используйте react-router-dom

import { Layout } from '../components/Layout/Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
    },
]);
