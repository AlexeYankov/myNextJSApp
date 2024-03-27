import {
  Text,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';
import { overflowStyle, overflowStyleEmail, triangleDecorationStyle } from './dropdownStyles';

type DropDownType = {
  children: React.ReactNode;
  options: Array<DropdownOptionType>;
};

type DropdownOptionType = {
  name?: string;
  email?: string;
  avatar?: StaticImageData;
  icon?: React.ReactNode;
  title?: string;
};

export const DropDownKit = (prop: DropDownType) => {
  const { options, children } = prop;
  return (
    <Menu>
      <MenuButton
        as={Button}
        bg="none"
        _hover={{ bg: 'none' }}
        _active={{ bg: 'none' }}
      >
        {children}
      </MenuButton>
      <MenuList>
        <div style={triangleDecorationStyle}></div>
        {options.map((el, i) => {
          return (
            <MenuItem
              key={i}
              style={{ borderBottom: i === options.length - 1 ? 'none' : '' }}
              gap="2"
              fontSize={'sm'}
            >
              {el.avatar && (
                <Image
                  src={el.avatar}
                  width={40}
                  height={40}
                  alt="user_photo"
                />
              )}
              <Box flexDirection={'column'} display={'flex'}>
                <span style={overflowStyle}>{el.name}</span>
                <span style={overflowStyleEmail}>{el.email}</span>
              </Box>
              {el.icon}
              {el.title}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
