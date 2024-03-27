import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const baseStyle = definePartsStyle({
  icon: {
    // transition: '0.25s easy-in-out',
    // fill: 'red',
    // stroke: 'red',
    // transform: 'rotate(90deg)',
    // _selected: {
    //   fill: 'blue',
    //   transform: 'rotate(90deg)',
    // },
    // _checked: {
    //   fill: 'blue',
    //   transform: 'rotate(90deg)',
    // },
    // _hover: {
    //   fill: 'blue',
    //   transform: 'rotate(90deg)',
    // },
  },
  field: {
    // _hover: {
    // div: {
    svg: {
      fill: 'red',
      stroke: 'red',
      transform: 'rotate(180deg)',
      // },
      // },
    },
  },
});

export const selectTheme = defineMultiStyleConfig({
  baseStyle,
});
