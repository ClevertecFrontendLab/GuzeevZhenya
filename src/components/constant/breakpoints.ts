// src/constants/breakpoints.ts
import { BreakpointsConfig } from '../hooks/useCustomBreakpoints';

export const newRecipesBreakpoints: BreakpointsConfig = {
    small: {
        cardWidth: 158,
        cardHeight: 220,
        imageWidth: 158,
        imageHeight: 128,
        visibleCards: 4,
        gap: 12,
    },
    medium: {
        cardWidth: 277,
        cardHeight: 230,
        imageWidth: 277,
        imageHeight: 180,
        visibleCards: 3,
        gap: 24,
    },
    large: {
        cardWidth: 322,
        cardHeight: 414,
        imageWidth: 322,
        imageHeight: 230,
        visibleCards: 4,
        gap: 24,
    },
    xlarge: {
        cardWidth: 322,
        cardHeight: 414,
        imageWidth: 322,
        imageHeight: 230,
        visibleCards: 4,
        gap: 24,
    },
};

export const juicyRecipesBreakpoints: BreakpointsConfig = {
    small: {
        cardWidth: 158,
        cardHeight: 128,
        imageWidth: 158,
        imageHeight: 128,
    },
    medium: {
        cardWidth: 346,
        cardHeight: 244,
        imageWidth: 346,
        imageHeight: 244,
    },
    large: {
        cardWidth: 346,
        cardHeight: 244,
        imageWidth: 346,
        imageHeight: 244,
    },
    xlarge: {
        cardWidth: 346,
        cardHeight: 244,
        imageWidth: 346,
        imageHeight: 244,
    },
};
