// import { SearchIcon } from '@chakra-ui/icons';
// import { Box, Button, Flex, Heading, Icon, Input, Select, Text } from '@chakra-ui/react';
// import { useState } from 'react';

// import { newRecipesBreakpoints } from '~/components/constant/breakpoints';
// import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';

// import { CategoryList } from './CategoryList';

// export const SearchSection = () => {
//     const [isExcluded, setIsExcluded] = useState(false);
//     const { isSmall, isMedium } = useCustomBreakpoints(newRecipesBreakpoints);
//     const containerWidth = '570px';

//     return (
//         <Box mb={6} textAlign='center'>
//             {/* Заголовок */}
//             <Heading
//                 fontFamily='var(--font-family)'
//                 fontWeight={700}
//                 fontSize={isSmall ? '36px' : '48px'}
//                 lineHeight='100%'
//                 color='#000'
//                 pt={4}
//                 pb={8}
//             >
//                 Приятного аппетита!
//             </Heading>

//             {/* Блок поиска */}
//             <Flex
//                 gap={2}
//                 justifyContent='center'
//                 w={isSmall ? '100%' : containerWidth}
//                 mx='auto'
//                 pb={4}
//                 px={isSmall ? 4 : 0}
//             >
//                 <Button
//                     variant='outline'
//                     w='48px'
//                     h='48px'
//                     p={0}
//                     minW='unset'
//                     borderColor='#134B00'
//                     borderWidth='1px'
//                     borderRadius='8px'
//                     flexShrink={0}
//                 >
//                     <svg
//                         width='24'
//                         height='24'
//                         viewBox='0 0 24 24'
//                         fill='none'
//                         xmlns='http://www.w3.org/2000/svg'
//                     >
//                         <path
//                             d='M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z'
//                             fill='#134B00'
//                         />
//                     </svg>
//                 </Button>

//                 <Input
//                     placeholder='Поиск рецептов...'
//                     flex={1}
//                     h='48px'
//                     p='13px 16px'
//                     fontFamily='var(--font-family)'
//                     fontWeight={400}
//                     fontSize='18px'
//                     color='#134B00'
//                     borderColor='#000000'
//                     borderWidth='1px'
//                     borderRadius='8px'
//                     _placeholder={{
//                         color: '#134B00',
//                         opacity: 0.5,
//                     }}
//                     focusBorderColor='#134B00'
//                     rightElement={
//                         <Box pr={3} color='#134B00'>
//                             <Icon as={SearchIcon} w={5} h={5} />
//                         </Box>
//                     }
//                 />
//             </Flex>

//             {/* Блок фильтров - скрыт на medium и small экранах */}
//             {!isMedium && !isSmall && (
//                 <Flex align='center' justify='center' gap={4} w={containerWidth} mx='auto' pb={8}>
//                     <Flex
//                         align='center'
//                         cursor='pointer'
//                         onClick={() => setIsExcluded(!isExcluded)}
//                         flex={1}
//                         gap='8px'
//                     >
//                         <Box
//                             as='span'
//                             position='relative'
//                             width='34px'
//                             height='20px'
//                             borderRadius='10px'
//                             bg={isExcluded ? 'blue.500' : 'blackAlpha.400'}
//                             transition='background 0.2s'
//                             flexShrink={0}
//                         >
//                             <Box
//                                 as='span'
//                                 position='absolute'
//                                 top='2px'
//                                 left={isExcluded ? 'calc(100% - 18px)' : '2px'}
//                                 width='16px'
//                                 height='16px'
//                                 borderRadius='full'
//                                 bg='white'
//                                 transition='left 0.2s'
//                             />
//                         </Box>
//                         <Text
//                             fontFamily='var(--font-family)'
//                             fontWeight={500}
//                             fontSize='16px'
//                             lineHeight='150%'
//                             color='#000'
//                             whiteSpace='nowrap'
//                         >
//                             Исключить мои аллергены
//                         </Text>
//                     </Flex>

//                     <Select
//                         placeholder='Выберите из списка...'
//                         flex={1}
//                         maxW='234px'
//                         fontFamily='var(--font-family)'
//                         fontWeight={400}
//                         fontSize='16px'
//                         lineHeight='150%'
//                         color='rgba(0, 0, 0, 0.64)'
//                         borderColor='#134B00'
//                         focusBorderColor='#134B00'
//                         _placeholder={{
//                             color: 'rgba(0, 0, 0, 0.64)',
//                         }}
//                     >
//                         <option value='salads'>Салаты</option>
//                         <option value='main'>Основные блюда</option>
//                         <option value='desserts'>Десерты</option>
//                     </Select>
//                 </Flex>
//             )}

//             <CategoryList />
//         </Box>
//     );
// };

import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Icon, Input, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { newRecipesBreakpoints } from '~/components/constant/breakpoints';
import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';

interface SearchSectionProps {
    categoryName?: string;
}

export const SearchSection = ({ categoryName }: SearchSectionProps) => {
    const [isExcluded, setIsExcluded] = useState(false);
    const { isSmall, isMedium } = useCustomBreakpoints(newRecipesBreakpoints);
    const containerWidth = '570px';

    return (
        <Box mb={6} textAlign='center'>
            {/* Заголовок */}
            <Heading
                fontFamily='var(--font-family)'
                fontWeight={700}
                fontSize={isSmall ? '36px' : '48px'}
                lineHeight='100%'
                color='#000'
                pt={4}
                pb={8}
            >
                {categoryName || 'Приятного аппетита!'}
            </Heading>

            <Flex
                gap={2}
                justifyContent='center'
                w={isSmall ? '100%' : containerWidth}
                mx='auto'
                pb={4}
                px={isSmall ? 4 : 0}
            >
                <Button
                    variant='outline'
                    w='48px'
                    h='48px'
                    p={0}
                    minW='unset'
                    borderColor='#134B00'
                    borderWidth='1px'
                    borderRadius='8px'
                    flexShrink={0}
                >
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z'
                            fill='#134B00'
                        />
                    </svg>
                </Button>

                <Input
                    placeholder='Поиск рецептов...'
                    flex={1}
                    h='48px'
                    p='13px 16px'
                    fontFamily='var(--font-family)'
                    fontWeight={400}
                    fontSize='18px'
                    color='#134B00'
                    borderColor='#000000'
                    borderWidth='1px'
                    borderRadius='8px'
                    _placeholder={{
                        color: '#134B00',
                        opacity: 0.5,
                    }}
                    focusBorderColor='#134B00'
                    rightElement={
                        <Box pr={3} color='#134B00'>
                            <Icon as={SearchIcon} w={5} h={5} />
                        </Box>
                    }
                />
            </Flex>

            {!isMedium && !isSmall && (
                <Flex align='center' justify='center' gap={4} w={containerWidth} mx='auto' pb={8}>
                    <Flex
                        align='center'
                        cursor='pointer'
                        onClick={() => setIsExcluded(!isExcluded)}
                        flex={1}
                        gap='8px'
                    >
                        <Box
                            as='span'
                            position='relative'
                            width='34px'
                            height='20px'
                            borderRadius='10px'
                            bg={isExcluded ? 'blue.500' : 'blackAlpha.400'}
                            transition='background 0.2s'
                            flexShrink={0}
                        >
                            <Box
                                as='span'
                                position='absolute'
                                top='2px'
                                left={isExcluded ? 'calc(100% - 18px)' : '2px'}
                                width='16px'
                                height='16px'
                                borderRadius='full'
                                bg='white'
                                transition='left 0.2s'
                            />
                        </Box>
                        <Text
                            fontFamily='var(--font-family)'
                            fontWeight={500}
                            fontSize='16px'
                            lineHeight='150%'
                            color='#000'
                            whiteSpace='nowrap'
                        >
                            Исключить мои аллергены
                        </Text>
                    </Flex>

                    <Select
                        placeholder='Выберите из списка...'
                        flex={1}
                        maxW='234px'
                        fontFamily='var(--font-family)'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight='150%'
                        color='rgba(0, 0, 0, 0.64)'
                        borderColor='#134B00'
                        focusBorderColor='#134B00'
                        _placeholder={{
                            color: 'rgba(0, 0, 0, 0.64)',
                        }}
                    >
                        <option value='salads'>Салаты</option>
                        <option value='main'>Основные блюда</option>
                        <option value='desserts'>Десерты</option>
                    </Select>
                </Flex>
            )}
        </Box>
    );
};
