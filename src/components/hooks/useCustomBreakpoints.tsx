import { useEffect, useState } from 'react';

export interface BreakpointValues {
    cardWidth: number | string;
    imageHeight: number;
    visibleCards?: number;
    gap?: number;
    visible?: boolean;
    width?: number | string;
    maxWidth?: number | string;
    containerPadding?: number | string;
}

export interface BreakpointsConfig {
    xsmall?: BreakpointValues;
    small: BreakpointValues;
    medium: BreakpointValues;
    large: BreakpointValues;
    xlarge: BreakpointValues;
}

export const useCustomBreakpoints = (config: BreakpointsConfig) => {
    const [breakpointState, setBreakpointState] = useState<{
        currentBreakpoint: BreakpointValues;
        windowSize: number;
        screenSize: string;
        isXSmall: boolean;
        isSmall: boolean;
        isMedium: boolean;
        isLarge: boolean;
        isXLarge: boolean;
    }>(() => {
        const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
        const screenSize = getScreenSize(initialWidth);
        return {
            currentBreakpoint: getBreakpoint(config, initialWidth),
            windowSize: initialWidth,
            screenSize,
            isXSmall: screenSize === 'xsmall',
            isSmall: screenSize === 'small',
            isMedium: screenSize === 'medium',
            isLarge: screenSize === 'large',
            isXLarge: screenSize === 'xlarge',
        };
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            const width = window.innerWidth;
            const screenSize = getScreenSize(width);

            setBreakpointState({
                currentBreakpoint: getBreakpoint(config, width),
                windowSize: width,
                screenSize,
                isXSmall: screenSize === 'xsmall',
                isSmall: screenSize === 'small',
                isMedium: screenSize === 'medium',
                isLarge: screenSize === 'large',
                isXLarge: screenSize === 'xlarge',
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [config]);

    return breakpointState;
};

function getBreakpoint(config: BreakpointsConfig, width: number): BreakpointValues {
    if (width < 360 && config.xsmall) return config.xsmall;
    if (width < 560) return config.small;
    if (width < 1025) return config.medium;
    if (width < 1920) return config.large;
    return config.xlarge;
}

function getScreenSize(width: number): string {
    if (width < 360) return 'xsmall';
    if (width < 560) return 'small';
    if (width < 1025) return 'medium';
    if (width < 1920) return 'large';
    return 'xlarge';
}
