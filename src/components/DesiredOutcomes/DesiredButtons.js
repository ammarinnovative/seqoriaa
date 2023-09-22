import { Box, Button, Icon, Image, Stack, Text } from '@chakra-ui/react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export default function DesiredButton({ id, icon, name, selectedDesireOption, setSelectedDesireOption }) {
    return (
        <Button
            key={id}
            w={'32.8%'}
            background={'#F0F0F0'}
            border={'1px solid'}
            borderColor={name === selectedDesireOption ? '#2B2B2C' : '#E8EDFC'}
            borderRadius={'6px'}
            padding={'32px 17px'}
            _hover={{ bgColor: '#F0F0F0' }}
            _active={{ bgColor: '#F0F0F0' }}
            onClick={() => setSelectedDesireOption(name)}
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
                    <Image src={icon} />
                    <Text
                        fontSize={'16px'}
                        fontWeight={'600'}
                        color={name === selectedDesireOption ? '#2B2B2C' : '#8A959E'}
                    >
                        {name}
                    </Text>
                </Box>
                <Icon fontWeight={'700'} fontSize={'17px'} as={name === selectedDesireOption ? BsChevronUp : BsChevronDown} />
            </Stack>
        </Button>
    )
}
