// NewRecipes.tsx
import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
import { useRef } from 'react';

import { newRecipesBreakpoints } from '~/components/constant/breakpoints';
import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';
import { recipesItems } from '~/data/data';
import { MaxWidthProps } from '~/types/types';

import { RecipeCard } from './RecipeCard';

export const NewRecipes = ({ maxW = '1360px' }: MaxWidthProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const currentBreakpoint = useCustomBreakpoints(newRecipesBreakpoints);

    const {
        cardWidth = 322,
        cardHeight = 414,
        imageWidth = 322,
        imageHeight = 230,
        visibleCards = 4,
        gap = 24,
    } = currentBreakpoint || {};

    const scrollTo = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const scrollAmount = (cardWidth + gap) * visibleCards;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (direction === 'right') {
            // Для последнего скролла учитываем только оставшееся расстояние без gap
            const remainingScroll = maxScroll - container.scrollLeft;
            if (remainingScroll <= scrollAmount) {
                container.scrollTo({
                    left: maxScroll,
                    behavior: 'smooth',
                });
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
        <Box
            mb={10}
            position='relative'
            maxW={maxW}
            mx='auto'
            pt={6}
            pb={5}
            px={{ base: 4, xl: 0, md: 0 }}
        >
            <Heading size='md' mb={4}>
                Новые рецепты
            </Heading>

            <Box position='relative'>
                <IconButton
                    aria-label='Прокрутить влево'
                    position='absolute'
                    left='0'
                    top={`calc(${cardHeight / 2}px - 24px)`}
                    zIndex={1}
                    onClick={() => scrollTo('left')}
                    display={{ base: 'none', md: 'flex' }}
                    bg='white'
                    boxShadow='md'
                    borderRadius='md'
                    width='48px'
                    height='48px'
                />

                <Box
                    ref={scrollContainerRef}
                    overflowX='auto'
                    position='relative'
                    width='100%'
                    mx='auto'
                    css={{
                        '&::-webkit-scrollbar': { display: 'none' },
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none',
                    }}
                >
                    <Flex
                        gap={`${gap}px`}
                        width={`${(cardWidth + gap) * recipesItems.length - gap}px`} // Вычитаем последний gap
                    >
                        {recipesItems.map((recipe) => (
                            <Box
                                key={recipe.id}
                                width={`${cardWidth}px`}
                                flexShrink={0}
                                _last={{ mr: 0 }}
                            >
                                <RecipeCard
                                    {...recipe}
                                    cardWidth={`${cardWidth}px`}
                                    cardHeight={`${cardHeight}px`}
                                    imageWidth={`${imageWidth}px`}
                                    imageHeight={`${imageHeight}px`}
                                />
                            </Box>
                        ))}
                    </Flex>
                </Box>

                <IconButton
                    aria-label='Прокрутить вправо'
                    position='absolute'
                    right='0'
                    top={`calc(${cardHeight / 2}px - 24px)`}
                    zIndex={1}
                    onClick={() => scrollTo('right')}
                    display={{ base: 'none', md: 'flex' }}
                    bg='white'
                    boxShadow='md'
                    borderRadius='md'
                    width='48px'
                    height='48px'
                />
            </Box>
        </Box>
    );
};
