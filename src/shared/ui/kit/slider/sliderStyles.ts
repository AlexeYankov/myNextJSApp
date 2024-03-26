import { sliderAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  thumb: {
    width: '20px',
    height: '20px',
    bg: 'accent.--color-accent-500', // change the background of the thumb to orange.400
  },
  filledTrack: {
    bg: 'accent.--color-accent-500', // change the background of the filled track to blue.600
  },
  track: {
    bg: 'accent.--color-accent-900', // change the background of the filled track to blue.600
  },
});

export const sliderTheme = defineMultiStyleConfig({
  baseStyle,
});
