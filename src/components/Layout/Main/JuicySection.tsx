import { Box, Button, Flex, Grid, Heading } from '@chakra-ui/react';

import { juicyRecipesBreakpoints } from '~/components/constant/breakpoints';
import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';

import { JuicyRecipeCard } from './JuicyRecipeCard';

export const JuicySection = () => {
    const currentBreakpoint = useCustomBreakpoints(juicyRecipesBreakpoints);

    const juicyRecipes = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60',
            category: 'Вторые блюда',
            likes: 85,
            addedToFavorites: 152,
            name: 'Кнели со спагетти',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60',
            category: 'Вторые блюда',
            likes: 120,
            addedToFavorites: 90,
            name: 'Гречка с курицей',
            description: 'Простое и сытное блюдо, идеально подходящее для обеда в будние дни.',
            review: {
                avatar: 'https://bit.ly/dan-abramov',
                name: 'Анна К.',
                text: 'Рекомендую!',
            },
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500&auto=format&fit=crop&q=60',
            category: 'Вторые блюда',
            likes: 200,
            addedToFavorites: 130,
            name: 'Картофельное пюре с грибами',
            description:
                'Нежное картофельное пюре, дополненное ароматными грибами, станет отличным гарниром.',
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60',
            category: 'Вторые блюда',
            likes: 75,
            addedToFavorites: 45,
            name: 'Тушеная капуста с сосисками',
            description: 'Сытное и вкусное блюдо, которое готовится быстро и просто.',
            review: {
                avatar: 'https://bit.ly/dan-abramov',
                name: 'Анна К.',
                text: 'Рекомендую!',
            },
        },
    ];

    return (
        <Box>
            <Flex justify='space-between' align='center' mb={4}>
                <Heading size='md'>Самое сочное</Heading>
                <Button variant='ghost'>Вся подборка</Button>
            </Flex>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} mb={10}>
                {juicyRecipes.map((recipe) => (
                    <JuicyRecipeCard
                        key={recipe.id}
                        image={recipe.image}
                        title={recipe.name}
                        description={recipe.description}
                        category={recipe.category}
                        likes={recipe.likes}
                        addedToFavorites={recipe.addedToFavorites}
                        review={recipe.review}
                        cardWidth={`${currentBreakpoint?.cardWidth}px`}
                        cardHeight={`${currentBreakpoint?.cardHeight}px`}
                    />
                ))}
            </Grid>
        </Box>
    );
};
