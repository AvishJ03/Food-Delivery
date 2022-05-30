import { HStack, Image, Input } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
      <HStack h="10vh" justifyContent="center" border="1px solid gray">
          <HStack spacing="10">
              <Image src="/images/logo.svg" alt="logo" />
              <Input variant='filled' placeholder='Search' />
          </HStack>
      </HStack>
  )
}

export default Navbar
