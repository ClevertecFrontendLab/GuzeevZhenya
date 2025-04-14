import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { newRecipesBreakpoints } from '../constant/breakpoints';
import { useCustomBreakpoints } from '../hooks/useCustomBreakpoints';
import { Header } from './Header';
import { MobileBottomNav } from './MobileBottomNav';
import { MobileMenu } from './MobileMenu';
import { RightSidebar } from './RightSideBar';
import { Sidebar } from './Sidebar';

interface LayoutProps {
    children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const { isOpen, onToggle } = useDisclosure();
    const { isXSmall, isSmall, isMedium, isLarge, isXLarge } =
        useCustomBreakpoints(newRecipesBreakpoints);

    const layoutConfig = {
        maxWidth: {
            xsmall: '360px',
            small: '100%',
            medium: '768px',
            large: '1440px',
            xlarge: '1920px',
        },
        padding: {
            xsmall: '16px',
            small: '16px',
            medium: '20px',
            large: '0',
            xlarge: '0',
        },
        contentWidth: {
            xsmall: '100%',
            small: '100%',
            medium: '100%',
            large: '880px',
            xlarge: '1360px',
        },
        sidebar: {
            left: '256px',
            right: '280px',
        },
    };

    return (
        <Box minH='100vh' overflowX='hidden' width='100vw'>
            <Flex direction='column' minH='100vh'>
                <Header />

                {(isXSmall || isSmall) && <MobileMenu isOpen={isOpen} onClose={onToggle} />}

                <Flex
                    flex={1}
                    width='100%'
                    maxWidth={
                        isXSmall
                            ? layoutConfig.maxWidth.xsmall
                            : isSmall
                              ? layoutConfig.maxWidth.small
                              : isMedium
                                ? layoutConfig.maxWidth.medium
                                : isLarge
                                  ? layoutConfig.maxWidth.large
                                  : layoutConfig.maxWidth.xlarge
                    }
                    px={
                        isXSmall
                            ? layoutConfig.padding.xsmall
                            : isSmall
                              ? layoutConfig.padding.small
                              : isMedium
                                ? layoutConfig.padding.medium
                                : isLarge
                                  ? layoutConfig.padding.large
                                  : layoutConfig.padding.xlarge
                    }
                    direction={isXSmall || isSmall ? 'column' : 'row'}
                    overflowX='hidden'
                >
                    {(isLarge || isXLarge) && (
                        <Box width={layoutConfig.sidebar.left} flexShrink={0}>
                            <Sidebar />
                        </Box>
                    )}

                    <Box
                        as='main'
                        flex={1}
                        px={0}
                        py={0}
                        width={
                            isXSmall
                                ? layoutConfig.contentWidth.xsmall
                                : isSmall
                                  ? layoutConfig.contentWidth.small
                                  : isMedium
                                    ? layoutConfig.contentWidth.medium
                                    : isLarge
                                      ? layoutConfig.contentWidth.large
                                      : layoutConfig.contentWidth.xlarge
                        }
                        mx='auto'
                        overflowX='hidden'
                    >
                        {children || <Outlet />}
                    </Box>

                    {(isLarge || isXLarge) && (
                        <Box
                            width={layoutConfig.sidebar.right}
                            flexShrink={0}
                            borderLeft='1px solid'
                            borderColor='gray.200'
                            p={4}
                        >
                            <RightSidebar />
                        </Box>
                    )}
                </Flex>
                {(isXSmall || isSmall || isMedium) && <MobileBottomNav />}
            </Flex>
        </Box>
    );
};
