import { Box, Button, Flex, Grid, Heading } from '@chakra-ui/react';

import { juicyRecipesBreakpoints } from '~/components/constant/breakpoints';
import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';
import { recipesItems } from '~/data/data';

import { JuicyRecipeCard } from './JuicyRecipeCard';

export const JuicySection = () => {
    const currentBreakpoint = useCustomBreakpoints(juicyRecipesBreakpoints);

    return (
        <Box maxW='1384px' mx='auto' pl={{ base: 4, md: 6, xl: 6 }} pr={{ base: 4, md: 0, xl: 0 }}>
            <Flex justify='space-between' align='center' mb={8}>
                <Heading size='lg'>Самое сочное</Heading>
                <Button variant='ghost' colorScheme='blue'>
                    Вся подборка
                </Button>
            </Flex>

            <Grid
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                gap={{ base: 6, md: 8 }}
                mb={12}
            >
                {recipesItems.slice(0, 4).map((recipe) => (
                    <JuicyRecipeCard
                        key={recipe.id}
                        {...recipe}
                        cardWidth='100%'
                        imageHeight={currentBreakpoint?.imageHeight || 244} // Исправлено здесь
                    />
                ))}
            </Grid>
        </Box>
    );
};
