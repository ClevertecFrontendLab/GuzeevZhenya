import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Collapse, Flex, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router';

import { Footer } from './Footer';

// Массив с путями к иконкам
const icons = [
    { id: '1', src: '/sidebarIcon/1.svg' }, // Полный путь к иконкам в папке public
    { id: '2', src: '/sidebarIcon/2.svg' },
    { id: '3', src: '/sidebarIcon/3.svg' },
    { id: '4', src: '/sidebarIcon/4.svg' },
    { id: '5', src: '/sidebarIcon/5.svg' },
    { id: '6', src: '/sidebarIcon/6.svg' },
    { id: '7', src: '/sidebarIcon/7.svg' },
    { id: '8', src: '/sidebarIcon/8.svg' },
    { id: '9', src: '/sidebarIcon/9.svg' },
    { id: '10', src: '/sidebarIcon/10.svg' },
    { id: '11', src: '/sidebarIcon/11.svg' },
    { id: '12', src: '/sidebarIcon/12.svg' },
    { id: '13', src: '/sidebarIcon/13.svg' },
];

const getCategories = () => [
    { id: 1, name: 'Салаты', items: ['Омлет', 'Блинчики', 'Каша'], icon: icons[0] },
    { id: 2, name: 'Закуски', items: ['Суп', 'Гарнир', 'Мясо'], icon: icons[1] },
    { id: 3, name: 'Первые блюда', items: ['Салат', 'Рыба', 'Десерт'], icon: icons[2] },
    { id: 4, name: 'Первые блюда', items: ['Салат', 'Рыба', 'Десерт'], icon: icons[3] },
    { id: 5, name: 'Десерты, выпечка', items: ['Омлет', 'Блинчики', 'Каша'], icon: icons[4] },
    { id: 6, name: 'Блюда на гриле', items: ['Омлет', 'Блинчики', 'Каша'], icon: icons[5] },
    { id: 7, name: 'Веганская кухня', items: ['Омлет', 'Блинчики', 'Каша'], icon: icons[6] },
    { id: 8, name: 'Детские блюда', items: ['Омлет', 'Блинчики', 'Каша'], icon: icons[7] },
    { id: 9, name: 'Лечебное питание', items: ['Омлет', 'Блинчики', 'Каша'], icon: icons[8] },
    { id: 10, name: 'Национальные', items: ['Омлет', 'Блинчики', 'Каша'], icon: icons[9] },
    { id: 11, name: 'Соусы', items: ['Омлет', 'Блинчики', 'Каша'], icon: icons[10] },
    { id: 12, name: 'Напитки', items: ['Омлет', 'Блинчики', 'Каша'], icon: icons[11] },
    { id: 13, name: 'Заготовки', items: ['Омлет', 'Блинчики', 'Каша'], icon: icons[12] },
];

export const Sidebar = () => {
    const [expandedCategories, setExpandedCategories] = useState<Record<number, boolean>>({});
    const categories = getCategories();

    const toggleCategory = (categoryId: number) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }));
    };

    return (
        <Flex direction='column' w='256px' bg='white' p={4} boxShadow='md'>
            <Box flex={1} overflowY='auto' minH='0'>
                {' '}
                {/* Добавляем minH="0" */}
                {categories.map((category) => (
                    <Box key={category.id} mb={4}>
                        <Flex
                            justifyContent='space-between'
                            alignItems='center'
                            cursor='pointer'
                            onClick={() => toggleCategory(category.id)}
                            p={2}
                            _hover={{ bg: 'gray.100' }}
                        >
                            <Flex alignItems='center'>
                                <Image
                                    src={category.icon.src} // Правильный путь к иконке
                                    alt={category.name}
                                    boxSize='20px' // Устанавливаем размер иконки
                                    mr={2}
                                />
                                <Text
                                    fontWeight={500}
                                    fontSize='16px'
                                    lineHeight='150%'
                                    color='#000'
                                >
                                    {category.name}
                                </Text>
                            </Flex>
                            <Icon
                                as={
                                    expandedCategories[category.id]
                                        ? ChevronUpIcon
                                        : ChevronDownIcon
                                }
                            />
                        </Flex>

                        <Collapse in={expandedCategories[category.id]}>
                            <VStack align='start' pl={4} mt={2}>
                                {category.items.map((item, index) => (
                                    <Link key={index} p={1} _hover={{ color: 'blue.500' }}>
                                        {item}
                                    </Link>
                                ))}
                            </VStack>
                        </Collapse>
                    </Box>
                ))}
            </Box>
            <Footer />
        </Flex>
    );
};
