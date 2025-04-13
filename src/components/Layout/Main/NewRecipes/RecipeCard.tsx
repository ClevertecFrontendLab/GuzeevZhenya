import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { newRecipesBreakpoints } from '~/components/constant/breakpoints';
import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';

interface RecipeCardProps {
    image: string;
    title: string;
    description: string;
    category: string;
    isFavorite: boolean;
    imageWidth?: string | number;
    imageHeight?: string | number;
    review?: {
        avatar: string;
        name: string;
        text: string;
    };
    likes: number;
    addedToFavorites: number;
}

export const RecipeCard = ({
    image,
    title,
    description,
    category,
    review,
    likes,
    addedToFavorites,
    imageWidth = '100%',
    imageHeight = '200px',
}: RecipeCardProps) => {
    const { isSmall, isMedium, isLarge, isXLarge } = useCustomBreakpoints(newRecipesBreakpoints);

    const getStyles = () => {
        if (isXLarge) {
            return {
                cardPadding: { p: '24px', pt: '16px', pb: '20px' },
                titleStyles: { fontSize: '20px', fontWeight: 500 },
                textStyles: { fontSize: '14px', fontWeight: 400, display: 'block' },
                categoryStyles: { fontSize: '14px', fontWeight: 400 },
                categoryPosition: 'bottom',
                statsStyles: { fontSize: '14px' },
                reviewStyles: {
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    bg: 'rgba(255, 255, 255, 0.9)',
                    p: 2,
                    borderRadius: 'md',
                    maxWidth: '80%',
                },
            };
        }

        if (isLarge) {
            return {
                cardPadding: { p: '12px' },
                titleStyles: { fontSize: '18px', fontWeight: 500 },
                textStyles: { fontSize: '14px', fontWeight: 400, display: 'block' },
                categoryStyles: { fontSize: '14px', fontWeight: 400 },
                categoryPosition: 'bottom',
                statsStyles: { fontSize: '14px' },
                reviewStyles: {
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    bg: 'rgba(255, 255, 255, 0.9)',
                    p: 2,
                    borderRadius: 'md',
                    maxWidth: '80%',
                },
            };
        }

        if (isMedium) {
            return {
                cardPadding: { p: '8px', pt: '8px', pb: '4px' },
                titleStyles: { fontSize: '16px', fontWeight: 500 },
                textStyles: { display: 'none' },
                categoryStyles: { fontSize: '12px', fontWeight: 400 },
                categoryPosition: 'top',
                statsStyles: { fontSize: '12px' },
                reviewStyles: {
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    bg: 'rgba(255, 255, 255, 0.9)',
                    p: 1,
                    borderRadius: 'md',
                    maxWidth: '80%',
                },
            };
        }

        return {
            cardPadding: { p: '8px', pt: '8px', pb: '4px' },
            titleStyles: { fontSize: '14px', fontWeight: 500 },
            textStyles: { display: 'none' },
            categoryStyles: { fontSize: '10px', fontWeight: 400 },
            categoryPosition: 'top',
            statsStyles: { fontSize: '10px' },
            reviewStyles: {
                position: 'absolute',
                bottom: '6px',
                left: '6px',
                bg: 'rgba(255, 255, 255, 0.9)',
                p: 1,
                borderRadius: 'md',
                maxWidth: '80%',
            },
        };
    };

    const styles = getStyles();

    return (
        <Box
            width={isSmall ? '158px' : '100%'}
            height={isSmall ? '220px' : 'auto'}
            maxWidth={imageWidth}
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            boxShadow='md'
            display='flex'
            flexDirection='column'
            bg='white'
            flexShrink={0}
            mx={0}
            mb={isSmall ? '16px' : undefined}
        >
            <Box
                width='100%'
                height={isSmall ? '128px' : imageHeight}
                position='relative'
                overflow='hidden'
            >
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

                {styles.categoryPosition === 'top' && (
                    <Box
                        position='absolute'
                        bottom={review ? '40px' : '8px'}
                        left='8px'
                        bg='#E2F7D0'
                        px={2}
                        py={1}
                        borderRadius='md'
                    >
                        <Text {...styles.categoryStyles}>{category}</Text>
                    </Box>
                )}
            </Box>

            <Box {...styles.cardPadding} flex={1} display='flex' flexDirection='column'>
                <Heading mb='4px' noOfLines={2} {...styles.titleStyles}>
                    {title.length > 24 ? title.slice(0, 24) : title}
                </Heading>

                {styles.textStyles.display === 'block' && (
                    <Text color='gray.600' noOfLines={2} lineHeight='1.4' mb={6}>
                        {description}
                    </Text>
                )}

                {styles.categoryPosition === 'bottom' ? (
                    <Flex justify='space-between' mt='auto' align='center'>
                        <Box bg='yellow.100' borderRadius='md'>
                            <Text px={3} py={1} {...styles.categoryStyles}>
                                {category}
                            </Text>
                        </Box>
                        <Flex align='center' gap={3}>
                            <Text fontSize={styles.statsStyles.fontSize}>❤️ {likes}</Text>
                            <Text fontSize={styles.statsStyles.fontSize}>
                                ⭐ {addedToFavorites}
                            </Text>
                        </Flex>
                    </Flex>
                ) : (
                    <Flex justify='flex-start' mt='auto'>
                        <Flex align='center' gap={3}>
                            <Text fontSize={styles.statsStyles.fontSize}>❤️ {likes}</Text>
                            <Text fontSize={styles.statsStyles.fontSize}>
                                ⭐ {addedToFavorites}
                            </Text>
                        </Flex>
                    </Flex>
                )}
            </Box>
        </Box>
    );
};
