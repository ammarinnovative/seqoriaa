import { Box, Icon, Image, Stack, Button, Heading, Select, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, Input as CharkInput } from "@chakra-ui/react";
import { Typography, Input, Form, Divider } from 'antd';
import { MinusSquareOutlined, PlusSquareOutlined, UserOutlined } from '@ant-design/icons';
import { HiOutlineKey } from 'react-icons/hi'
import { AiOutlineIdcard } from 'react-icons/ai'
import { otherCloud } from "../../utilities/cloudOnBoardingData";
import { useRef, useState } from "react";

export default function AdditionalPeers({ image, id, name }) {

    return (
        <Stack w={'100%'}>

            <Stack
                direction={'row'}
                alignItems={'center'}
                w={'full'}
                gap={'30px'}
                spacing={0}
            >
                <Stack w={'full'}>
                    <Typography.Text className="formLabel">Login ID</Typography.Text>
                    <Form.Item name="userId">
                        <Input style={{ marginBottom: '26px', padding: '14px' }} size="large" placeholder="*****************" prefix={<UserOutlined />} />
                    </Form.Item>
                </Stack>
                <Stack w={'full'}>
                    <Typography.Text className="formLabel">Services Token Key</Typography.Text>
                    <Form.Item name="serviceToken">
                        <Input style={{ marginBottom: '26px', padding: '14px' }} size="large" placeholder="*****************" prefix={<Icon as={HiOutlineKey} />} />
                    </Form.Item>
                </Stack>
            </Stack>
            <Stack w={'full'}>
                <Typography.Text className="formLabel">MFA Token</Typography.Text>
                <Form.Item name="MFAtoken">
                    <Input style={{ marginBottom: '26px', padding: '14px' }} size="large" placeholder="*****************" prefix={<Icon as={AiOutlineIdcard} />} />
                </Form.Item>
            </Stack>
            <Stack
                direction={'row'}
                alignItems={'center'}
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
                >Login</Button>
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


        </Stack >
    )
}
