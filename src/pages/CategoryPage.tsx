import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { Link, useParams } from 'react-router';

import { JuicyRecipeCard } from '~/components/Layout/Main/JuicyRecipeCard';
import { categories, newRecipes } from '~/data/data';

export const CategoryPage = () => {
    const { categoryId, itemName } = useParams<{ categoryId: string; itemName: string }>();

    // Находим выбранную категорию
    const selectedCategory = categories.find(
        (category) => decodeURIComponent(categoryId || '') === category.name,
    );

    if (!selectedCategory) {
        return (
            <Box textAlign='center' mt={8}>
                <Heading size='lg'>Категория не найдена</Heading>
                <Text mt={4}>Пожалуйста, выберите другую категорию.</Text>
            </Box>
        );
    }

    // Если выбрана подкатегория, отображаем рецепты
    if (itemName) {
        const filteredRecipes = newRecipes.filter(
            (recipe) =>
                decodeURIComponent(categoryId || '') === recipe.category &&
                decodeURIComponent(itemName || '') === recipe.subcategory,
        );

        if (!filteredRecipes.length) {
            return (
                <Box textAlign='center' mt={8}>
                    <Heading size='lg'>Нет рецептов</Heading>
                    <Text mt={4}>В этой подкатегории пока нет доступных рецептов.</Text>
                </Box>
            );
        }

        return (
            <Box maxW='1920px' mx='auto' p={4}>
                <Heading size='lg' mb={6}>
                    Рецепты: {decodeURIComponent(itemName || '')}
                </Heading>

                {/* Сетка карточек */}
                <Grid
                    templateColumns={{
                        base: '1fr',
                        lg: '1fr', // 1440-1919px - одна карточка
                        xl: 'repeat(2, 1fr)', // 1920px+ - две карточки
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
                            imageHeight={244} // Высота изображения
                        />
                    ))}
                </Grid>
            </Box>
        );
    }

    // Если выбрана только категория, отображаем подкатегории
    return (
        <Box p={4}>
            <Heading size='lg' mb={4}>
                Подкатегории: {decodeURIComponent(categoryId || '')}
            </Heading>
            <Grid
                templateColumns={{
                    base: '1fr', // Мобильные устройства - одна колонка
                    md: 'repeat(2, 1fr)', // Планшеты и средние экраны - две колонки
                    lg: 'repeat(3, 1fr)', // Большие экраны - три колонки
                }}
                gap={{ base: 4, md: 6 }} // Отступы между элементами
            >
                {selectedCategory.items.map((item, index) => (
                    <Link
                        key={index}
                        to={`/category/${encodeURIComponent(selectedCategory.name)}/${encodeURIComponent(item.name)}`}
                        p={4}
                        borderWidth='1px'
                        borderRadius='md'
                        bg='white'
                        boxShadow='sm'
                        _hover={{ textDecoration: 'none', bg: 'gray.100' }}
                        textAlign='center'
                    >
                        <Text fontWeight='bold'>{item.name}</Text>
                    </Link>
                ))}
            </Grid>
        </Box>
    );
};
