import { Box, Text } from '@chakra-ui/react';

export const RightSidebar = () => (
    <Box mx={4}>
        {' '}
        {/* Устанавливаем боковые отступы */}
        <Text fontSize='xl' fontWeight='bold' mb={4}>
            Дополнительная информация
        </Text>
        {/* Здесь может быть ваш контент для правой панели */}
        <Box>
            <Text>Рекомендуемые рецепты</Text>
            <Text>Последние просмотренные</Text>
            <Text>Специальные предложения</Text>
        </Box>
    </Box>
);
