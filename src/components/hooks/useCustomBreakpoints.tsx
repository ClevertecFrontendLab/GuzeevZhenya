// src/hooks/useCustomBreakpoints.ts
import { useEffect, useState } from 'react';

export interface BreakpointValues {
    cardWidth: number;
    imageHeight: number;
    visibleCards?: number;
    gap?: number;
}

export interface BreakpointsConfig {
    small: BreakpointValues; // 360-767px
    medium: BreakpointValues; // 768-1439px
    large: BreakpointValues; // 1440-1919px
    xlarge: BreakpointValues; // 1920px+
}

export const useCustomBreakpoints = (config: BreakpointsConfig) => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointValues>();

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 768) {
                setCurrentBreakpoint(config.small);
            } else if (width >= 768 && width < 1440) {
                setCurrentBreakpoint(config.medium);
            } else if (width >= 1440 && width < 1920) {
                setCurrentBreakpoint(config.large);
            } else {
                setCurrentBreakpoint(config.xlarge);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [config]);

    return currentBreakpoint;
};
