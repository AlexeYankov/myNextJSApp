import { Center, Checkbox, Text } from '@chakra-ui/react';
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
    <Center justifyContent={'flex-start'} width={'100%'}>
      <Checkbox
        id={label}
        isDisabled={disabled}
        icon={<CustomIcon />}
        {...rest}
      >
        <Text fontSize={'sm'}>{label}</Text>
      </Checkbox>
    </Center>
  );
};
