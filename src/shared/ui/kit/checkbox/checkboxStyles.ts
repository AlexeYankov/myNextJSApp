import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: 'none',
    bg: 'none',
    _hover: {
      bg: 'dark.--color-dark-500',
    },
    _active: {
      bg: 'dark.--color-dark-100',
    },
    _focus: {
      bg: 'dark.--color-dark-100',
      boxShadow: 'none',
      _hover: {
        bg: 'dark.--color-dark-100',
      },
    },
    _checked: {
      bg: 'none',
      _hover: {
        bg: 'dark.--color-dark-500',
        span: { bg: 'none' },
      },
      _active: {
        bg: 'dark.--color-dark-100',
      },
    },
    _disabled: {
      opacity: 0.7,
      bg: 'none',
      _hover: {
        bg: 'none',
      },
      _checked: {
        bg: 'none',
      },
    },
  },
});

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
});
