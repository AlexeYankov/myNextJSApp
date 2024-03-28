'use client';

import { useCounterStore } from '@/features/counter-store';
import { yupResolver } from '@hookform/resolvers/yup';
import { BtnKit } from '@/shared/ui/kit/button';
import { CardKit } from '@/shared/ui/kit/card';
import { CheckBoxKit } from '@/shared/ui/kit/checkbox';
import { InputKit } from '@/shared/ui/kit/input';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { Center, FormControl, Text, useColorMode } from '@chakra-ui/react';
import { SignInData, SignInSchema } from '@/entities/schema/signInSchema';

const fields = ['Email', 'Password'];

export const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(SignInSchema()),
    mode: 'onTouched',
  });
  const processForm: SubmitHandler<SignInData> = (data) => {
    console.log(data);
    // const userAgent = window.navigator.userAgent;
    // data.email = data.email.toLowerCase();
    // const signInResult = await signInAction(data, userAgent);

    // setLoading(false);
    // if (signInResult?.success) {
    //   router.push('/api');
    // } else {
    //   const statusCode = signInResult?.error.statusCode;
    //   const statusMessage = `login.error${statusCode}`;
    //   setLoading(false);
    //   setError('password', {
    //     type: 'manual',
    //     message: statusMessage,
    //   });
    // }
  };
  const complete: any = {
    'current-password': 'current-password',
    email: 'email',
  };
  return (
    <form onSubmit={handleSubmit(processForm)}>
      <CardKit label={'Sign in'} p="7" marginTop="40px" width="420px">
        {fields.map((el, i) => {
          console.log(el);
          const fieldName = el.toLowerCase();
          console.log(complete[fieldName]);
          return (
            <FormControl isInvalid={!errors} key={i}>
              <InputKit
                register={register}
                errorMessage={errors.email?.message}
                autoComplete={
                  fieldName === 'password'
                    ? 'current-password'
                    : complete[fieldName]
                }
                label={el}
                id={fieldName}
                error={errors}
                password={fieldName === 'current-password'}
                type={fieldName === 'password' ? 'password' : 'text'}
              />
            </FormControl>
          );
        })}
        <CheckBoxKit label="Remember me" />
        <Center
          display={'flex'}
          width={'100%'}
          height={'20px'}
          paddingBottom={'30px'}
          justifyContent={'flex-end'}
          color="white"
        >
          <BtnKit
            variant="link"
            label={'Forgot password?'}
            labelFontWeight="400"
          />
        </Center>
        {/* <InputKit fullWidth label={'Sign in'} type="submit" /> */}
        <BtnKit fullWidth label={'Sign in'} type="submit" />
        <Text fontSize={'sm'}>Don't have an account?</Text>
        <BtnKit
          variant="link"
          fullWidth
          label={'Sign Up'}
          labelFontSize="md"
          color={'accent.--color-accent-500'}
        />
      </CardKit>
    </form>
  );
};

export default SignInPage;
