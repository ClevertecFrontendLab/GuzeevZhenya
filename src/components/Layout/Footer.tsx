import { Button, Flex, Text } from '@chakra-ui/react';

export const Footer = () => (
    <Flex
        as='footer'
        w='full'
        bg='white'
        p={4}
        direction='column'
        alignItems='flex-start'
        borderTop='1px solid'
        borderColor='gray.200'
    >
        <Text fontWeight={500} fontSize='12px' color='rgba(0, 0, 0, 0.24)' mb={2}>
            Версия 1.0.0
        </Text>
        <Text fontSize='sm' textAlign='left' mb={4} color='gray.600'>
            © 2023 Все права защищены
        </Text>
        <Button size='sm' variant='outline' colorScheme='gray'>
            Выйти
        </Button>
    </Flex>
);
