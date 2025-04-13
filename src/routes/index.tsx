import { createBrowserRouter } from 'react-router';

import { Main } from '~/components/Layout/Main/Main';
import { CategoryPage } from '~/pages/CategoryPage';

import { Layout } from '../components/Layout/Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true, // Главная страница
                element: <Main />,
            },
            {
                path: '/category/:categoryId', // Страница категории (список подкатегорий)
                element: <CategoryPage />,
            },
            {
                path: '/category/:categoryId/:itemName', // Страница подкатегории (список рецептов)
                element: <CategoryPage />,
            },
        ],
    },
]);
