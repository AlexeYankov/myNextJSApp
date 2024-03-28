import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  useState,
} from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import s from '../../../../public/images/sprite.svg';
import { Icon } from '../icons/icon';
import React from 'react';
import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';

export type TextFieldProps = {
  errorMessage?: FieldError | undefined | string;
  inputId?: string;
  maxW?: string;
  label?: string;
  id?: string;
  onClearClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  password?: boolean;
  search?: boolean;
  foolWidth?: boolean;
  type?: 'password' | 'text' | 'number';
  value?: string | number;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldErrors<{ email: string; password: string; }>;
} & ComponentPropsWithoutRef<'input'>;

export const InputKit = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      disabled,
      foolWidth,
      errorMessage,
      maxW,
      error,
      inputId,
      value,
      onChange,
      label,
      onClearClick,
      password,
      search,
      id,
      placeholder,
      type = 'text',
      register,
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
          // stroke={focused}
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
            {...register(id as string)}
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
            id={id}
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
            <label htmlFor={label}>
              <InputRightElement
                paddingBottom="2px"
                _hover={{ fill: 'light.--color-light-100', cursor: 'pointer' }}
              >
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
                    name={
                      valueType.toString() !== 'text'
                        ? 'eye-off'
                        : 'eye-outline'
                    }
                    width={30}
                    height={20}
                  />
                )}
                {/* {password && valueType === 'text' && (
                  <Icon
                    cursor={'pointer'}
                    onClick={setInputType}
                    name={'eye-outline'}
                    width={30}
                    height={20}
                  />
                )} */}
              </InputRightElement>
            </label>
          )}
        </InputGroup>
        <Text position={'absolute'} marginTop={'70px'} fontSize="sm" color={defaultInput}>
          {/* @ts-ignore */}
          {error && error[id]?.message}
        </Text>
      </Box>
    );
  }
);
