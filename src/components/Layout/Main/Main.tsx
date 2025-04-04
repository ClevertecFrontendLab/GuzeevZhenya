// Main.tsx
import { Box } from '@chakra-ui/react';

import { JuicySection } from './JuicySection';
import { NewRecipes } from './NewRecipes';
import { ReviewsSection } from './ReviewSection';
import { SearchSection } from './SearchSection';

export const Main = () => (
    <Box
        width='100%'
        maxW={{ base: '100%', md: '880px', xl: '1384px' }}
        mx='auto'
        pl={{ base: 4, md: 6, xl: 6 }}
        pr={0}
    >
        <SearchSection />
        <NewRecipes />
        <JuicySection />
        <ReviewsSection />
    </Box>
);
