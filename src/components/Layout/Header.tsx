import { BellIcon, ChatIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Icon,
    IconButton,
    Image,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { Link, useLocation, useParams } from 'react-router-dom';

import logo from '../../../public/logo.svg';
import { newRecipesBreakpoints } from '../constant/breakpoints';
import { useCustomBreakpoints } from '../hooks/useCustomBreakpoints';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
    pageTitle?: string;
}

export const Header = ({ pageTitle }: HeaderProps) => {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const { categoryId, itemName } = useParams<{ categoryId?: string; itemName?: string }>();
    const location = useLocation();
    const { isXSmall, isSmall, isMedium } = useCustomBreakpoints(newRecipesBreakpoints);
    const showCompactView = isXSmall || isSmall || isMedium;

    const getBreadcrumbItems = () => {
        const items = [{ label: 'Главная', path: '/' }];
        const pathSegments = location.pathname.split('/').filter(Boolean);

        if (pathSegments.includes('juiciest')) {
            items.push({ label: 'Самое сочное', path: '/juiciest' });
        }

        if (categoryId) {
            items.push({
                label: decodeURIComponent(categoryId),
                path: `/category/${encodeURIComponent(categoryId)}`,
            });

            if (itemName) {
                items.push({
                    label: decodeURIComponent(itemName),
                    path: '',
                });
            }
        }

        return items;
    };

    const breadcrumbItems = getBreadcrumbItems();

    return (
        <Box data-test-id='header' position='relative' zIndex='sticky'>
            <Flex
                as='header'
                width='100%'
                height={showCompactView ? '60px' : '80px'}
                bg='#ffffd3'
                boxShadow='sm'
                justifyContent='space-between'
                alignItems='center'
                px={showCompactView ? '16px' : '24px'}
                position='relative'
                zIndex='dropdown'
            >
                <Flex alignItems='center'>
                    <Image src={logo} alt='Logo' height={showCompactView ? '32px' : '40px'} />

                    <Text
                        ml={4}
                        fontSize={showCompactView ? 'md' : 'xl'}
                        fontWeight='bold'
                        data-test-id='header-title'
                    >
                        {pageTitle || 'Самое сочное'}
                    </Text>

                    {!showCompactView && (
                        <Breadcrumb ml='128px' spacing='8px' separator={<Text>/</Text>}>
                            {breadcrumbItems.map(({ label, path }, index) => (
                                <BreadcrumbItem key={path || index} isCurrentPage={!path}>
                                    {path ? (
                                        <BreadcrumbLink as={Link} to={path}>
                                            <Text fontSize='sm' fontWeight='500' color='blue.500'>
                                                {label}
                                            </Text>
                                        </BreadcrumbLink>
                                    ) : (
                                        <Text fontSize='sm' fontWeight='bold' color='gray.700'>
                                            {label}
                                        </Text>
                                    )}
                                </BreadcrumbItem>
                            ))}
                        </Breadcrumb>
                    )}
                </Flex>

                {showCompactView ? (
                    <Flex alignItems='center' gap={isSmall ? '8px' : '12px'}>
                        {!isXSmall && (
                            <>
                                <Icon as={ChatIcon} w={4} h={4} color='red.500' />
                                {!isSmall && <Text fontSize='xs'>42</Text>}
                                <Icon w={4} h={4} color='blue.500' />
                                {!isSmall && <Text fontSize='xs'>12</Text>}
                            </>
                        )}
                        <Icon as={BellIcon} w={4} h={4} color='yellow.500' />
                        {!isSmall && <Text fontSize='xs'>3</Text>}
                        <IconButton
                            aria-label='Открыть меню'
                            icon={<span>≡</span>}
                            onClick={onToggle}
                            variant='ghost'
                            size={isSmall ? 'sm' : 'md'}
                        />
                    </Flex>
                ) : (
                    <Flex alignItems='center'>
                        <Avatar name='User Name' src='/avatar.jpg' size='sm' />
                        <Flex direction='column' ml={2}>
                            <Text fontSize='sm' fontWeight='bold'>
                                Имя пользователя
                            </Text>
                            <Text fontSize='xs' color='gray.500'>
                                user@example.com
                            </Text>
                        </Flex>
                    </Flex>
                )}
            </Flex>

            <MobileMenu isOpen={isOpen} onClose={onClose} />
        </Box>
    );
};
