'use client';

import SignInPage from '@/pages/public/sign-in/SignIn';
import Header from '@/shared/ui/components/header/Header';
import { Center } from '@chakra-ui/react';

const SignIn = () => {
  return (
    <Center flexDirection={'column'}>
      <Header />
      <SignInPage />;
    </Center>
  );
};

export default SignIn;
