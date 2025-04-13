// NewRecipes.tsx
import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
import { useRef } from 'react';

import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';
import { newRecipes } from '~/data/data';

import { RecipeCard } from './RecipeCard';

const newRecipesBreakpoints = {
    xsmall: {
        cardWidth: 140,
        imageHeight: 100,
        visibleCards: 2,
        gap: 12,
        fontSize: {
            // Добавляем размеры шрифта для xsmall
            heading: '20px',
            cardTitle: '14px',
            cardText: '12px',
        },
    },
    small: {
        cardWidth: 158,
        imageHeight: 128,
        visibleCards: 2,
        gap: 12,
        fontSize: {
            // Размеры шрифта для small
            heading: '22px',
            cardTitle: '15px',
            cardText: '13px',
        },
    },
    medium: {
        cardWidth: 240,
        imageHeight: 160,
        visibleCards: 4,
        gap: 16,
        fontSize: {
            // Размеры шрифта для medium
            heading: '24px',
            cardTitle: '16px',
            cardText: '14px',
        },
    },
    large: {
        cardWidth: 280,
        imageHeight: 180,
        visibleCards: 4,
        gap: 20,
        fontSize: {
            // Размеры шрифта для large
            heading: '26px',
            cardTitle: '18px',
            cardText: '15px',
        },
    },
    xlarge: {
        cardWidth: 324,
        imageHeight: 230,
        visibleCards: 4,
        gap: 24,
        fontSize: {
            // Размеры шрифта для xlarge
            heading: '48px',
            cardTitle: '20px',
            cardText: '16px',
        },
    },
};

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
            {/* Only xsmall gets padding */}
            <Heading
                size='md'
                mb={6}
                fontSize={fontSize.heading} // Применяем размер шрифта для заголовка
                lineHeight='1.2'
            >
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
                        {' '}
                        {/* Removed padding for all sizes */}
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
