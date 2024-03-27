import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    justifyContent: 'center',
    bg: 'dark.--color-dark-700',
    minW: 'auto',
    px: 4,
  },
  item: {
    bg: 'none',
    borderBottom: '1px solid',
    borderColor: 'dark.--color-dark-500',
    px: 0,
    _hover: {
      bg: 'dark.--color-dark-100',
    },
  },
});

const menuStyle = definePartsStyle({
  list: {
    justifyContent: 'center',
    bg: 'dark.--color-dark-700',
    minW: 'auto',
    px: 4,
  },
  item: {
    bg: 'none',
    borderBottom: '1px solid',
    borderColor: 'dark.--color-dark-500',
    px: 0,
    _hover: {
      bg: 'dark.--color-dark-100',
    },
  },
});

export const menuTheme = defineMultiStyleConfig({
  baseStyle,
});

export const overflowStyle = {
  maxWidth: '200px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

export const overflowStyleEmail = {
  maxWidth: '200px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  color: '#808080'
};
export const triangleDecorationStyle = {
  position: 'absolute',
  zIndex: 4,
  top: '-5px',
  right: '15px',
  transform: 'rotate(45deg)',

  width: '10px',
  height: '10px',

  borderTop: '1.5px solid #333',
  borderLeft: '1.5px solid #333',
  backgroundColor: '#171717',
} as React.CSSProperties;
