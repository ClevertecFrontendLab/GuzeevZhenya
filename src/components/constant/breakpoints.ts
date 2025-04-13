// src/constants/breakpoints.ts
import { BreakpointsConfig } from '../hooks/useCustomBreakpoints';

export const newRecipesBreakpoints: BreakpointsConfig = {
    small: {
        cardWidth: 158, // Ширина карточки = ширина изображения
        imageHeight: 120, // Высота изображения
        gap: 12,
    },
    medium: {
        cardWidth: 240,
        imageHeight: 160,
        gap: 16,
    },
    large: {
        cardWidth: 280,
        imageHeight: 180,
        gap: 20,
    },
    xlarge: {
        cardWidth: 320,
        imageHeight: 200,
        gap: 24,
    },
};

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
