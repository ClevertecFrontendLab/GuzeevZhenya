import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { JuicyRecipeCard } from '~/components/Layout/Main/JuicyRecipeCard';
import { SearchSection } from '~/components/Layout/Main/SearchSection';
import { categories, newRecipes } from '~/data/data';

export const CategoryPage = () => {
    const { categoryId, itemName } = useParams<{
        categoryId: string;
        itemName?: string;
    }>();
    const navigate = useNavigate();

    const decodedCategoryId = decodeURIComponent(categoryId || '');
    const selectedCategory = categories.find((category) => decodedCategoryId === category.name);

    if (!selectedCategory) {
        return (
            <Box textAlign='center' mt={8}>
                <Heading size='lg'>Категория не найдена</Heading>
                <Text mt={4}>Пожалуйста, выберите другую категорию.</Text>
            </Box>
        );
    }
    const filteredRecipes = itemName
        ? newRecipes.filter(
              (recipe) =>
                  decodedCategoryId === recipe.category &&
                  decodeURIComponent(itemName) === recipe.subcategory,
          )
        : [];

    return (
        <Box maxW='1920px' mx='auto' p={4}>
            {itemName && (
                <Button
                    leftIcon={<ChevronLeftIcon />}
                    variant='ghost'
                    mb={4}
                    onClick={() => navigate(-1)}
                >
                    Назад
                </Button>
            )}

            <SearchSection categoryName={selectedCategory.name} />

            <Box mb={8}>
                <Flex
                    justifyContent='center'
                    overflowX='auto'
                    py={2}
                    position='relative'
                    css={{
                        '&::-webkit-scrollbar': { height: '6px' },
                        '&::-webkit-scrollbar-track': { background: '#f1f1f1' },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#888',
                            borderRadius: '3px',
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '1px',
                            backgroundColor: 'gray.200',
                        },
                    }}
                >
                    <Flex gap={0} display='inline-flex'>
                        {selectedCategory.items.map((item, index) => (
                            <Link
                                key={index}
                                to={`/category/${encodeURIComponent(selectedCategory.name)}/${encodeURIComponent(item.name)}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Box
                                    px={4}
                                    py={2}
                                    position='relative'
                                    _hover={{
                                        color: 'green.500',
                                        '&::after': {
                                            backgroundColor: 'green.500',
                                        },
                                    }}
                                    color={itemName === item.name ? 'green.500' : 'inherit'}
                                    _after={{
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: '16px',
                                        right: '16px',
                                        height: '2px',
                                        backgroundColor:
                                            itemName === item.name ? 'green.500' : 'transparent',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    <Text fontWeight='medium' whiteSpace='nowrap'>
                                        {item.name}
                                    </Text>
                                </Box>
                            </Link>
                        ))}
                    </Flex>
                </Flex>
            </Box>

            {itemName && (
                <>
                    {filteredRecipes.length === 0 ? (
                        <Box textAlign='center' mt={8}>
                            <Text fontSize='lg'>В этой подкатегории пока нет рецептов.</Text>
                        </Box>
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
                            {filteredRecipes.map((recipe) => (
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
                    )}
                </>
            )}
        </Box>
    );
};
