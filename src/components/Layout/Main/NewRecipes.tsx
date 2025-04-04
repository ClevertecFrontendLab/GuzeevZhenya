// src/components/NewRecipes.tsx
import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
import { useRef } from 'react';

import { BreakpointsConfig, useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';
import { recipesItems } from '~/data/data';

import { RecipeCard } from './RecipeCard';

const newRecipesBreakpoints: BreakpointsConfig = {
    small: {
        cardWidth: 160,
        imageHeight: 120,
        visibleCards: 2,
        gap: 16,
    },
    medium: {
        cardWidth: 240,
        imageHeight: 160,
        visibleCards: 3,
        gap: 20,
    },
    large: {
        cardWidth: 280,
        imageHeight: 180,
        visibleCards: 4,
        gap: 24,
    },
    xlarge: {
        cardWidth: 320,
        imageHeight: 200,
        visibleCards: 4,
        gap: 24,
    },
};

export const NewRecipes = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const currentBreakpoint = useCustomBreakpoints(newRecipesBreakpoints);

    const {
        cardWidth = 280,
        imageHeight = 180,
        gap = 24,
        visibleCards = 4,
    } = currentBreakpoint || {};

    const scrollTo = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const scrollAmount = (cardWidth + gap) * visibleCards;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (direction === 'right') {
            const remainingScroll = maxScroll - container.scrollLeft;
            if (remainingScroll <= scrollAmount) {
                container.scrollTo({ left: maxScroll, behavior: 'smooth' });
                return;
            }
        }

        container.scrollTo({
            left:
                direction === 'right'
                    ? container.scrollLeft + scrollAmount
                    : container.scrollLeft - scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <Box mb={10} maxW='1360px' mx='auto' pt={6} pb={5} px={{ base: 4, md: 0 }}>
            <Heading size='md' mb={6}>
                Новые рецепты
            </Heading>

            <Box position='relative'>
                <IconButton
                    aria-label='Прокрутить влево'
                    position='absolute'
                    left={0}
                    top='50%'
                    transform='translateY(-50%)'
                    zIndex={1}
                    onClick={() => scrollTo('left')}
                    display={{ base: 'none', md: 'flex' }}
                    bg='white'
                    boxShadow='md'
                    borderRadius='full'
                    width='48px'
                    height='48px'
                />

                <Box
                    ref={scrollContainerRef}
                    overflowX='auto'
                    css={{
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none',
                    }}
                >
                    <Flex gap={`${gap}px`} px={{ base: 2, md: 0 }}>
                        {recipesItems.map((recipe) => (
                            <Box key={recipe.id} flex={`0 0 ${cardWidth}px`} flexShrink={0}>
                                <RecipeCard
                                    {...recipe}
                                    imageWidth={`${cardWidth}px`}
                                    imageHeight={`${imageHeight}px`}
                                />
                            </Box>
                        ))}
                    </Flex>
                </Box>

                <IconButton
                    aria-label='Прокрутить вправо'
                    position='absolute'
                    right={0}
                    top='50%'
                    transform='translateY(-50%)'
                    zIndex={1}
                    onClick={() => scrollTo('right')}
                    display={{ base: 'none', md: 'flex' }}
                    bg='white'
                    boxShadow='md'
                    borderRadius='full'
                    width='48px'
                    height='48px'
                />
            </Box>
        </Box>
    );
};
