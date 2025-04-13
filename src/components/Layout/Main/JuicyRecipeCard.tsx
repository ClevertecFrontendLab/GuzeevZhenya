import { Avatar, Box, Button, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

import { newRecipesBreakpoints } from '~/components/constant/breakpoints';
import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';

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
}

export const JuicyRecipeCard = ({
    image,
    title,
    description,
    category,
    likes = 0,
    addedToFavorites = 0,
    review,
}: JuicyRecipeCardProps) => {
    const { isSmall, isMedium } = useCustomBreakpoints(newRecipesBreakpoints);

    // Styles for different breakpoints
    const getStyles = () => {
        if (isSmall) {
            return {
                cardWidth: '100%',
                maxWidth: '328px',
                imageWidth: '158px',
                cardHeight: '128px',
                gap: '12px',
                padding: '8px',
                titleFontSize: '14px',
                descriptionFontSize: '12px',
                categoryFontSize: '10px',
                buttonHeight: '24px',
                buttonWidth: '80px',
                showDescription: false,
                gridTemplate: '158px 1fr',
                showCategory: false,
                reviewStyles: {
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    bg: 'rgba(255, 255, 255, 0.9)',
                    p: '4px',
                    borderRadius: 'md',
                    maxWidth: '90%',
                    avatarSize: 'xs',
                    textSize: '10px',
                    nameSize: '10px',
                },
            };
        }
        if (isMedium) {
            return {
                cardWidth: '356px',
                imageWidth: '158px',
                cardHeight: '128px',
                gap: '12px',
                padding: '8px',
                titleFontSize: '14px',
                categoryFontSize: '10px',
                buttonHeight: '24px',
                buttonWidth: '80px',
                showDescription: false,
                gridTemplate: '158px 1fr',
                showCategory: false,
                reviewStyles: {
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    bg: 'rgba(255, 255, 255, 0.9)',
                    p: '6px',
                    borderRadius: 'md',
                    maxWidth: '85%',
                    avatarSize: 'sm',
                    textSize: '12px',
                    nameSize: '12px',
                },
            };
        }
        // Default (large screens)
        return {
            cardWidth: '100%',
            imageWidth: '346px',
            cardHeight: '244px',
            gap: '24px',
            padding: '24px 24px 24px 0',
            titleFontSize: '20px',
            descriptionFontSize: '14px',
            categoryFontSize: '14px',
            buttonHeight: '32px',
            buttonWidth: '122px',
            showDescription: true,
            gridTemplate: '346px 1fr',
            showCategory: true,
            reviewStyles: {
                position: 'absolute',
                bottom: '20px',
                left: '24px',
                bg: 'rgba(255, 255, 255, 0.9)',
                p: '8px',
                borderRadius: 'md',
                maxWidth: '80%',
                avatarSize: 'md',
                textSize: '14px',
                nameSize: '14px',
            },
        };
    };

    const styles = getStyles();

    return (
        <Grid
            templateColumns={styles.gridTemplate}
            gap={styles.gap}
            width={styles.cardWidth}
            maxWidth={isSmall ? styles.maxWidth : undefined}
            height={styles.cardHeight}
            bg='white'
            borderRadius='lg'
            overflow='hidden'
            boxShadow='md'
        >
            {/* Image block with review */}
            <GridItem position='relative' width={styles.imageWidth} height={styles.cardHeight}>
                <Image
                    src={image}
                    alt={title}
                    width='100%'
                    height='100%'
                    objectFit='cover'
                    display='block'
                />

                {/* Review overlay */}
                {review && !isSmall && !isMedium && (
                    <Flex align='center' {...styles.reviewStyles}>
                        <Avatar
                            size={styles.reviewStyles?.avatarSize}
                            src={review.avatar}
                            name={review.name}
                            mr={2}
                        />
                        <Box>
                            <Text
                                fontSize={styles.reviewStyles?.nameSize}
                                fontWeight='500'
                                mb='2px'
                            >
                                {review.name}
                            </Text>
                            <Text fontSize={styles.reviewStyles?.textSize} noOfLines={1}>
                                {review.text}
                            </Text>
                        </Box>
                    </Flex>
                )}
            </GridItem>

            {/* Content block */}
            <GridItem p={styles.padding} overflow='hidden'>
                <Box height='100%' display='flex' flexDirection='column'>
                    {/* 1. Категория и лайки (на одном уровне) */}
                    <Flex justify='space-between' align='center' mb={isSmall || isMedium ? 2 : 4}>
                        {/* Категория (только на больших экранах) */}
                        {styles.showCategory && (
                            <Box bg='yellow.100' px={4} py={0.5} borderRadius='md'>
                                <Text fontSize={styles.categoryFontSize} fontWeight='400'>
                                    {category}
                                </Text>
                            </Box>
                        )}

                        {/* Лайки (всегда) */}
                        <Flex align='center' gap={3}>
                            <Text fontSize={styles.categoryFontSize}>❤️ {likes}</Text>
                            <Text fontSize={styles.categoryFontSize}>⭐ {addedToFavorites}</Text>
                        </Flex>
                    </Flex>

                    {/* 2. Заголовок */}
                    <Heading
                        fontSize={styles.titleFontSize}
                        fontWeight={500}
                        mb={isSmall || isMedium ? 2 : 4}
                        lineHeight='tight'
                        noOfLines={isSmall || isMedium ? 1 : 2}
                    >
                        {title}
                    </Heading>

                    {/* 3. Описание (только на больших экранах) */}
                    {styles.showDescription && (
                        <Text
                            fontSize={styles.descriptionFontSize}
                            fontWeight={400}
                            color='gray.600'
                            mb={4}
                            noOfLines={2}
                        >
                            {description}
                        </Text>
                    )}

                    {/* 4. Кнопки */}
                    <Flex
                        gap={{ base: '4px', md: '8px' }}
                        justifyContent={{ base: 'space-between', md: 'flex-end' }}
                        mt='auto'
                    >
                        <Button
                            variant='outline'
                            size={isSmall || isMedium ? 'xs' : 'sm'}
                            height={styles.buttonHeight}
                            width={isSmall || isMedium ? '24px' : '122px'}
                            p={isSmall || isMedium ? 0 : undefined}
                        >
                            {isSmall || isMedium ? '❤️' : '❤️ Сохранить'}
                        </Button>
                        <Button
                            bg='black'
                            color='white'
                            size={isSmall || isMedium ? 'xs' : 'sm'}
                            height={styles.buttonHeight}
                            width={styles.buttonWidth}
                        >
                            Готовить
                        </Button>
                    </Flex>
                </Box>
            </GridItem>
        </Grid>
    );
};
