import { Box } from '@chakra-ui/layout'
import React from 'react'

export default function SolutionSubOptBox({ id, name }) {
    return (
        <Box
            cursor={'pointer'}
            w={'24.4%'}
            textAlign={'center'}
            bgColor={'#F6F6F6'}
            borderRadius={'6px'}
            fontSize={'14px'}
            fontFamily={'Inter'}
            padding={'18px 4.8%'}
            height={'87px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            {name}
        </Box>
    )
}
