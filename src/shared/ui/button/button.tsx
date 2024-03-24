import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';
import { Icon } from '../icons';

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  logOut?: boolean;
  classNameBtnBox?: string;
  fullWidth?: boolean;
  px?: string;
  icon?: ReactNode;
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled' | 'secondary';
} & ComponentPropsWithoutRef<T>;

export const BtnKit = (props: ButtonProps) => {
  const {
    as: Component = 'button',
    children,
    className,
    logOut,
    classNameBtnBox,
    fullWidth,
    px,
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
      px={px}
      {...rest}
      stroke={defaultColor}
      fill={defaultColor}
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
      {children}
    </Button>
  );
};
