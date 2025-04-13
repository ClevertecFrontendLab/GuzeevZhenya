import { Box, Button, Flex, Grid, Heading, Icon } from '@chakra-ui/react';

import { newRecipesBreakpoints } from '~/components/constant/breakpoints';
import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';
import { freshRecipes } from '~/data/data';

import ArrowRight from '../../../assets/BsArrowRight.svg';
import { JuicyRecipeCard } from './JuicyRecipeCard';

const RightArrow = () => <img src={ArrowRight} width='16' height='16' alt='Home' />;

export const JuicySection = () => {
    const { isSmall, isMedium } = useCustomBreakpoints(newRecipesBreakpoints);

    return (
        <Box maxW='1920px' mx='auto' px={isSmall ? '16px' : 0}>
            <Flex justify='space-between' align='center' mb={6}>
                <Heading size='lg'>Самое сочное</Heading>
                {!(isSmall || isMedium) && (
                    <Button bg='#B1FF2E' variant='ghost' colorScheme='blue'>
                        Вся подборка
                        <Icon as={RightArrow} marginLeft='8px' />
                    </Button>
                )}
            </Flex>

            {isSmall || isMedium ? (
                <>
                    <Box maxW={isSmall ? '328px' : '768px'} mx='auto' mb={6}>
                        <Grid templateColumns={isSmall ? '1fr' : 'repeat(2, 1fr)'} gap='12px'>
                            {freshRecipes.slice(0, 4).map((recipe) => (
                                <Box key={recipe.id}>
                                    <JuicyRecipeCard {...recipe} />
                                </Box>
                            ))}
                        </Grid>
                    </Box>
                    <Flex justify='center' mb={12}>
                        <Button bg='#B1FF2E' variant='ghost' colorScheme='blue'>
                            Вся подборка
                            <Icon as={RightArrow} marginLeft='8px' />
                        </Button>
                    </Flex>
                </>
            ) : (
                <Grid
                    templateColumns={{
                        base: '1fr',
                        lg: '1fr',
                        xl: 'repeat(2, 1fr)',
                    }}
                    gap={{ base: 6, md: 8 }}
                    mb={12}
                >
                    {freshRecipes.slice(0, 4).map((recipe) => (
                        <JuicyRecipeCard key={recipe.id} {...recipe} />
                    ))}
                </Grid>
            )}
        </Box>
    );
};
