// theme.ts
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    breakpoints: {
        sm: '360px',
        md: '768px',
        lg: '1440px',
        xl: '1920px',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
            },
        },
    },
});
