import { RadioGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { RadioOption } from './radioOption';

export const RadioGroupKit = ({ options }: { options: Array<string> }) => {
  const [value, setValue] = useState('1');

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row" fill="accent.--color-accent-500">
        {options.map((el, i) => {
          return <RadioOption key={i} option={el} value={value} />;
        })}
      </Stack>
    </RadioGroup>
  );
};
