import { Box, Select } from '@chakra-ui/react';
import { Icon } from '../icons';
import { ChangeEvent, useState } from 'react';

export const SelectKit = () => {
  const [open, setOpen] = useState(false);

  const toggleHandler = () => {
    const selectIcon = document.getElementById('iconSelect');
    setOpen(!open);
    if (open && selectIcon) {
      return (selectIcon.style.transform = 'rotate(0deg)');
    }
    if (!open && selectIcon) {
      selectIcon.style.transform = 'rotate(180deg)';
    }
  };

  const blurHandler = (event: ChangeEvent<Element>) => {
    console.log(event);
    if (event.currentTarget?.id === 'selectID' && open) {
      toggleHandler();
    }
  };
  return (
    <Box style={{ position: 'relative' }}>
      <Icon
        id="iconSelect"
        style={{
          position: 'absolute',
          right: 5,
          top: 8,
          transition: 'all 0.2s ease-out',
        }}
        width={24}
        height={24}
        name={'arrow-ios-Down-outline'}
        fill="white"
      />
      <Select
        onClick={toggleHandler}
        onBlur={blurHandler}
        placeholder="Select option"
        id="selectID"
        // @ts-ignore
        icon={'none'}
      >
        <option value="option1">Option 1</option>
      </Select>
    </Box>
  );
};
