import { Box, Button, Flex, Grid, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { useMemo } from 'react';

import { recipeCardsBreakpoints } from '~/components/constant/breakpoints';
import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';
import { categories, newRecipes } from '~/data/data';

interface RecipeCardProps {
    title: string;
    description: string;
    category: string;
    likes: number;
    addedToFavorites: number;
    width: string | number;
    height: string | number;
    padding: string | number;
    isMobile?: boolean;
}

interface RecipeCardsListProps {
    categoryId?: number; // Опциональный ID категории
}

export const RecipeCardsList = ({ categoryId }: RecipeCardsListProps) => {
    const { currentBreakpoint } = useCustomBreakpoints(recipeCardsBreakpoints);
    const isMobile = useBreakpointValue({ base: true, md: false });

    // Получаем случайную категорию или по ID
    const selectedCategory = useMemo(() => {
        if (categoryId) {
            return categories.find((cat) => cat.id === categoryId);
        }
        return categories[Math.floor(Math.random() * categories.length)];
    }, [categoryId]);

    // Получаем рецепты для выбранной категории
    const categoryRecipes = useMemo(() => {
        if (!selectedCategory) return [];

        const recipeIds = selectedCategory.items.flatMap((item) => item.recipes);
        return newRecipes
            .filter((recipe) => recipeIds.includes(recipe.id))
            .map((recipe) => ({
                title: recipe.title,
                description: recipe.description,
                category: recipe.subcategory,
                likes: recipe.likes,
                addedToFavorites: recipe.addedToFavorites,
            }));
    }, [selectedCategory]);

    const {
        cardWidth,
        cardHeight,
        containerWidth,
        smallCardHeight,
        gap,
        cardPadding,
        smallCardPadding,
    } = currentBreakpoint;

    return (
        <Box width='100%' maxW='1384px' mx='auto'>
            <Heading size='xl' mb={8} textAlign='left'>
                {selectedCategory?.name || 'Популярные рецепты'}
            </Heading>

            <Grid
                templateColumns={{
                    base: '1fr',
                    md: 'repeat(3, 1fr)',
                    lg: `${cardWidth} ${cardWidth} ${containerWidth}`,
                }}
                gap={gap}
                mb={6}
            >
                {categoryRecipes.slice(0, 2).map((recipe, index) => (
                    <RecipeCard
                        key={index}
                        {...recipe}
                        width={cardWidth || '100%'}
                        height={cardHeight || 'auto'}
                        padding={cardPadding || 4}
                        isMobile={isMobile}
                    />
                ))}

                <Flex direction='column' gap={3} width={containerWidth}>
                    {categoryRecipes.slice(2, 5).map((recipe, index) => (
                        <SmallRecipeCard
                            key={index}
                            title={recipe.title}
                            width='100%'
                            height={smallCardHeight || '44px'}
                            padding={smallCardPadding || 2}
                        />
                    ))}
                </Flex>
            </Grid>
        </Box>
    );
};

const RecipeCard = ({
    title,
    description,
    category,
    likes,
    addedToFavorites,
    width,
    height,
    padding,
    isMobile,
}: RecipeCardProps & {
    width: string | number;
    height: string | number;
    padding: string | number;
    isMobile?: boolean;
}) => {
    const truncatedTitle = isMobile
        ? title.length > 30
            ? `${title.slice(0, 20)}...`
            : title
        : title.length > 25
          ? `${title.slice(0, 22)}...`
          : title;

    const truncatedDesc = isMobile
        ? description.length > 30
            ? `${description.slice(0, 20)}...`
            : description
        : description.length > 50
          ? `${description.slice(0, 50)}...`
          : description;

    return (
        <Box
            width={width}
            height={height}
            bg='white'
            borderRadius='lg'
            boxShadow='md'
            display='flex'
            flexDirection='column'
            p={padding}
        >
            <Box flex={1}>
                <Heading
                    size='md'
                    mb={2}
                    noOfLines={2}
                    fontFamily='var(--font-family)'
                    fontWeight={500}
                    fontSize={isMobile ? '16px' : '20px'}
                    color='#000'
                >
                    {truncatedTitle}
                </Heading>
                <Text
                    fontFamily='var(--font-family)'
                    fontWeight={400}
                    fontSize={isMobile ? '14px' : '14px'}
                    lineHeight='143%'
                    color='#000'
                    noOfLines={3}
                >
                    {truncatedDesc}
                </Text>
            </Box>

            <Flex justify='space-between' mt={4}>
                <Box bg='yellow.100' borderRadius='md'>
                    <Text
                        fontFamily='var(--font-family)'
                        fontWeight={400}
                        fontSize='14px'
                        lineHeight='143%'
                        color='#000'
                        px={3}
                        py={1}
                    >
                        {category}
                    </Text>
                </Box>
                <Flex align='center' gap={1}>
                    <Text fontSize='12px'>❤️ {likes}</Text>
                    <Text fontSize='12px'>⭐ {addedToFavorites}</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

interface SmallRecipeCardProps {
    title: string;
    width: string | number;
    height: string | number;
    padding: string | number;
}

const SmallRecipeCard = ({ title, width, height, padding }: SmallRecipeCardProps) => (
    <Box
        width={width}
        height={height}
        bg='white'
        borderRadius='lg'
        boxShadow='md'
        display='flex'
        alignItems='center'
        p={padding}
    >
        <Text flex={1} fontWeight='500' fontSize='18px' noOfLines={1}>
            {title.length > 20 ? `${title.slice(0, 20)}...` : title}
        </Text>
        <Button colorScheme='green' size='sm' width='87px'>
            Готовить
        </Button>
    </Box>
);
