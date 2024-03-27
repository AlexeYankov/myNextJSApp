import logo from '../../../../../public/others/Logo.png';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';
import { BtnKit } from '../../kit/button';
import { InputKit } from '../../kit/input/input';
import { ChangeEvent, useState } from 'react';
import { CheckBoxKit } from '../../kit/checkbox';
import { TabsKit } from '../../kit/tabs';
import { SliderKit } from '../../kit/slider';
import { DropDownKit } from '../../kit/dropdown/dropdown';
import img from '../../../../../public/others/avatar.png';
import { Icon } from '../../kit/icons';
import { RadioGroupKit } from '../../kit/radioGroup';
import { SelectKit } from '../../kit/select';
import { ModalKit } from '../../kit/modal';

const Header = () => {
  const [modal, openModal] = useState(false)
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
        {/* <CheckBoxKit label={'fegerge'}/> */}
        {/* <SliderKit/> */}
        {/* <DropDownKit
          options={[
            { name: 'grg', avatar: img, email: 'rege@gre432423wertgwergergregerergergergergergregergergergerergergr'},
            { title: 'tgrgrrg', icon: <Icon name='search' width={24} height={20} fill='white'/> },
            { title: 'tgrgrrg' },
            { title: 'tgrgrrg' },
            { title: 'tgrgrrg' },
          ]}
        >
                y
        </DropDownKit> */}
        {/* <SelectKit/> */}
        <ModalKit
          title={'modal'}
          fields={[{ fieldName: 'name pack', placeHolder: 'name pack' }]}
          actionTitle="delete Card"
          cover={[]}
          open={modal}
          setOpen={()=>openModal(!modal)}
          checkBoxLabel='Private pack'
        />
        <BtnKit onClick={()=>openModal(!modal)}>modal</BtnKit>
        {/* <RadioGroupKit options={['gregerr', 'label', 'three']}/> */}
        {/* <TabsKit options={[{title: 'one'}, {title: 'two'}, {title: 'two'}, {title: 'two'}]}/> */}
        {/* <CheckBoxKit/> */}
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
