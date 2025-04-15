// import { Box, Button, Flex, Grid, Heading, Icon } from '@chakra-ui/react';
// import { newRecipesBreakpoints } from '~/components/constant/breakpoints';
// import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';
// import { freshRecipes } from '~/data/data';
// import ArrowRight from '../../../assets/BsArrowRight.svg';
// import { JuicyRecipeCard } from './JuicyRecipeCard';
// import { Link } from 'react-router-dom';

// const RightArrow = () => <img src={ArrowRight} width='16' height='16' alt='Home' />;

// export const JuicySection = () => {
//     const { isSmall, isMedium, isLarge, isXLarge } = useCustomBreakpoints(newRecipesBreakpoints);
//     const isDesktop = isLarge || isXLarge; // 1440px и выше
//     const isTablet = isMedium; // 768px
//     const isMobile = isSmall; // 360px

//     return (
//         <Box maxW='1920px' mx='auto' px={isMobile ? '16px' : 0}>
//             {/* Заголовок и кнопка для десктопа */}
//             {isDesktop && (
//                 <Flex justify='space-between' align='center' mb={6}>
//                     <Heading size='lg' data-test-id='juicy-section-title'>
//                         Самое сочное
//                     </Heading>
//                     <Link to='/juiciest' style={{ textDecoration: 'none' }}>
//                         <Button
//                             data-test-id='juiciest-link'
//                             bg='#B1FF2E'
//                             variant='ghost'
//                             colorScheme='blue'
//                         >
//                             Вся подборка
//                             <Icon as={RightArrow} marginLeft='8px' />
//                         </Button>
//                     </Link>
//                 </Flex>
//             )}

//             {/* Заголовок для мобильных и планшетов */}
//             {(isMobile || isTablet) && (
//                 <Heading size='lg' data-test-id='juicy-section-title' mb={6}>
//                     Самое сочное
//                 </Heading>
//             )}

//             {/* Карточки рецептов */}
//             <Box
//                 maxW={isMobile ? '328px' : isTablet ? '768px' : '100%'}
//                 mx='auto'
//                 mb={isMobile || isTablet ? 6 : 12}
//             >
//                 <Grid
//                     templateColumns={{
//                         base: '1fr',
//                         md: isTablet ? 'repeat(2, 1fr)' : '1fr',
//                         xl: isDesktop ? 'repeat(2, 1fr)' : '1fr'
//                     }}
//                     gap={isMobile ? '12px' : isTablet ? '12px' : '24px'}
//                 >
//                     {freshRecipes.slice(0, 4).map((recipe) => (
//                         <Box key={recipe.id}>
//                             <JuicyRecipeCard {...recipe} />
//                         </Box>
//                     ))}
//                 </Grid>
//             </Box>

//             {/* Кнопка для мобильных и планшетов (после карточек) */}
//             {(isMobile || isTablet) && (
//                 <Box data-test-id='juiciest-link-mobile' textAlign='center' mt={6} mb={12}>
//                     <Link to='/juiciest' style={{ textDecoration: 'none' }}>
//                         <Button bg='#B1FF2E' variant='ghost' colorScheme='blue'>
//                             Вся подборка
//                             <Icon as={RightArrow} marginLeft='8px' />
//                         </Button>
//                     </Link>
//                 </Box>
//             )}
//         </Box>
//     );
// };

import { Box, Button, Flex, Grid, Heading, Icon, useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { freshRecipes } from '~/data/data';

import ArrowRight from '../../../assets/BsArrowRight.svg';
import { JuicyRecipeCard } from './JuicyRecipeCard';

const RightArrow = () => <img src={ArrowRight} width='16' height='16' alt='Home' />;

export const JuicySection = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 769px)');

    return (
        <Box maxW='1920px' mx='auto' px={[4, 4, 0]}>
            {/* Заголовок */}
            <Flex justify='space-between' align='center' mb={6}>
                <Heading size='lg'>Самое сочное</Heading>

                {/* Десктопная кнопка (видна только на ширине > 768px) */}
                <Link to='/juiciest' style={{ textDecoration: 'none' }}>
                    <Button
                        data-test-id='juiciest-link'
                        bg='#B1FF2E'
                        variant='ghost'
                        colorScheme='blue'
                        display={isLargerThan768 ? 'flex' : 'none'}
                    >
                        Вся подборка
                        <Icon as={RightArrow} marginLeft='8px' />
                    </Button>
                </Link>
            </Flex>

            {/* Карточки рецептов */}
            <Grid
                templateColumns={{
                    base: '1fr',
                    md: 'repeat(2, 1fr)',
                    xl: 'repeat(2, 1fr)',
                }}
                gap={{ base: 3, md: 6 }}
                mb={6}
                maxW={['328px', '768px', '100%']}
                mx='auto'
            >
                {freshRecipes.slice(0, 4).map((recipe) => (
                    <JuicyRecipeCard key={recipe.id} {...recipe} />
                ))}
            </Grid>

            {/* Мобильная кнопка (всегда в DOM, но видна только на ширине <= 768px) */}
            <Box
                data-test-id='juiciest-link-mobile'
                textAlign='center'
                mb={12}
                display={isLargerThan768 ? 'none' : 'block'}
            >
                <Link to='/juiciest' style={{ textDecoration: 'none' }}>
                    <Button bg='#B1FF2E' variant='ghost' colorScheme='blue'>
                        Вся подборка
                        <Icon as={RightArrow} marginLeft='8px' />
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};
