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
        cardWidth: 346,
        imageHeight: 200,
    },
    medium: {
        cardWidth: 346,
        imageHeight: 244,
    },
    large: {
        cardWidth: 346,
        imageHeight: 244,
    },
    xlarge: {
        cardWidth: 346,
        imageHeight: 244,
    },
};
