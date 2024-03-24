import logo from '../../../../../public/others/Logo.png';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';
import { BtnKit } from '../../button';
import { InputKit } from '../../input/input';
import { ChangeEvent, useState } from 'react';
import { CheckBoxKit } from '../../checkbox';
import { TabsKit } from '../../tabs';

const Header = () => {
  // const [input, setInput] = useState<string>('');
  // const clearInput = () => {
  //   setInput('')
  //   console.log('clear')
  // }
  // const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.currentTarget.value)
  //   setInput(event.currentTarget.value)
  // }
  return (
    <Box
      bg="dark.--color-dark-700"
      w="100%"
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      borderBottom={'1px'}
      borderColor="dark.--color-dark-500"
    >
      <Box
        w="100%"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW={'1440px'}
        height={'60px'}
        px={25}
      >
        <Image priority src={logo} width={156} height={50} alt={'logo'} />
        <BtnKit px={'7'}>
          <Text fontSize="sm">Sign In</Text>
        </BtnKit>
        <TabsKit options={[{title: 'one'}, {title: 'two'}, {title: 'two'}, {title: 'two'}]}/>
        {/* <CheckBoxKit/>
        <InputKit
          onChange={inputHandler}
          value={input}
          onClearClick={clearInput}
        /> */}

        {/* <Button></Button> */}
        {/* <Image></Image>
        <div>
            <Button></Button>
            <Button></Button>
            <Button></Button>
        </div> */}
      </Box>
    </Box>
  );
};

export default Header;
