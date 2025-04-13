import { Box, Collapse, Link, VStack } from '@chakra-ui/react';

import { categories } from '~/data/data';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => (
    <Box
        position='fixed'
        top='80px' // Высота хедера
        left={0}
        right={0}
        zIndex='modal' // Выше чем dropdown
        bg='rgba(0, 0, 0, 0.4)' // Полупрозрачный оверлей
        height='calc(100vh - 80px)' // Оставшееся пространство
        display={isOpen ? 'block' : 'none'}
        onClick={onClose} // Закрытие при клике вне меню
    >
        <Collapse in={isOpen} animateOpacity>
            <Box bg='white' p={4} shadow='xl' maxHeight='calc(100vh - 80px)' overflowY='auto'>
                <VStack align='start' spacing={4}>
                    {categories.map((category) => (
                        <Box key={category.id} width='100%'>
                            <Link
                                fontWeight='bold'
                                onClick={onClose}
                                display='block'
                                py={2}
                                fontSize='lg'
                            >
                                {category.name}
                            </Link>
                            <VStack align='start' pl={4} mt={2}>
                                {category.items.map((item, index) => (
                                    <Link
                                        key={`${category.id}-${index}`}
                                        onClick={onClose}
                                        display='block'
                                        py={2}
                                        width='100%'
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </VStack>
                        </Box>
                    ))}
                </VStack>
            </Box>
        </Collapse>
    </Box>
);
