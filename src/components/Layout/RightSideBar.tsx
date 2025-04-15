import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react';

import AddRecipeIcon from '../../assets/addRecipe.svg';
import HeartIcon from '../../assets/BsBookmarkHeart.svg';
import BookMarkIcon from '../../assets/BsEmojiHeartEyes.svg';
import PeopleIcon from '../../assets/BsPeopleFill.svg';

const BookMark = () => <img src={BookMarkIcon} width='16' height='16' alt='Home' />;
const Heart = () => <img src={HeartIcon} width='16' height='16' alt='Home' />;

const People = () => <img src={PeopleIcon} width='16' height='16' alt='Home' />;
const AddRecipe = () => <img src={AddRecipeIcon} width='48' height='12' alt='Home' />;

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
                        as={BookMark}
                        w={5}
                        h={5}
                        color='yellow.500'
                        mr={1}
                        filter='drop-shadow(0 0 2px rgba(255, 255, 0, 0.7))'
                    />
                    <Text ml={2} fontSize='16px' color='#2DB100'>
                        24
                    </Text>
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
                        as={Heart}
                        w={4}
                        h={4}
                        color='red.500'
                        mr={1}
                        filter='drop-shadow(0 0 2px rgba(255, 0, 0, 0.7))'
                    />
                    <Text ml={2} fontSize='16px' color='#2DB100'>
                        42
                    </Text>
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
                        as={People}
                        w={4}
                        h={4}
                        color='blue.500'
                        mr={1}
                        filter='drop-shadow(0 0 2px rgba(0, 0, 255, 0.7))'
                    />
                    <Text ml={2} fontSize='16px' color='#2DB100'>
                        12
                    </Text>
                </Flex>
            </Flex>
        </Box>

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
                        as={AddRecipe}
                        w={6}
                        h={6}
                        color='green.500'
                        filter='drop-shadow(0 0 4px rgba(0, 255, 0, 0.7)) drop-shadow(0 0 8px rgba(255, 0, 255, 0.5))'
                    />
                </Center>
                <Text fontSize='12px' color='#000000A3' fontWeight='medium' mb={4}>
                    Записать рецепт
                </Text>
            </Flex>
        </Box>
    </Box>
);
