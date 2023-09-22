import { Box, Button, Icon, Stack, Text } from '@chakra-ui/react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export default function CloudOptionButton({ icon, name, selectedCloudOption, setSelectedCloudOption }) {
    return (
        <Button
            w={'32.9%'}
            background={'#F0F0F0'}
            border={'1px solid'}
            borderColor={name === selectedCloudOption ? '#2B2B2C' : '#E8EDFC'}
            borderRadius={'6px'}
            padding={'32px 17px'}
            _hover={{bgColor: '#F0F0F0'}}
            _active={{bgColor: '#F0F0F0'}}
            onClick={() => setSelectedCloudOption(name)}
        >
            <Stack
                w={'full'}
                direction={'row'}
                alignItems={'center'}
                gap={'10px'}
                justifyContent={'space-between'}
            >
                <Box
                    display={'flex'}
                    gap={'10px'}
                    alignItems={'center'}
                >
                    <Icon fontSize={'18px'} as={icon} />
                    <Text
                        fontSize={'16px'}
                        fontWeight={'600'}
                        color={name === selectedCloudOption ? '#2B2B2C' : '#8A959E'}
                        >
                        {name}
                    </Text>
                </Box>
                <Icon fontWeight={'700'} fontSize={'17px'} as={name === selectedCloudOption ? BsChevronUp : BsChevronDown} />
            </Stack>
        </Button>
    )
}
