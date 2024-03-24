import { Checkbox } from '@chakra-ui/react';
import { Icon } from '../icons';

export const CheckBoxKit = (props: any) => {
  const { disabled, ...rest } = props;
  function CustomIcon(props: any) {
    const { isIndeterminate, isChecked, ...rest } = props;
    return (
      <>
        {isChecked ? (
          <Icon
            name={'checkbox-selected'}
            width={24}
            height={24}
            style={{ position: 'fixed', transform: 'scale(0.85)' }}
          />
        ) : null}
      </>
    );
  }

  return (
    <Checkbox
      style={{
        width: '30px',
        height: '30px',
        position: 'relative',
        borderColor: 'light.--color-light-300',
      }}
      isDisabled={disabled}
      icon={<CustomIcon />}
      colorScheme="whiteAlpha"
      _hover={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bg: 'dark.--color-dark-500',
        span: { border: '1px solid', borderColor: 'light.--color-light-300' },
        width: '30px',
        height: '30px',
        left: '-7px',
        borderRadius: '50%',
      }}
      _active={{
        bg: 'dark.--color-dark-100',
      }}
      _disabled={{
        cursor: 'not-allowed',
        opacity: '0.8',
        bg: 'none',
        span: { border: 'none', borderColor: 'none' },
      }}
      {...rest}
    />
  );
};
