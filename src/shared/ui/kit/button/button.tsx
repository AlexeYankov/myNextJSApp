import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { Icon } from '../icons';

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  labelFontSize?: string;
  labelFontWeight?: string;
  label?: string;
  logOut?: boolean;
  classNameBtnBox?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled' | 'secondary';
} & ComponentPropsWithoutRef<T>;

export const BtnKit = (props: ButtonProps) => {
  const {
    as: Component = 'button',
    children,
    className,
    label,
    labelFontSize = 'sm',
    logOut,
    classNameBtnBox,
    fullWidth,
    labelFontWeight,
    disabled,
    icon,
    variant = 'primary',
    ...rest
  } = props;
  const defaultColor = 'light.--color-light-100';
  return (
    <Button
      isDisabled={disabled}
      variant={variant}
      stroke={defaultColor}
      fill={defaultColor}
      width={fullWidth ? '100%' : ''}
      height={'36px'}
      {...rest}
    >
      {logOut && (
        <Icon
          cursor={'pointer'}
          name={'log-out-outline'}
          width={32}
          height={24}
          style={{ transform: 'scale(0.7)' }}
        />
      )}
      <Text fontSize={labelFontSize} fontWeight={labelFontWeight}>{label}</Text>
      {children}
    </Button>
  );
};
