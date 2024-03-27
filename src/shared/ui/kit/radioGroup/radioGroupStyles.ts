import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    width: '35px',
    height: '35px',
    border: 'none',
    bg: 'none',

    _active: {
      borderColor: 'accent.--color-accent-500',
      bg: 'dark.--color-dark-100',
      border: 'none',
    },
    _hover: {
      bg: 'dark.--color-dark-300',
      _active: {
        bg: 'accent.--color-accent-900',
      },
    },
    _selected: {
      border: 'none',
      bg: 'none',
      _hover: {
        bg: 'none',
        zIndex: 10,
      },
      _active: {
        bg: 'dark.--color-dark-100',
      },
    },
    _checked: {
      border: 'none',
      bg: 'none',
      _hover: {
        bg: 'dark.--color-dark-300',
        // bg: 'none',
        zIndex: 10,
      },
      _active: {
        bg: 'dark.--color-dark-100',
      },
    },
  },
});

export const radioTheme = defineMultiStyleConfig({
  baseStyle,
});

export const radioStyle = {
  position: 'absolute',
  left: '5px',
  zIndex: 11,
} as React.CSSProperties;