import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';

interface RecipeCardProps {
    image: string;
    title: string;
    description: string;
    category: string;
    isFavorite: boolean;
    cardWidth: string;
    cardHeight: string;
    imageWidth: string;
    imageHeight: string;
}

export const RecipeCard = ({
    image,
    title,
    description,
    category,
    isFavorite,
    cardWidth = '277px',
    cardHeight = '230px',
    imageWidth = '277px', // Ширина изображения
    imageHeight = '230px', // Высота изображения
}: RecipeCardProps) => (
    <Box
        width={cardWidth}
        height={cardHeight}
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        boxShadow='md'
        display='flex'
        flexDirection='column'
    >
        <Image src={image} alt={title} width={imageWidth} height={imageHeight} objectFit='cover' />

        <Box
            px={3}
            py={3}
            flex={1}
            display='flex'
            flexDirection='column'
            height={`calc(${cardHeight} - ${imageHeight})`}
        >
            <Heading size='sm' mb={2} noOfLines={1} fontSize='14px' lineHeight='140%' color='#000'>
                {title}
            </Heading>

            <Text mb={3} noOfLines={2} fontSize='12px' lineHeight='143%' color='gray.600'>
                {description}
            </Text>

            <Box mt='auto'>
                <Flex justify='space-between' align='center'>
                    <Box bg='#E2F7D0' px={2} py={0.5} borderRadius='4px'>
                        <Text fontSize='11px' lineHeight='143%' color='#000'>
                            {category}
                        </Text>
                    </Box>
                    <IconButton
                        aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
                        variant='ghost'
                        size='xs'
                    />
                </Flex>
            </Box>
        </Box>
    </Box>
);
