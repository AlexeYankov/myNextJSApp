import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  _dark: {
    background: 'accent.--color-accent-500',
    _hover: {
      bg: 'accent.--color-accent-300',
    },
    _active: {
      bg: 'accent.--color-accent-700',
    },
    _focus: {
      border: '1px solid info.--color-info-700',
    },
    _disabled: {
      bg: 'accent.--color-accent-700',
      cursor: 'not-allowed',
      opacity: '0.8'
    }
  },
});

const secondary = defineStyle({
  _dark: {
    bg: 'dark.--color-dark-300',
    _hover: {
      bg: 'dark.--color-dark-100',
    },
    _active: {
      bg: 'dark.--color-dark-500',
    },
    _focus: {
      border: '1px solid info.--color-info-700',
    },
    _disabled: {
      bg: 'dark.--color-dark-500',
      cursor: 'not-allowed',
      opacity: '0.8'
    }
  },
});


export const buttonTheme = defineStyleConfig({
  variants: { primary, secondary },
});

// export const theme = extendTheme({
//   components: { Button: buttonTheme },
// });
