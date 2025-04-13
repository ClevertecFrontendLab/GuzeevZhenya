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
import { Link, useParams } from 'react-router';

import logo from '../../../public/logo.svg';
import { newRecipesBreakpoints } from '../constant/breakpoints';
import { useCustomBreakpoints } from '../hooks/useCustomBreakpoints';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const { categoryId, itemName } = useParams<{ categoryId?: string; itemName?: string }>();
    const { isXSmall, isSmall, isMedium } = useCustomBreakpoints(newRecipesBreakpoints);

    const generateBreadcrumbs = (): Array<{ name: string; path: string }> => {
        const crumbs = [{ name: 'Главная', path: '/' }];

        if (categoryId) {
            crumbs.push({
                name: decodeURIComponent(categoryId),
                path: `/category/${encodeURIComponent(categoryId)}`,
            });

            if (itemName) {
                crumbs.push({
                    name: decodeURIComponent(itemName),
                    path: '',
                });
            }
        }

        return crumbs;
    };

    const breadcrumbs = generateBreadcrumbs();
    const showCompactView = isXSmall || isSmall || isMedium;

    return (
        <Box position='relative' zIndex='sticky'>
            <Flex
                as='header'
                width='100%'
                height={isSmall ? '60px' : '80px'}
                bg='#ffffd3'
                boxShadow='sm'
                justifyContent='space-between'
                alignItems='center'
                px={isSmall ? '16px' : '24px'}
                position='relative'
                zIndex='dropdown'
                data-test-id='header'
            >
                <Flex alignItems='center'>
                    <Image src={logo} alt='Logo' height={isSmall ? '32px' : '40px'} />

                    {!showCompactView && (
                        <Breadcrumb ml='128px' spacing='8px' separator={<Text>/</Text>}>
                            {breadcrumbs.map(({ name, path }, index) => (
                                <BreadcrumbItem
                                    key={index}
                                    isCurrentPage={index === breadcrumbs.length - 1}
                                >
                                    {path ? (
                                        <BreadcrumbLink as={Link} to={path}>
                                            <Text fontSize='sm' fontWeight='500' color='blue.500'>
                                                {name}
                                            </Text>
                                        </BreadcrumbLink>
                                    ) : (
                                        <Text fontSize='sm' fontWeight='bold' color='gray.700'>
                                            {name}
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
                                <Flex alignItems='center'>
                                    <Icon as={ChatIcon} w={4} h={4} color='red.500' />{' '}
                                    {!isSmall && (
                                        <Text ml={1} fontSize='xs'>
                                            42
                                        </Text>
                                    )}
                                </Flex>
                                <Flex alignItems='center'>
                                    <Icon w={4} h={4} color='blue.500' />
                                    {!isSmall && (
                                        <Text ml={1} fontSize='xs'>
                                            12
                                        </Text>
                                    )}
                                </Flex>
                            </>
                        )}
                        <Flex alignItems='center'>
                            <Icon as={BellIcon} w={4} h={4} color='yellow.500' />
                            {!isSmall && (
                                <Text ml={1} fontSize='xs'>
                                    3
                                </Text>
                            )}
                        </Flex>
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
                        <Avatar name='User Name' src='/avatar.jpg' size={isSmall ? 'xs' : 'sm'} />
                        {!isSmall && (
                            <Flex direction='column' ml={2}>
                                <Text fontSize='sm' fontWeight='bold'>
                                    Имя пользователя
                                </Text>
                                <Text fontSize='xs' color='gray.500'>
                                    user@example.com
                                </Text>
                            </Flex>
                        )}
                    </Flex>
                )}
            </Flex>

            <MobileMenu isOpen={isOpen} onClose={onClose} />
        </Box>
    );
};
