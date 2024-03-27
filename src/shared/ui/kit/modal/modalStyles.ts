import { fonts } from './../../../styles/fonts';
import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys);

const baseStyle = definePartsStyle({
  header: {
    color: 'light.--color-light-100',
    borderBottom: '1px solid',
    borderColor: 'dark.--color-dark-500',
    fontSize: 'md',
    maxHeight: '60px'
  },
  dialog: {
    border: '1px solid',
    borderColor: 'dark.--color-dark-500',
    borderRadius: '2px',
    bg: 'dark.--color-dark-700',
  },
  body: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    gap: '20px',
  }
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});

// export const radioStyle = {
//   position: 'absolute',
//   left: '5px',
//   zIndex: 11,
// } as React.CSSProperties;
