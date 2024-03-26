import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  root: {
    border: '1px solid',
    borderColor: 'dark.--color-dark-300',
    borderRadius: '2px',
    zIndex: '0',
  },
  tab: {
    _dark: {
      borderColor: 'dark.--color-dark-300',
      _focus: {
        borderRadius: '2px',
      },
      _hover: {
        borderColor: 'dark.--color-dark-300',
        bg: 'dark.--color-dark-300',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.8',
      },
      _selected: {
        bg: 'accent.--color-accent-500'
      },
    },
  },
});

export const tabsTheme = defineStyleConfig({
  variants: { primary },
});
