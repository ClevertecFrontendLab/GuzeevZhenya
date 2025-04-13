import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Collapse, Flex, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router';

import { useCustomBreakpoints } from '~/components/hooks/useCustomBreakpoints';
import { categories } from '~/data/data';

import { Footer } from './Footer';

export const sidebarBreakpoints = {
    small: {
        // 0-767px
        width: '0',
        visible: false,
    },
    medium: {
        // 768-1023px
        width: '200px',
        visible: false,
    },
    large: {
        // 1024-1439px
        width: '220px',
        visible: true,
    },
    xlarge: {
        // 1440px+
        width: '256px',
        visible: true,
    },
};

export const Sidebar = () => {
    const [expandedCategories, setExpandedCategories] = useState<Record<number, boolean>>({});
    const { currentBreakpoint } = useCustomBreakpoints(sidebarBreakpoints);

    const toggleCategory = (categoryId: number) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }));
    };

    if (!currentBreakpoint.visible) return null;

    return (
        <Flex
            direction='column'
            w={currentBreakpoint.width}
            minW={currentBreakpoint.width}
            bg='white'
            p={4}
            boxShadow='md'
            position='fixed'
            height='100vh'
            overflowY='auto'
        >
            <Box flex={1} overflowY='auto' minH='0'>
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
                                    src={category.icon}
                                    alt={category.name}
                                    boxSize='20px'
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
                                    <Link
                                        key={index}
                                        to={`/category/${encodeURIComponent(category.name)}/${encodeURIComponent(item.name)}`}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            padding: '4px 0',
                                        }}
                                    >
                                        <Text fontSize='14px' _hover={{ color: 'blue.500' }}>
                                            {item.name}
                                        </Text>
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
