import { Box, Button, Icon, Image, Stack, Text } from '@chakra-ui/react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export default function HostCloudButton({ findData,id,iconPath, image, imageWhite, name, selectedCloudOption, setSelectedCloudOption }) {
    return (
        <Button
            background={'#F0F0F0'}
            border={'1px solid'}
            bgColor={name === selectedCloudOption?.name ? '#4a4a4a' : '#E8EDFC'}
            borderColor={name === selectedCloudOption?.name ? '#4a4a4a' : '#E8EDFC'}
            borderRadius={'6px'}
            padding={'32px 17px'}
            _hover={{ bgColor: name === selectedCloudOption?.name ? '#4a4a4a' : '#F0F0F0' }}
            _active={{ bgColor: name === selectedCloudOption?.name ? '#4a4a4a' : '#F0F0F0' }}
            onClick={() =>  {setSelectedCloudOption({id,name});findData({name,id,iconPath})}}
            w={'32.8%'}
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
                    {
                        image ?
                            <Image src={name === selectedCloudOption?.name ? imageWhite : image} w={'160px'} height={'35px'} objectFit={'contain'} />
                            :
                            <Text
                                fontSize={'16px'}
                                fontWeight={'600'}
                                color={name === selectedCloudOption?.name ? '#fff' : '#8A959E'}
                            >
                                {name}
                            </Text>
                    }
                </Box>
                <Icon fontWeight={'700'} fontSize={'17px'} as={name === selectedCloudOption?.name ? BsChevronUp : BsChevronDown} color={name === selectedCloudOption?.name ? '#fff' : 'initial'} />
            </Stack>
        </Button>
    )
}
