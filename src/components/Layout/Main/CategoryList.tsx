import { Box, Flex, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { categories } from '~/data/data';

export const CategoryList = () => {
    const location = useLocation();
    const [currentCategoryId, currentSubcategory] = location.pathname.split('/').slice(2);

    const isCategoryPage = location.pathname.startsWith('/category/');

    if (!isCategoryPage) {
        return null;
    }

    return (
        <Flex justify='center' wrap='nowrap' overflowX='auto' gap={4} mt={8} px={8}>
            {categories.map((category) => {
                const isActiveCategory =
                    decodeURIComponent(currentCategoryId || '') === category.name;

                return (
                    <Box key={category.id}>
                        <Text fontWeight='bold' fontSize='lg' mb={2}>
                            {category.name}
                        </Text>
                        <Flex gap={4}>
                            {category.items.map((item, index) => {
                                const isActive =
                                    isActiveCategory &&
                                    decodeURIComponent(currentSubcategory || '') === item.name;

                                return (
                                    <Link
                                        key={index}
                                        to={`/category/${encodeURIComponent(category.name)}/${encodeURIComponent(item.name)}`}
                                        style={{
                                            textDecoration: 'none',
                                            padding: '8px 16px',
                                            height: '42px',
                                            textAlign: 'center',
                                            borderBottom: isActive ? '2px solid #2db100' : 'none',
                                            color: isActive ? '#2db100' : '#000',
                                            fontWeight: isActive ? 'bold' : 'normal',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            whiteSpace: 'nowrap',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Text fontSize='sm'>{item.name}</Text>
                                    </Link>
                                );
                            })}
                        </Flex>
                    </Box>
                );
            })}
        </Flex>
    );
};
