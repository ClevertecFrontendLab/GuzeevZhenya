// // src/hooks/useCustomBreakpoints.ts
// import { useEffect, useState } from 'react';

// export interface BreakpointValues {
//   cardWidth: number;
//   cardHeight: number;
//   imageWidth: number;
//   imageHeight: number;
//   visibleCards: number;
//   gap: number;
// }

// export interface BreakpointsConfig {
//   small: BreakpointValues;   // 360-767px
//   medium: BreakpointValues;  // 768-1439px
//   large: BreakpointValues;   // 1440-1919px
//   xlarge: BreakpointValues;  // 1920px+
// }

// export const defaultBreakpoints: BreakpointsConfig = {
//   small: {
//     cardWidth: 158,
//     cardHeight: 220,
//     imageWidth: 158,
//     imageHeight: 128,
//     visibleCards: 4,
//     gap: 12,
//   },
//   medium: {
//     cardWidth: 277,
//     cardHeight: 230,
//     imageWidth: 277,
//     imageHeight: 180,
//     visibleCards: 3,
//     gap: 24,
//   },
//   large: {
//     cardWidth: 322,
//     cardHeight: 414,
//     imageWidth: 322,
//     imageHeight: 230,
//     visibleCards: 4,
//     gap: 24,
//   },
//   xlarge: {
//     cardWidth: 322,
//     cardHeight: 414,
//     imageWidth: 322,
//     imageHeight: 230,
//     visibleCards: 4,
//     gap: 24,
//   }
// };

// export const useCustomBreakpoints = (customBreakpoints?: Partial<BreakpointsConfig>) => {
//   const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointValues>();

//   // Объединяем дефолтные и кастомные брейкпоинты
//   const breakpoints = {
//     ...defaultBreakpoints,
//     ...customBreakpoints
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;

//       if (width < 768) {
//         setCurrentBreakpoint(breakpoints.small);
//       } else if (width >= 768 && width < 1440) {
//         setCurrentBreakpoint(breakpoints.medium);
//       } else if (width >= 1440 && width < 1920) {
//         setCurrentBreakpoint(breakpoints.large);
//       } else {
//         setCurrentBreakpoint(breakpoints.xlarge);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [breakpoints]);

//   return currentBreakpoint;
// };

// src/hooks/useCustomBreakpoints.ts
import { useEffect, useState } from 'react';

export interface BreakpointValues {
    cardWidth: number;
    cardHeight: number;
    imageWidth: number;
    imageHeight: number;
    visibleCards?: number; // Опционально, для каруселей
    gap?: number; // Опционально, для каруселей
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
            } else if (width >= 768 && width < 1640) {
                setCurrentBreakpoint(config.medium);
            } else if (width >= 1640 && width < 1920) {
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
