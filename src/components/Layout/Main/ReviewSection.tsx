import { Avatar, Box, Button, Flex, Heading, Icon, SimpleGrid, Text } from '@chakra-ui/react';

import { BreakpointsConfig, useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';
import { userReviews } from '~/data/data';

import ArrowRight from '../../../assets/BsArrowRight.svg';

const RightArrow = () => <img src={ArrowRight} width='16' height='16' alt='Home' />;

export const reviewsBreakpoints: BreakpointsConfig = {
    small: {
        cardWidth: '100%',
        imageHeight: 160,
        gap: 3,
        visibleCards: 1,
        maxWidth: '100%',
        containerPadding: 4,
    },
    medium: {
        cardWidth: '227px',
        imageHeight: 160,
        gap: 0,
        visibleCards: 3,
        maxWidth: '724px',
        containerPadding: 12,
    },
    large: {
        cardWidth: '267px',
        imageHeight: 160,
        gap: 4,
        visibleCards: 3,
        maxWidth: '880px',
        containerPadding: 24,
    },
    xlarge: {
        cardWidth: '427px',
        imageHeight: 184,
        gap: 4,
        visibleCards: 3,
        maxWidth: '1360px',
        containerPadding: 24,
    },
};

export const ReviewsSection = () => {
    const { currentBreakpoint, windowSize, isSmall, isMedium } =
        useCustomBreakpoints(reviewsBreakpoints);
    const isLargeScreen = windowSize >= 1024;

    const getTitleSize = () => {
        if (isSmall || isMedium) return '24px';
        return '36px';
    };

    return (
        <Box
            maxW={currentBreakpoint.maxWidth}
            mx='auto'
            px={{
                base: `${isSmall ? 12 : currentBreakpoint.containerPadding}px`,
                md: `${isMedium ? 12 : currentBreakpoint.containerPadding}px`,
            }}
            py={8}
            bg='green.300'
            borderRadius='lg'
            position='relative'
            mb={8}
        >
            <Flex
                justify='space-between'
                align='center'
                mb={3}
                px={isSmall || isMedium ? 0 : undefined}
            >
                <Heading
                    as='h2'
                    size='xl'
                    textAlign='left'
                    fontFamily='var(--font-family)'
                    fontWeight={500}
                    fontSize={getTitleSize()}
                    lineHeight='125%'
                    color='#000'
                >
                    Кулинарные блоги
                </Heading>

                {isLargeScreen && (
                    <Flex justify='center' mb={12}>
                        <Button bg='#B1FF2E' variant='ghost' colorScheme='blue'>
                            Все авторы
                            <Icon as={RightArrow} marginLeft='8px' position='relative' top='10px' />
                        </Button>
                    </Flex>
                )}
            </Flex>

            <SimpleGrid
                columns={{
                    base: 1,
                    md: currentBreakpoint.visibleCards,
                }}
                spacing={currentBreakpoint.gap}
                mb={4}
                justifyItems='center'
            >
                {userReviews.slice(0, 3).map((review) => (
                    <Box
                        key={review.id}
                        p={isSmall || isMedium ? 3 : 4}
                        borderWidth='1px'
                        borderRadius='lg'
                        width={currentBreakpoint.cardWidth}
                        minH={currentBreakpoint.cardWidth === '427px' ? '184px' : '160px'}
                        display='flex'
                        flexDirection='column'
                        bg='white'
                    >
                        <Flex align='center' mb={4} height='48px'>
                            <Avatar name={review.name} src={review.avatar} mr={4} size='md' />
                            <Box>
                                <Text
                                    fontWeight={500}
                                    fontSize='18px'
                                    lineHeight='156%'
                                    color='#000'
                                    noOfLines={1}
                                >
                                    {review.name}
                                </Text>
                                <Text
                                    fontFamily='var(--font-family)'
                                    fontWeight={400}
                                    fontSize='14px'
                                    lineHeight='143%'
                                    color='rgba(0, 0, 0, 0.64)'
                                    noOfLines={1}
                                >
                                    {review.email}
                                </Text>
                            </Box>
                        </Flex>
                        <Text
                            pt={3}
                            fontFamily='var(--font-family)'
                            fontWeight={400}
                            fontSize='14px'
                            lineHeight='143%'
                            color='#000'
                            flex={1}
                            noOfLines={4}
                        >
                            {review.text}
                        </Text>
                    </Box>
                ))}
            </SimpleGrid>

            {!isLargeScreen && (
                <Flex justify='center' mb={12}>
                    <Button bg='#B1FF2E' variant='ghost' colorScheme='blue'>
                        Все авторы
                        <Icon as={RightArrow} marginLeft='8px' marginTop='10px' />
                    </Button>
                </Flex>
            )}
        </Box>
    );
};
