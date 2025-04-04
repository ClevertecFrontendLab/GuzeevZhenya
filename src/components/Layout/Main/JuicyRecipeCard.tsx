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
    cardWidth?: string;
    cardHeight?: string;
}

export const JuicyRecipeCard = ({
    image,
    title,
    description,
    category,
    likes,
    addedToFavorites,
    review,
    cardWidth = '346px',
    cardHeight = '244px',
}: JuicyRecipeCardProps) => (
    <Grid templateColumns='repeat(2, 1fr)' gap={0} mb={6}>
        <GridItem position='relative'>
            <Image
                src={image}
                alt={title}
                h={cardHeight}
                w={cardWidth}
                objectFit='cover'
                sx={{
                    '@media (max-width: 767px)': {
                        h: '128px',
                        w: '158px',
                    },
                }}
            />

            {review && (
                <Box
                    position='absolute'
                    bottom={{ base: '10px', md: '20px' }}
                    left={{ base: '12px', md: '24px' }}
                    maxW={{ base: '140px', md: '250px' }}
                    bg='green.300'
                    p={1}
                    borderRadius='md'
                >
                    <Flex align='center'>
                        <Avatar src={review.avatar} name={review.name} size='xs' mr={2} />
                        <Box>
                            <Text
                                as='span'
                                fontSize={{ base: '12px', md: '14px' }}
                                color='#000'
                                mr={2}
                            >
                                {review.name}:
                            </Text>
                            <Text as='span' fontSize={{ base: '12px', md: '14px' }} color='#000'>
                                {review.text}
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            )}
        </GridItem>

        <GridItem>
            <Box
                display='flex'
                flexDirection='column'
                height='100%'
                pl={{ base: 3, md: 5 }}
                pr={{ base: 3, md: 6 }}
            >
                <Flex justify='space-between' mb={2}>
                    <Box as='span' bg='#ffff00' px={2} py={0.5} borderRadius='4px'>
                        <Text fontSize='sm' color='gray.500'>
                            {category}
                        </Text>
                    </Box>
                    <Flex align='center' gap={2}>
                        <Text fontSize='sm'>{likes} ❤️</Text>
                        <Text fontSize='sm'>{addedToFavorites} ⭐</Text>
                    </Flex>
                </Flex>

                <Box mb={4}>
                    <Heading size='md' mb={2} fontSize={{ base: 'md', md: 'lg' }}>
                        {title}
                    </Heading>
                    <Text fontSize={{ base: 'sm', md: 'md' }}>{description}</Text>
                </Box>

                <Flex
                    gap={3}
                    mt='auto'
                    justifyContent='flex-end'
                    flexDirection={{ base: 'column', md: 'row' }}
                >
                    <Button colorScheme='blue' size={{ base: 'sm', md: 'md' }}>
                        Готовить
                    </Button>
                    <Button variant='outline' size={{ base: 'sm', md: 'md' }}>
                        Сохранить
                    </Button>
                </Flex>
            </Box>
        </GridItem>
    </Grid>
);
