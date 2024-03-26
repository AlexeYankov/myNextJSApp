import { Center, Checkbox } from '@chakra-ui/react';
import { Icon } from '../icons';

export const CheckBoxKit = (props: any) => {
  const { disabled, label, isChecked, ...rest } = props;
  
  function CustomIcon(props: any) {
    const { isIndeterminate, isChecked, ...rest } = props;
    return (
      <Icon
        name={isChecked ? 'checkbox-selected' : 'checkbox-unselected'}
        width={24}
        height={24}
        style={{ position: 'fixed', transform: 'scale(0.85)' }}
      />
    );
  }

  return (
    <Center>
      <Checkbox
        id={label}
        isDisabled={disabled}
        icon={<CustomIcon />}
        {...rest}
      >
        {label}
      </Checkbox>
    </Center>
  );
};
