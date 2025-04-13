// // Main.tsx
// import { Box } from '@chakra-ui/react';

// import { JuicySection } from './JuicySection';
// import { NewRecipes } from './NewRecipes';
// import { RecipeCardsList, } from './QuoteSection';
// import { ReviewsSection } from './ReviewSection';
// import { SearchSection } from './SearchSection';

// export const Main = () => (
//     <Box
//         width='100%'
//         maxW={{ base: '100%', md: '904px', xl: '1384px' }}
//         mx='auto'
//         pl={{ base: 4, md: 6, xl: 6 }}
//         pr={0}
//     >
//         <SearchSection />
//         <NewRecipes />
//         <JuicySection />
//         <ReviewsSection />
//         <RecipeCardsList recipes={[
//             {
//                 title: "Картошка с перцем и фасолью",
//                 description: "Вкусное и сытное блюдо...",
//                 category: "Вторые блюда",
//                 likes: 124,
//                 addedToFavorites: 56
//             },
//             {
//                 title: "Куриные грудки с овощами",
//                 description: "Простое и полезное блюдо...",
//                 category: "Основные блюда",
//                 likes: 89,
//                 addedToFavorites: 42
//             }
//         ]} />
//     </Box>
// );
import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import { JuicySection } from './JuicySection';
import { NewRecipes } from './NewRecipes/NewRecipes';
import { RecipeCardsList } from './QuoteSection';
import { ReviewsSection } from './ReviewSection';
import { SearchSection } from './SearchSection';

export const Main = () => {
    const location = useLocation();

    // Проверяем, является ли текущий путь страницей категории
    const isCategoryPage = location.pathname.startsWith('/category/');

    return (
        <Box
            width='100%'
            maxW={{
                base: '500px',
                md: '904px', // Изменено с 904px на 728px (768 - 20*2)
                xl: '1384px',
            }}
            mx='auto'
            pl={{ xl: 6 }}
            pr={0}
        >
            <SearchSection />
            {!isCategoryPage && <NewRecipes />}
            <JuicySection />
            {!isCategoryPage && <ReviewsSection />}
            <RecipeCardsList
                recipes={[
                    {
                        title: 'Картошка с перцем и фасолью',
                        description:
                            'Вкусное и сытное блюдо,Вкусное и сытное блюдоВкусное и сытное блюдоВкусное и сытное блюдоВкусное и сытное блюдо',
                        category: 'Вторые блюда',
                        likes: 124,
                        addedToFavorites: 56,
                    },
                    {
                        title: 'Куриные грудки с овощами',
                        description: 'Простое и полезное блюдо...',
                        category: 'Основные блюда',
                        likes: 89,
                        addedToFavorites: 42,
                    },
                ]}
            />
        </Box>
    );
};
