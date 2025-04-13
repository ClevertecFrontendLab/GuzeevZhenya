// import { AddIcon, ChatIcon } from '@chakra-ui/icons';
// import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react';

// export const RightSidebar = () => (
//   <Box
//     mx={4}
//     display="flex"
//     flexDirection="column"
//     alignItems="center"
//     position="relative"
//   >
//     {/* Блоки с иконками (90x40) */}
//     <Flex direction="column" gap={2} alignItems="center">
//       <Flex
//         alignItems="center"
//         width="90px"
//         height="40px"
//         bg="inherit"
//         borderRadius="md"
//         p={2}
//         justifyContent="center"
//       >
//         <Icon
//           as={ChatIcon}
//           w={5}
//           h={5}
//           color="yellow.500"
//           mr={1}
//           filter="drop-shadow(0 0 2px rgba(255, 255, 0, 0.7))"
//         />
//         <Text fontSize="sm">24</Text>
//       </Flex>

//       <Flex
//         alignItems="center"
//         width="90px"
//         height="40px"
//         bg="inherit"
//         borderRadius="md"
//         p={2}
//         justifyContent="center"
//       >
//         <Icon
//           as={ChatIcon}
//           w={4}
//           h={4}
//           color="red.500"
//           mr={1}
//           filter="drop-shadow(0 0 2px rgba(255, 0, 0, 0.7))"
//         />
//         <Text fontSize="sm">42</Text>
//       </Flex>

//       <Flex
//         alignItems="center"
//         width="90px"
//         height="40px"
//         bg="inherit"
//         borderRadius="md"
//         p={2}
//         justifyContent="center"
//       >
//         <Icon
//           as={ChatIcon}
//           w={4}
//           h={4}
//           color="blue.500"
//           mr={1}
//           filter="drop-shadow(0 0 2px rgba(0, 0, 255, 0.7))"
//         />
//         <Text fontSize="sm">12</Text>
//       </Flex>
//     </Flex>

//     {/* Блок "Записать рецепт" (208x208) с отступом 632px сверху */}
//     <Box mt="632px">
//       <Flex
//         width="208px"
//         height="208px"
//         bg="inherit"
//         borderRadius="md"
//         direction="column"
//         alignItems="center"
//         justifyContent="center"
//         position="relative"
//       >
//         <Center flex={1}>
//           <Icon
//             as={AddIcon}
//             w={12}
//             h={12}
//             color="green.500"
//             filter="drop-shadow(0 0 4px rgba(0, 255, 0, 0.7)) drop-shadow(0 0 8px rgba(255, 0, 255, 0.5))"
//           />
//         </Center>
//         <Text fontSize="md" fontWeight="medium" mb={4}>
//           Записать рецепт
//         </Text>
//       </Flex>
//     </Box>
//   </Box>
// );

import { AddIcon, ChatIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react';

export const RightSidebar = () => (
    <Box mx={4} display='flex' flexDirection='column' position='relative' height='100vh'>
        {/* Фиксированные иконки (остаются на месте при скролле) */}
        <Box position='sticky' top={0} zIndex={1} bg='inherit' pt={2} pb={4}>
            <Flex direction='column' gap={2} alignItems='center'>
                <Flex
                    alignItems='center'
                    width='90px'
                    height='40px'
                    bg='inherit'
                    borderRadius='md'
                    p={2}
                    justifyContent='center'
                >
                    <Icon
                        as={ChatIcon}
                        w={5}
                        h={5}
                        color='yellow.500'
                        mr={1}
                        filter='drop-shadow(0 0 2px rgba(255, 255, 0, 0.7))'
                    />
                    <Text fontSize='sm'>24</Text>
                </Flex>

                <Flex
                    alignItems='center'
                    width='90px'
                    height='40px'
                    bg='inherit'
                    borderRadius='md'
                    p={2}
                    justifyContent='center'
                >
                    <Icon
                        as={ChatIcon}
                        w={4}
                        h={4}
                        color='red.500'
                        mr={1}
                        filter='drop-shadow(0 0 2px rgba(255, 0, 0, 0.7))'
                    />
                    <Text fontSize='sm'>42</Text>
                </Flex>

                <Flex
                    alignItems='center'
                    width='90px'
                    height='40px'
                    bg='inherit'
                    borderRadius='md'
                    p={2}
                    justifyContent='center'
                >
                    <Icon
                        as={ChatIcon}
                        w={4}
                        h={4}
                        color='blue.500'
                        mr={1}
                        filter='drop-shadow(0 0 2px rgba(0, 0, 255, 0.7))'
                    />
                    <Text fontSize='sm'>12</Text>
                </Flex>
            </Flex>
        </Box>

        {/* Прокручиваемая иконка "Записать" */}
        <Box mt='632px' position='relative'>
            <Flex
                width='208px'
                height='208px'
                bg='inherit'
                borderRadius='md'
                direction='column'
                alignItems='center'
                justifyContent='center'
            >
                <Center flex={1}>
                    <Icon
                        as={AddIcon}
                        w={12}
                        h={12}
                        color='green.500'
                        filter='drop-shadow(0 0 4px rgba(0, 255, 0, 0.7)) drop-shadow(0 0 8px rgba(255, 0, 255, 0.5))'
                    />
                </Center>
                <Text fontSize='md' fontWeight='medium' mb={4}>
                    Записать рецепт
                </Text>
            </Flex>
        </Box>
    </Box>
);
