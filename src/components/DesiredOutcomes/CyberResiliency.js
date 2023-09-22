import { Box, Button, Icon, Select, Stack, Text } from '@chakra-ui/react'
import { Divider, Form, Input, Typography } from 'antd'
import { desiredExecutors, desiredCompliance } from '../../utilities/desiredOutcomesData'
import { BsChevronDown } from 'react-icons/bs'

export default function CyberResiliency() {

    return (
        <Stack>
            <Stack
                className='cyberResiliencyMain'
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Box
                    w={'30%'}
                >
                    <Typography.Text>Rules Name</Typography.Text>
                    <Form.Item name="ruleName">
                        <Input
                            size="large"
                            placeholder="Check Vms & MFA setting"
                        />
                    </Form.Item>
                </Box>
                <Box
                    w={'30%'}
                >
                    <Typography.Text>Rule Key</Typography.Text>
                    <Form.Item name="ruleKey">
                        <Input
                            size="large"
                            placeholder="Check Vms & MFA setting"
                        />
                    </Form.Item>
                </Box>
                <Box
                    w={'15%'}
                >
                    <Select
                        _focusVisible={{ outline: 'none' }}
                        border={'1px solid #d9d9d9'}
                        borderRadius={8}
                    >
                        <option style={{ display: 'none' }} value={''}>Vendor</option>
                        <option value='aws'>AWS</option>
                        <option value='gcp'>GCP</option>
                        <option value='azure'>Azure</option>
                        <option value='zoom'>Zoom</option>
                    </Select>
                </Box>
                <Box
                    w={'25%'}
                >
                    <Select
                        _focusVisible={{ outline: 'none' }}
                        border={'1px solid #d9d9d9'}
                        borderRadius={8}
                    >
                        <option style={{ display: 'none' }} value={''}>Account Configuration</option>
                        <option value='AWS configuration 1'>AWS configuration 1</option>
                        <option value='AWS configuration 1'>AWS configuration 1</option>
                        <option value='azure'>Azure</option>
                        <option value='zoom'>Zoom</option>
                    </Select>
                </Box>

            </Stack>
            <Divider style={{ margin: '30px 0' }} />
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                bgColor={'#4A4A4A'}
                borderRadius={'6px'}
                padding={'20px 30px'}
                mb={'45px !important'}
            >
                <Text
                    fontFamily={'Inter'}
                    fontSize={'16px'}
                    fontWeight={'600'}
                    color={'#fff'}
                >
                    Executors</Text>
                <Select
                    w={'235px'}
                    background={'#fff'}
                    borderRadius={8}
                >
                    <option style={{ display: 'none' }}>Add</option>
                    <option>Rest API</option>
                    <option>Command Line CLI</option>
                </Select>
            </Stack>
            <Stack
                direction={'row'}
                alignItems={'center'}
                flexWrap={'wrap'}
                spacing={0}
                gap={'10px'}
            >
                {
                    desiredExecutors?.map((v, i) =>
                        <Button
                            key={i}
                            w={'32.8%'}
                            background={'#F0F0F0'}
                            border={'1px solid'}
                            borderColor={'#E8EDFC'}
                            borderRadius={'6px'}
                            padding={'32px 17px'}
                            _hover={{ bgColor: '#F0F0F0' }}
                            _active={{ bgColor: '#F0F0F0' }}
                        // onClick={() => setSelectedDesireOption(name)}
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
                                    <Text
                                        fontSize={'16px'}
                                        fontWeight={'600'}
                                        color={'#8A959E'}
                                    >
                                        {v.name}
                                    </Text>
                                </Box>
                                <Icon fontWeight={'700'} fontSize={'17px'} as={BsChevronDown} />
                            </Stack>
                        </Button>
                    )
                }
            </Stack>
            <Divider style={{ margin: '30px 0' }} />
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                bgColor={'#4A4A4A'}
                borderRadius={'6px'}
                padding={'20px 30px'}
                mb={'45px !important'}
            >
                <Text
                    fontFamily={'Inter'}
                    fontSize={'16px'}
                    fontWeight={'600'}
                    color={'#fff'}
                >
                    Compliance Rules</Text>
                <Select
                    w={'235px'}
                    background={'#fff'}
                    borderRadius={8}
                >
                    <option style={{ display: 'none' }}>Add</option>
                    <option>Rules</option>
                </Select>
            </Stack>
            <Stack
                direction={'row'}
                alignItems={'center'}
                flexWrap={'wrap'}
                spacing={0}
                gap={'10px'}
            >
                {
                    desiredCompliance?.map((v, i) =>
                        <Button
                            key={i}
                            w={'32.8%'}
                            background={'#F0F0F0'}
                            border={'1px solid'}
                            borderColor={'#E8EDFC'}
                            borderRadius={'6px'}
                            padding={'32px 17px'}
                            _hover={{ bgColor: '#F0F0F0' }}
                            _active={{ bgColor: '#F0F0F0' }}
                        // onClick={() => setSelectedDesireOption(name)}
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
                                    <Text
                                        fontSize={'16px'}
                                        fontWeight={'600'}
                                        color={'#8A959E'}
                                    >
                                        {v.name}
                                    </Text>
                                </Box>
                                <Icon fontWeight={'700'} fontSize={'17px'} as={BsChevronDown} />
                            </Stack>
                        </Button>
                    )
                }
            </Stack>
            <Stack
                mt={'50px !important'}
                direction={'row'}
                alignItems={'center'}
                justifyContent={'flex-end'}
            >
                <Button
                    w={'190px'}
                    bgColor={'#4A4A4A'}
                    color={'#fff'}
                    padding={'22px 0'}
                    fontSize={'16px'}
                    fontWeight={'500'}
                    border={'2px solid #4A4A4A'}
                    _hover={{
                        bgColor: 'transparent',
                        color: '#4A4A4A'
                    }}
                >Save</Button>
                <Button
                    w={'190px'}
                    bgColor={'transparent'}
                    color={'#8A959E'}
                    padding={'22px 0'}
                    fontSize={'16px'}
                    fontWeight={'500'}
                    border={'2px solid transparent'}
                    _hover={{
                        borderColor: '#4A4A4A',
                        color: '#4A4A4A'
                    }}
                >Cancel</Button>
            </Stack>
        </Stack>
    )
}
