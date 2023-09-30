import { extendTheme } from 'native-base'

export const Theme = extendTheme({
    colors: {
        gray: {
            300: '#8D8D99',
        },
        blue:
        {
            500: '#339CFF',
            800: '#0B3B60',
        },
        white: '#FFFFFF',
        black: '##000000', 
        fontSizes: {
            'xs': '12px',
            'sm': '14px',
            'md': '16px',
            'lg': '18px',
            'xl': '20px',
            '2xl': '24px',
            '3xl': '28px',
            '4xl': '36px',
            '5xl': '48px',
            '6xl': '64px',
            '7xl': '72px',
        },
    },
})