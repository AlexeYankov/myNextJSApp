import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  field: {
    _dark: {
      border: '1px solid',
      paddingBottom: '3px',
      borderRadius: '2px',
      bg: 'none',
      _focus: {
        borderColor: 'info.--color-info-700',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.8',
      },
     
    },
  },
});

export const inputTheme = defineStyleConfig({
  variants: { primary },
});