import { Box, Flex, Img, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import HomeSvg from '../../assets/home.svg';
import { newRecipesBreakpoints } from '../constant/breakpoints';
import { useCustomBreakpoints } from '../hooks/useCustomBreakpoints';

const HomeIcon = () => <img src={HomeSvg} width='40' height='40' alt='Home' />;
const SearchIcon = () => <img src={HomeSvg} width='40' height='40' alt='Home' />;
const CreateIcon = () => <img src={HomeSvg} width='40' height='40' alt='Home' />;
const ProfileIcon = () => <img src={HomeSvg} width='40' height='40' alt='Home' />;

export const MobileBottomNav = () => {
    const { isSmall, isMedium } = useCustomBreakpoints(newRecipesBreakpoints);
    const isMobile = isSmall || isMedium;

    if (!isMobile) return null;

    const itemWidth = isSmall ? '90px' : '192px';
    const itemHeight = '84px';
    const iconSize = isSmall ? '24px' : '32px';
    const largeIconSize = isSmall ? '28px' : '40px';

    return (
        <Box
            data-test-id='footer'
            bottom='0'
            left='0'
            right='0'
            width='100%'
            bg='#ffffd3'
            borderTop='1px solid'
            borderColor='gray.200'
            height={itemHeight}
            boxShadow='0 -2px 10px rgba(0, 0, 0, 0.1)'
        >
            <Flex
                justify='space-around'
                align='center'
                height='100%'
                maxW='100vw'
                overflowX='hidden'
            >
                <NavItem
                    to='/'
                    icon={<Img as={HomeIcon} width={iconSize} height={iconSize} />}
                    text='Главная'
                    width={itemWidth}
                    height={itemHeight}
                />

                <NavItem
                    to='/search'
                    icon={<Img as={SearchIcon} width={largeIconSize} height={largeIconSize} />}
                    text='Поиск'
                    width={itemWidth}
                    height={itemHeight}
                />

                <NavItem
                    to='/create'
                    icon={<Img as={CreateIcon} width={largeIconSize} height={largeIconSize} />}
                    text='Записать'
                    width={itemWidth}
                    height={itemHeight}
                />

                <NavItem
                    to='/profile'
                    icon={<Img as={ProfileIcon} width={iconSize} height={iconSize} />}
                    text='Профиль'
                    width={itemWidth}
                    height={itemHeight}
                />
            </Flex>
        </Box>
    );
};

interface NavItemProps {
    to: string;
    icon: React.ReactNode;
    text: string;
    width: string;
    height: string;
}

const NavItem = ({ to, icon, text, width, height }: NavItemProps) => (
    <Flex
        as={Link}
        to={to}
        direction='column'
        align='center'
        justify='center'
        width={width}
        height={height}
        minWidth={width}
        _hover={{ textDecoration: 'none', bg: 'gray.50' }}
        _active={{ bg: 'gray.100' }}
        transition='background 0.2s'
    >
        {icon}
        <Text fontSize='12px' mt={1} fontWeight='500'>
            {text}
        </Text>
    </Flex>
);
