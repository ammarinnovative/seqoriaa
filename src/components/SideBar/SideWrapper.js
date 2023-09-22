import { Stack } from '@chakra-ui/react'
import React from 'react'
import SimpleSidebar from './index.js'

export default function SideWrapper({children}) {
  return (
    <Stack
        direction={'row'}
        gap={'120px'}
        bgColor={'#F6F6F6'}
    >
        <SimpleSidebar />
        {children}
    </Stack>
  )
}
