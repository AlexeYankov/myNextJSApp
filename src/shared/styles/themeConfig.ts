import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from '../ui/kit/button';
import { inputTheme } from '../ui/kit/input';
import { tabsTheme } from '../ui/kit/tabs';
import { checkboxTheme } from '../ui/kit/checkbox';
import { sliderTheme } from '../ui/kit/slider';
import { menuTheme } from '../ui/kit/dropdown';
import { radioTheme } from '../ui/kit/radioGroup';
import { selectTheme } from '../ui/kit/select';
import { modalTheme } from '../ui/kit/modal';

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: 'body',
        // color: mode('dark', 'red')(props),
        bg: mode('dark', 'dark.--color-dark-900')(props),
        lineHeight: 'base',
      },
    }),
  },
  colors: {
    accent: {
      '--color-accent-100': '#bea6ff',
      '--color-accent-300': '#a280ff',
      '--color-accent-500': '#8c61ff',
      '--color-accent-700': '#704ecc',
      '--color-accent-900': '#382766',
    },
    success: {
      '--color-success-100': '#80ffbf',
      '--color-success-300': '#22e584',
      '--color-success-500': '#14cc70',
      '--color-success-700': '#0f9954',
      '--color-success-900': '#0a6638',
    },
    danger: {
      '--color-danger-100': '#ff8099',
      '--color-danger-300': '#f23d61',
      '--color-danger-500': '#cc1439',
      '--color-danger-700': '#990f2b',
      '--color-danger-900': '#660a1d',
    },
    warning: {
      '--color-warning-100': '#ffd073',
      '--color-warning-300': '#e5ac39',
      '--color-warning-500': '#d99000',
      '--color-warning-700': '#960',
      '--color-warning-900': '#640',
    },
    info: {
      '--color-info-100': '#73a5ff',
      '--color-info-300': '#4c8dff',
      '--color-info-500': '#397df6',
      '--color-info-700': '#2f68cc',
      '--color-info-900': '#234e99',
    },

    light: {
      '--color-light-100': '#fff',
      '--color-light-300': '#f9f7ff',
      '--color-light-500': '#f4f2fa',
      '--color-light-700': '#dcdae0',
      '--color-light-900': '#c3c1c7',
    },
    dark: {
      '--color-dark-100': '#808080',
      '--color-dark-300': '#4c4c4c',
      '--color-dark-500': '#333',
      '--color-dark-700': '#171717',
      '--color-dark-900': '#000',
    },
  },
  fonts: {
    heading: 'var(--font-rubik)',
    body: 'var(--font-rubik)',
  },
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    Tabs: tabsTheme,
    Checkbox: checkboxTheme,
    Slider: sliderTheme,
    Menu: menuTheme,
    Radio: radioTheme,
    Select: selectTheme,
    Modal: modalTheme,
  },
  // global: (props: StyleFunctionProps) => ({
  //   body: {
  //     // sets a custom bg color for dark mode only
  //     bg: mode(
  //       // light mode value retrieved from theme
  //       props.theme.semanticTokens.colors['chakra-body-bg']._dark,
  //       // your custom value for dark mode
  //       'red'
  //     )(props),
  //   },
  // }),
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';

const styles = {
  // @ts-ignore
  global: (props) => ({
    _dark: {
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
        lineHeight: 'base',
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
    },
  }),
};
