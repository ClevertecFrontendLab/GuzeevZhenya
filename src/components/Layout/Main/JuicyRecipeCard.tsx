import { Avatar, Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

interface JuicyRecipeCardProps {
    image: string;
    title: string;
    description: string;
    category: string;
    likes: number;
    addedToFavorites: number;
    review?: {
        avatar: string;
        name: string;
        text: string;
    };
    cardWidth?: string | number;
    imageHeight?:
        | string
        | number
        | { base: string | number; md?: string | number; lg?: string | number };
}

export const JuicyRecipeCard = ({
    image,
    title,
    description,
    category,
    likes = 0,
    addedToFavorites = 0,
    review,
    cardWidth = '100%',
    imageHeight = '244px',
}: JuicyRecipeCardProps) => (
    <Grid
        templateColumns={{ base: '1fr', md: '346px 1fr' }}
        gap={{ base: 0, md: 6 }}
        width={cardWidth}
        bg='white'
        borderRadius='lg'
        overflow='hidden'
        boxShadow='md'
    >
        {/* Блок с изображением */}
        <GridItem position='relative'>
            <Image
                src={image}
                alt={title}
                width='100%'
                height={imageHeight}
                objectFit='cover'
                display='block'
            />

            {review && (
                <Box
                    position='absolute'
                    bottom='20px'
                    left='24px'
                    maxW='250px'
                    bg='green.300'
                    p={2}
                    borderRadius='md'
                >
                    <Flex align='center'>
                        <Avatar src={review.avatar} name={review.name} size='xs' mr={2} />
                        <Box>
                            <Text as='span' fontSize='sm' fontWeight='medium' mr={2}>
                                {review.name}:
                            </Text>
                            <Text as='span' fontSize='sm'>
                                {review.text}
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            )}
        </GridItem>

        {/* Блок с контентом */}
        <GridItem py={5} pr={6} pl={{ base: 4, md: 0 }}>
            <Box height='100%' display='flex' flexDirection='column'>
                {/* Верхняя строка с категорией и лайками */}
                <Flex justify='space-between' mb={4}>
                    <Box bg='yellow.100' px={3} py={1} borderRadius='md' alignSelf='flex-start'>
                        <Text fontSize='sm' fontWeight='medium'>
                            {category}
                        </Text>
                    </Box>
                    <Flex align='center' gap={3}>
                        <Text fontSize='sm' display='flex' alignItems='center'>
                            <Box as='span' mr={1}>
                                ❤️
                            </Box>{' '}
                            {likes}
                        </Text>
                        <Text fontSize='sm' display='flex' alignItems='center'>
                            <Box as='span' mr={1}>
                                ⭐
                            </Box>{' '}
                            {addedToFavorites}
                        </Text>
                    </Flex>
                </Flex>

                {/* Основной контент */}
                <Box mb={6}>
                    <Heading size='lg' mb={3} lineHeight='tight'>
                        {title}
                    </Heading>
                    <Text fontSize='md' color='gray.600'>
                        {description}
                    </Text>
                </Box>

                {/* Кнопки внизу */}
                <Flex
                    gap={4}
                    mt='auto'
                    justifyContent='flex-end'
                    flexDirection={{ base: 'column', sm: 'row' }}
                >
                    <Button colorScheme='blue' size='md' width={{ base: '100%', sm: 'auto' }}>
                        Готовить
                    </Button>
                    <Button variant='outline' size='md' width={{ base: '100%', sm: 'auto' }}>
                        Сохранить
                    </Button>
                </Flex>
            </Box>
        </GridItem>
    </Grid>
);
