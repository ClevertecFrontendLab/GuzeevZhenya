// src/constants/breakpoints.ts
import { BreakpointsConfig } from '../hooks/useCustomBreakpoints';

// export const newRecipesBreakpoints: BreakpointsConfig = {
//     small: {
//         cardWidth: 158, // Ширина карточки = ширина изображения
//         imageHeight: 120, // Высота изображения
//         gap: 12,
//     },
//     medium: {
//         cardWidth: 240,
//         imageHeight: 160,
//         gap: 16,
//     },
//     large: {
//         cardWidth: 280,
//         imageHeight: 180,
//         gap: 20,
//     },
//     xlarge: {
//         cardWidth: 320,
//         imageHeight: 200,
//         gap: 24,
//     },
// };

// src/constants/breakpoints.ts
export const juicyRecipesBreakpoints: BreakpointsConfig = {
    small: {
        cardWidth: '100%',
        imageHeight: 200,
        visibleCards: 1,
        gap: 8,
    },
    medium: {
        cardWidth: '356px', // Фиксированная ширина карточки для medium
        imageHeight: 128, // Фиксированная высота изображения
        visibleCards: 4, // Максимум 4 карточки на странице
        gap: 16, // Расстояние между карточками 16px
    },
    large: {
        cardWidth: '346px',
        imageHeight: 244,
        visibleCards: 3,
        gap: 20,
    },
    xlarge: {
        cardWidth: '346px',
        imageHeight: 244,
        visibleCards: 4,
        gap: 24,
    },
};

export const recipeCardsBreakpoints: BreakpointsConfig = {
    small: {
        cardWidth: '100%',
        cardHeight: 'auto',
        containerWidth: '100%',
        smallCardHeight: '44px',
        gap: 4,
        cardPadding: 3,
        smallCardPadding: 2,
    },
    medium: {
        cardWidth: '232px',
        cardHeight: '168px',
        containerWidth: '240px',
        smallCardHeight: '48px',
        gap: 4,
        cardPadding: 3,
        smallCardPadding: 3,
    },
    large: {
        cardWidth: '282px',
        cardHeight: '180px',
        containerWidth: '282px',
        smallCardHeight: '52px',
        gap: 4,
        cardPadding: 4,
        smallCardPadding: 3,
    },
    xlarge: {
        cardWidth: '322px',
        cardHeight: '192px',
        containerWidth: '668px',
        smallCardHeight: '56px',
        gap: 6,
        cardPadding: 6,
        smallCardPadding: 4,
    },
};

export const newRecipesBreakpoints = {
    xsmall: {
        cardWidth: 140,
        imageHeight: 100,
        visibleCards: 2,
        gap: 12,
        fontSize: {
            heading: '20px',
            cardTitle: '14px',
            cardText: '12px',
        },
    },
    small: {
        cardWidth: 158,
        imageHeight: 128,
        visibleCards: 2,
        gap: 12,
        fontSize: {
            heading: '22px',
            cardTitle: '15px',
            cardText: '13px',
        },
    },
    medium: {
        cardWidth: 240,
        imageHeight: 160,
        visibleCards: 4,
        gap: 16,
        fontSize: {
            heading: '24px',
            cardTitle: '16px',
            cardText: '14px',
        },
    },
    large: {
        cardWidth: 280,
        imageHeight: 180,
        visibleCards: 4,
        gap: 20,
        fontSize: {
            heading: '26px',
            cardTitle: '18px',
            cardText: '15px',
        },
    },
    xlarge: {
        cardWidth: 324,
        imageHeight: 230,
        visibleCards: 4,
        gap: 24,
        fontSize: {
            // Размеры шрифта для xlarge
            heading: '48px',
            cardTitle: '20px',
            cardText: '16px',
        },
    },
};
