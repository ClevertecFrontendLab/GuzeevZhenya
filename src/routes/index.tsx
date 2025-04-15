import { createBrowserRouter } from 'react-router-dom';

import { Main } from '~/components/Layout/Main/Main';
import { CategoryPage } from '~/pages/CategoryPage';
import { JuiciestPage } from '~/pages/JuiciestPage';

import { Layout } from '../components/Layout/Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: '/category/:categoryId',
                element: <CategoryPage />,
            },
            {
                path: '/category/:categoryId/:itemName',
                element: <CategoryPage />,
            },
            {
                path: '/juiciest',
                element: <JuiciestPage />,
            },
        ],
    },
]);
