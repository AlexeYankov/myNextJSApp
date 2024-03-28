import { Box, Center, Text } from '@chakra-ui/react';

export const CardKit = (props: any) => {
  const { title, children, label, ...rest } = props;
  return (
    <Box
      bg="dark.--color-dark-700"
      border="1px solid"
      borderColor={'dark.--color-dark-500'}
      p="2"
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      gap='15px'
      {...rest}
    >
      <Center>
        <Text fontSize="2xl">{label}</Text>
      </Center>
      {children}
    </Box>
  );
};
