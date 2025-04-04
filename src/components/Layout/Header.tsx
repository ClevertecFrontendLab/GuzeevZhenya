import { Avatar, Flex, Image, Text } from '@chakra-ui/react';

import logo from '../../../public/logo.svg';

export const Header = () => (
    <Flex
        as='header'
        w='100%'
        h='80px' // Высота заголовка
        bg='white'
        p={0} // Убираем отступы, чтобы управлять ими вручную
        boxShadow='sm'
        justifyContent='space-between'
        alignItems='center' // Центрируем элементы по высоте
    >
        <Flex alignItems='center' pl={4}>
            {' '}
            {/* Отступ слева для выравнивания */}
            <Image src={logo} alt='Logo' h='40px' />
            <Text
                fontWeight={400}
                fontSize='16px'
                lineHeight='150%'
                textAlign='center'
                color='#000'
                ml={32}
            >
                Главная
            </Text>{' '}
            {/* Отступ между логотипом и текстом */}
        </Flex>

        <Flex alignItems='center' pr={4}>
            {' '}
            {/* Отступ справа */}
            <Avatar name='User Name' src='/avatar.jpg' size='sm' />
            <Flex direction='column' ml={2}>
                <Text fontSize='sm' fontWeight='bold'>
                    Имя пользователя
                </Text>
                <Text fontSize='xs' color='gray.500'>
                    user@example.com
                </Text>
            </Flex>
        </Flex>
    </Flex>
);
