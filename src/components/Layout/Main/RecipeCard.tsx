// src/components/RecipeCard.tsx
import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';

interface RecipeCardProps {
    image: string;
    title: string;
    description: string;
    category: string;
    isFavorite: boolean;
    imageWidth?: string | number;
    imageHeight?: string | number;
}

export const RecipeCard = ({
    image,
    title,
    description,
    category,
    isFavorite,
    imageWidth = '100%',
    imageHeight = '200px',
}: RecipeCardProps) => (
    <Box
        width='100%'
        maxWidth={imageWidth}
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        boxShadow='md'
        display='flex'
        flexDirection='column'
        bg='white'
    >
        <Box width='100%' height={imageHeight} position='relative' overflow='hidden'>
            <Image
                src={image}
                alt={title}
                width='100%'
                height='100%'
                objectFit='cover'
                position='absolute'
                top='0'
                left='0'
            />
        </Box>

        <Box px={4} py={3} flex={1} display='flex' flexDirection='column'>
            <Heading size='sm' mb={2} noOfLines={1} fontSize='md'>
                {title}
            </Heading>

            <Text mb={3} noOfLines={2} fontSize='sm' color='gray.600'>
                {description}
            </Text>

            <Box mt='auto'>
                <Flex justify='space-between' align='center'>
                    <Box bg='#E2F7D0' px={2} py={1} borderRadius='md'>
                        <Text fontSize='xs' fontWeight='medium'>
                            {category}
                        </Text>
                    </Box>
                    <IconButton
                        aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
                        // icon={isFavorite ? <StarFilledIcon /> : <StarIcon />}
                        variant='ghost'
                        size='sm'
                    />
                </Flex>
            </Box>
        </Box>
    </Box>
);
