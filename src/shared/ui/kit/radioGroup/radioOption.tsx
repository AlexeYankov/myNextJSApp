import { Center, Radio } from '@chakra-ui/react';
import { Icon } from '../icons';
import { radioStyle } from './radioGroupStyles';

export const RadioOption = ({
  option,
  value,
}: {
  option: string;
  value: string;
}) => {
  return (
    <Center
      _hover={{
        span: {
          _first: {
            transition: '0.4s easy-in-out',
            bg: 'dark.--color-dark-300',
            _active: {
              bg: 'accent.--color-accent-900',
            },
          },
        },
      }}
      _active={{
        span: {
          _first: {
            bg: 'accent.--color-accent-900',
          },
        },
      }}
    >
      <Radio value={option}>
        <Icon
          style={radioStyle}
          name={
            value === option ? 'radio_button_checked' : 'radio_button_unchecked'
          }
          width={24}
          height={24}
        />
        {option}
      </Radio>
    </Center>
  );
};
