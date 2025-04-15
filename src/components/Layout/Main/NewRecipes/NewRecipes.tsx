import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
import { useRef } from 'react';

import { newRecipesBreakpoints } from '~/components/constant/breakpoints';
import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';
import { newRecipes } from '~/data/data';

import { RecipeCard } from './RecipeCard';

export const NewRecipes = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const {
        screenSize: currentSize,
        isXSmall,
        isSmall,
    } = useCustomBreakpoints(newRecipesBreakpoints);

    const breakpoint = newRecipesBreakpoints[currentSize] || newRecipesBreakpoints.large;
    const { cardWidth, imageHeight, gap, visibleCards, fontSize } = breakpoint;

    const scrollTo = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const scrollAmount = (cardWidth + gap) * visibleCards;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (direction === 'right' && maxScroll - container.scrollLeft <= scrollAmount) {
            container.scrollTo({ left: maxScroll, behavior: 'smooth' });
            return;
        }

        container.scrollTo({
            left:
                direction === 'right'
                    ? container.scrollLeft + scrollAmount
                    : container.scrollLeft - scrollAmount,
            behavior: 'smooth',
        });
    };

    const containerWidth = {
        xsmall: '100%',
        small: '100%',
        medium: '728px',
        large: '1360px',
        xlarge: '1360px',
    }[currentSize];

    const isMobile = isXSmall || isSmall;

    return (
        <Box mb={10} maxW={containerWidth} pt={6} pb={5} px={isXSmall ? 4 : 0}>
            <Heading size='md' mb={6} fontSize={fontSize.heading} lineHeight='1.2'>
                Новые рецепты
            </Heading>
            <Box position='relative'>
                {!isMobile && (
                    <IconButton
                        aria-label='Прокрутить влево'
                        position='absolute'
                        left={0}
                        top='50%'
                        transform='translateY(-50%)'
                        zIndex={1}
                        onClick={() => scrollTo('left')}
                        bg='white'
                        boxShadow='md'
                        borderRadius='full'
                        width='48px'
                        height='48px'
                    />
                )}

                <Box
                    ref={scrollContainerRef}
                    overflowX='auto'
                    css={{
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none',
                    }}
                >
                    <Flex gap={`${gap}px`} px={0}>
                        {newRecipes.map((recipe) => (
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

                {!isMobile && (
                    <IconButton
                        aria-label='Прокрутить вправо'
                        position='absolute'
                        right={0}
                        top='50%'
                        transform='translateY(-50%)'
                        zIndex={1}
                        onClick={() => scrollTo('right')}
                        bg='white'
                        boxShadow='md'
                        borderRadius='full'
                        width='48px'
                        height='48px'
                    />
                )}
            </Box>
        </Box>
    );
};
