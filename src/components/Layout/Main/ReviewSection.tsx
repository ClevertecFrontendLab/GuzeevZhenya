import { Avatar, Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

export const ReviewsSection = () => {
    // Данные отзывов
    const reviews = [
        {
            id: 1,
            avatar: 'https://bit.ly/dan-abramov',
            name: 'Анна К.',
            email: 'anna@example.com',
            text: 'Очень вкусные и понятные рецепты! Всегда получается с первого раза.',
        },
        {
            id: 2,
            avatar: 'https://bit.ly/kent-c-dodds',
            name: 'Сергей М.',
            email: 'sergey@example.com',
            text: 'Люблю готовить по вашим рецептам. Особенно нравятся десерты!',
        },
        {
            id: 3,
            avatar: 'https://bit.ly/ryan-florence',
            name: 'Ольга В.',
            email: 'olga@example.com',
            text: 'Спасибо за интересные сочетания ингредиентов. Никогда не думала, что можно так вкусно приготовить из простых продуктов.',
        },
    ];

    return (
        <Box
            maxW='1920px'
            mx='auto'
            p={6} // 24px со всех сторон
            bg='green.300' // Лаймовый фон
            borderRadius='lg'
        >
            {/* Заголовок слева */}
            <Heading
                as='h2'
                size='xl'
                mb={8}
                textAlign='left'
                fontFamily='var(--font-family)'
                fontWeight={500}
                fontSize='32px'
                lineHeight='125%'
                color='#000'
            >
                Кулинарные рецепты
            </Heading>

            {/* Карточки отзывов */}
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                {reviews.map((review) => (
                    <Box
                        key={review.id}
                        p={6}
                        borderWidth='1px'
                        borderRadius='lg'
                        maxW='426px'
                        minH='184px'
                        display='flex'
                        flexDirection='column'
                        bg='white' // Белый фон карточки
                    >
                        <Flex align='center' mb={4} height='48px'>
                            {' '}
                            {/* Фиксированная высота для аватара и текста */}
                            <Avatar name={review.name} src={review.avatar} mr={4} size='md' />
                            <Box>
                                <Text
                                    fontWeight={500}
                                    fontSize='18px'
                                    lineHeight='156%'
                                    color='#000'
                                >
                                    {review.name}
                                </Text>
                                <Text
                                    fontFamily='var(--font-family)'
                                    fontWeight={400}
                                    fontSize='14px'
                                    lineHeight='143%'
                                    color='rgba(0, 0, 0, 0.64)'
                                >
                                    {review.email}
                                </Text>
                            </Box>
                        </Flex>
                        <Text
                            mt={3}
                            fontFamily='var(--font-family)'
                            fontWeight={400}
                            fontSize='14px'
                            lineHeight='143%'
                            color='#000'
                            flex={1}
                        >
                            {review.text}
                        </Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};
