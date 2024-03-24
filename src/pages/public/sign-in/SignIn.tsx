'use client'

import { useCounterStore } from "@/features/counter-store";
import { Button, useColorMode } from "@chakra-ui/react";

export const SignInPage = () => {
  const { count, incrementCount, decrementCount } = useCounterStore()
  const { colorMode, toggleColorMode } = useColorMode()
  const incrementToggle = () => {
    incrementCount();
    toggleColorMode()
  }
  return (
    <div>
      Count: {count} {colorMode}
      <hr />
      <button type="button" onClick={incrementToggle}>
        Increment Count
      </button>
      <Button type="button" color={`${colorMode === 'dark' ? 'brand.button.201' : 'brand.900'}`} onClick={() => void decrementCount()}>
        Decrement Count 
      </Button>
    </div>
  )
}

export default SignInPage;