import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { newRecipes } from '~/data/data';

export const AllergySection = () => {
    const uniqueCategories = Array.from(new Set(newRecipes.map((item) => item.category)));

    return (
        <Box mt={8} textAlign='center'>
            <Text fontSize='xl' fontWeight='bold' mb={4}>
                Исключить аллергены
            </Text>
            <Box>
                {uniqueCategories.map((category, index) => (
                    <Button
                        key={index}
                        as={Link}
                        to={`/category/${encodeURIComponent(category)}/${encodeURIComponent(category)}`}
                        colorScheme='blue'
                        variant='outline'
                        size='md'
                        width='100%'
                        mb={2}
                    >
                        {category}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};
