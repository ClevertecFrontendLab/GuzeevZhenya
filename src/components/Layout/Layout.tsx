// Layout.tsx
import { Box, Flex } from '@chakra-ui/react';

import { Header } from './Header';
import { Main } from './Main/Main';
import { RightSidebar } from './RightSideBar';
import { Sidebar } from './Sidebar';

interface LayoutProps {
    children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
    <Flex direction='column' minH='100vh'>
        <Header />
        <Flex flex={1} width='100%' maxW={{ base: '100%', md: '1440px', xl: '1920px' }} mx='auto'>
            <Sidebar
                width={{ base: '0', md: '240px', xl: '280px' }}
                display={{ base: 'none', md: 'block' }}
            />

            <Box
                as='main'
                flex={1}
                px={{ base: 4, md: 0, xl: 0 }}
                width={{
                    base: '100%',
                    md: 'calc(100% - 240px - 240px)',
                    xl: 'calc(100% - 280px - 280px)',
                }}
            >
                {children || <Main />}
            </Box>

            <Box
                width={{ base: '0', md: '240px', xl: '280px' }}
                display={{ base: 'none', md: 'block' }}
                flexShrink={0}
                borderLeft='1px solid'
                borderColor='gray.200'
                p={4}
            >
                <RightSidebar />
            </Box>
        </Flex>
    </Flex>
);
