import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Button, Grid } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { newRecipesBreakpoints } from '~/components/constant/breakpoints';
import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';
import { JuicyRecipeCard } from '~/components/Layout/Main/JuicyRecipeCard';
import { SearchSection } from '~/components/Layout/Main/SearchSection';
import { freshRecipes } from '~/data/data';

export const JuiciestPage = () => {
    const navigate = useNavigate();
    useCustomBreakpoints(newRecipesBreakpoints);

    return (
        <Box maxW='1920px' mx='auto' p={4}>
            <Button
                leftIcon={<ChevronLeftIcon />}
                variant='ghost'
                mb={4}
                onClick={() => navigate(-1)}
            >
                Назад
            </Button>

            <SearchSection data-test-id='juicy-section-title' categoryName='Самое сочное' />

            <Grid
                templateColumns={{
                    base: '1fr',
                    lg: '1fr',
                    xl: 'repeat(2, 1fr)',
                }}
                gap={{ base: 6, md: 8 }}
                mb={12}
            >
                {freshRecipes.map((recipe) => (
                    <JuicyRecipeCard
                        key={recipe.id}
                        image={recipe.image}
                        title={recipe.title}
                        description={recipe.description}
                        category={recipe.category}
                        likes={recipe.likes}
                        addedToFavorites={recipe.addedToFavorites}
                        cardWidth='100%'
                        imageHeight={244}
                    />
                ))}
            </Grid>
        </Box>
    );
};
