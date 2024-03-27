// import { Input, Text, Box } from '@chakra-ui/react';
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  useRef,
  useState,
} from 'react';
import searchImg from '../../../../public/images/search.svg';
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import s from '../../../../public/images/sprite.svg';
import { Icon } from '../icons/icon';
import React from 'react';

export type TextFieldProps = {
  errorMessage?: string;
  inputId?: string;
  maxW?: string;
  label?: string;
  onClearClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  password?: boolean;
  search?: boolean;
  foolWidth?: boolean;
  type?: 'password' | 'text' | 'number';
  value?: string | number;
  placeholder?: string;
} & ComponentPropsWithoutRef<'input'>;

export const InputKit = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      disabled,
      foolWidth,
      errorMessage,
      maxW,
      inputId,
      value,
      onChange,
      label,
      onClearClick,
      password,
      search,
      placeholder,
      type = 'text',
      ...rest
    } = props;
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [valueType, setValueType] = useState(type);
    const isShowClearButton =
      onClearClick && search && value?.toString().length! > 0;
    const setInputType = () => {
      if (valueType === 'text') {
        return setValueType('password');
      }
      setValueType('text');
    };
    const focused = isFocused
      ? 'light.--color-light-100'
      : 'dark.--color-dark-100';
    const focusedInput = errorMessage
      ? 'danger.--color-danger-300'
      : 'light.--color-light-100';
    const defaultInput = errorMessage
      ? 'danger.--color-danger-300'
      : 'dark.--color-dark-100';
    return (
      <Box
        maxW={maxW}
        display={'flex'}
        alignItems={'flex-start'}
        flexDirection={'column'}
        justifyContent={'center'}
        width="100%"
      >
        <Text fontSize="sm" color="dark.--color-dark-100">
          {label}
        </Text>
        <InputGroup
          size="sm"
          display={'flex'}
          alignItems={'flex-start'}
          flexDirection={'column'}
          justifyContent={'center'}
          stroke={focused}
          fill={focused}
          position={'relative'}
          width={'100%'}
        >
          {search && (
            <InputLeftElement
              width={foolWidth ? '100%' : ''}
              paddingBottom="1"
              pointerEvents="none"
            >
              <Icon name={'search'} width={20} height={20} />
            </InputLeftElement>
          )}
          <Input
            display={'flex'}
            width={'100%'}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            isInvalid={!errorMessage}
            isDisabled={disabled}
            id={`input${label}`}
            type={valueType}
            ref={ref}
            variant={'primary'}
            _focus={{
              color: focusedInput,
            }}
            color={defaultInput}
            placeholder={search ? 'input search' : placeholder}
            errorBorderColor="danger.--color-danger-300"
            onChange={onChange}
            value={value}
          />
          {(search || password) && (
            <InputRightElement paddingBottom="2px">
              {isShowClearButton && (
                <Icon
                  cursor={'pointer'}
                  onClick={onClearClick}
                  name={'close'}
                  width={20}
                  height={20}
                  style={{ transform: 'scale(0.8)' }}
                />
              )}
              {password && (
                <Icon
                  cursor={'pointer'}
                  onClick={setInputType}
                  name={'eye-outline'}
                  width={30}
                  height={20}
                />
              )}
            </InputRightElement>
          )}
        </InputGroup>
        <Text position={'absolute'} fontSize="sm" color={defaultInput}>
          {errorMessage}
        </Text>
      </Box>
    );
  }
);
