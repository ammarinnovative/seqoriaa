import { Box, Breadcrumb, Modal, BreadcrumbItem, BreadcrumbLink, Button, Heading, Icon, Image, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Text, useDisclosure } from "@chakra-ui/react";
import riskLogo from '../../../assets/images/desired-icons/riskLogo.svg'
import { Form, Input, Typography } from "antd";
import { VscSearch } from "react-icons/vsc";
import { useRef, useState } from "react";
import EnterpriseRiskLineChart from "./EnterpriseRiskLineChart";
import EnterpriseRiskPieChart from "./EnterpriseRiskPieChart";
import EnterpriseRiskTable from "./EnterpriseRiskTable";

export default function EnterpriseRiskTolerance() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isAssignOpen, onOpen: onAssignOpen, onClose: onAssignClose } = useDisclosure()
    const [riskSummaryList, setSiskSummaryList] = useState(['Host Cloud', 'Multi-cloud', 'Infrastructure', 'WLAN', 'Application', 'Data', 'End Points', 'Edge', 'Remote/Mobile', 'Generate Report']);
    const [selectedSummaryItem, setSelectedSummaryItem] = useState('WLAN');

    return (
        <Stack>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'flex-end'}
                className="breadCrumMain"
            >
                <Breadcrumb separator='|'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>noah.gonzales@meraki.com</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>my profile</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>sign out</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink onClick={() => { onOpen() }}>demo networks</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink onClick={() => { onAssignOpen() }}>show admin</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Stack>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                borderBottom={'1px solid #adadad'}
                padding={'0 0 10px 0'}
                margin={'0 0 10px 0'}
            >
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    flex={5}
                    className="logoSideBox"
                    gap={'20px'}
                >
                    <Image src={riskLogo} w={'85px'} mr={'6%'} />
                    <Box>
                        <Typography.Text>Network</Typography.Text>
                        <Form.Item name="network">
                            <Select
                                _focusVisible={{ outline: 'none' }}
                                border={'1px solid #d9d9d9'}
                                borderRadius={2}
                            >
                                <option style={{ display: 'none' }} value={''}>Meraki Corp - Wireless</option>
                                <option value='aws'>option 1</option>
                                <option value='gcp'>option 2</option>
                            </Select>
                        </Form.Item>
                    </Box>
                    <Box>
                        <Typography.Text>SSID</Typography.Text>
                        <Form.Item name="network">
                            <Select
                                _focusVisible={{ outline: 'none' }}
                                border={'1px solid #d9d9d9'}
                                borderRadius={2}
                            >
                                <option style={{ display: 'none' }} value={''}>All</option>
                                <option value='aws'>option 1</option>
                                <option value='gcp'>option 2</option>
                            </Select>
                        </Form.Item>
                    </Box>
                </Stack>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    flex={1}
                    justifyContent={'flex-end'}
                >
                    <Icon as={VscSearch} fontWeight={'extrabold'} fontSize={'20px'} />
                    <Form.Item name="ruleName">
                        <Input
                            style={{ borderRadius: 2, width: '200px' }}
                            size="large"
                            placeholder="Search dashboard"
                        />
                    </Form.Item>
                </Stack>
            </Stack>
            <Stack
                direction={'row'}
                w={'full'}
            >
                <Box
                    w={'200px'}
                    bgColor={'#F2F2F2'}
                >
                    <Heading
                        fontSize={'14px'}
                        fontWeight={'700'}
                        padding={'10px 0 10px 10px'}
                        borderLeft={'6px solid #A9A9A9'}
                        borderBottom={'1px solid #adadad'}
                    >Enterprise Risk Summary</Heading>
                    <Box className="riskSummaryList">
                        <ul>
                            {
                                riskSummaryList?.map((v, i) =>
                                    <li className={selectedSummaryItem === v ? 'current' : ''} key={i} onClick={() => setSelectedSummaryItem(v)}>{v}</li>
                                )
                            }
                        </ul>
                    </Box>
                </Box>
                <Box w={'85%'}>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                    >
                        <Box w='75%'>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                gap={'25px'}
                            >
                                <Heading
                                    fontSize={'18px'}
                                    padding={'8px 0'}
                                    fontWeight={700}
                                >Enterprise Risk History</Heading>
                                <Stack
                                    direction={'row'}
                                >
                                    <Text fontWeight={'700'} fontSize={'14px'}>Jul 09 17:56 PDT</Text>
                                    <Text fontSize={'14px'}>to</Text>
                                    <Text fontWeight={'700'} fontSize={'14px'}>Jul 16 17:56 PDT</Text>
                                </Stack>
                                <Text fontSize={'14px'}>268.87 GB (203.57 GB received, 65.3 GB sent)</Text>
                            </Stack>
                            <Stack>
                                <EnterpriseRiskLineChart />
                            </Stack>
                        </Box>
                        <Stack w='20%'>
                            <EnterpriseRiskPieChart />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        padding={'10px 0'}
                    >
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            gap={'15px'}
                        >
                            <Select
                                _focusVisible={{ outline: 'none' }}
                                border={'1px solid #d9d9d9'}
                                borderRadius={2}
                                w={'300px'}
                            >
                                <option style={{ display: 'none' }}>Asset Type - ID</option>
                                <option>Asset Type - ID 1</option>
                                <option>Asset Type - ID 2</option>
                                <option>Asset Type - ID 3</option>
                                <option>Asset Type - ID 4</option>
                            </Select>
                            <Select
                                _focusVisible={{ outline: 'none' }}
                                border={'1px solid #d9d9d9'}
                                borderRadius={2}
                                w={'300px'}
                            >
                                <option style={{ display: 'none' }}>Category</option>
                                <option>Compliance</option>
                                <option>Security Monitoring & Management</option>
                                <option>Data Protection & Encryption</option>
                                <option>IAM & Access Control</option>
                                <option >ToI Fraud & Communications Fraud</option>
                                <option >Denail of Services (Dos, DDOs, TDos)</option>
                            </Select>
                        </Box>
                        <Box>
                            <Select
                                _focusVisible={{ outline: 'none' }}
                                border={'1px solid #d9d9d9'}
                                borderRadius={2}
                            >
                                <option style={{ display: 'none' }}>Download as</option>
                                <option >CSV</option>
                                <option >PDF</option>
                                <option >PNG</option>
                            </Select>
                        </Box>
                    </Stack>
                    <EnterpriseRiskTable onOpen={onOpen} onAssignOpen={onAssignOpen} />
                </Box>
            </Stack>
            <Modal isOpen={isOpen} onClose={onClose} size={'lg'} padding={'40px'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Warning</ModalHeader>
                    <ModalBody>
                        <Text fontFamily={"Inter"} fontSize={'16px'} colo={'#667085'} marginBottom={'20px'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>
                        <Box
                            border={'1px solid #adadad'}
                            padding={'10px'}
                            cursor={'pointer'}
                        >
                            <Text fontSize={'15px'} fontFamily={'Inter'}>Select rule info</Text>
                            <Select
                                cursor={'pointer'}
                                border={'none'}
                                _focusVisible={{ outline: 'none' }}
                            >
                                <option>Malicious</option>
                                <option>As Per Design</option>
                                <option>Accepted Risk</option>
                            </Select>
                        </Box>
                        <Stack
                            mt={'30px !important'}
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
                            >Yes</Button>
                            <Button
                                onClick={() => onClose()}
                                w={'80px'}
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
                            >No</Button>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Modal isOpen={isAssignOpen} onClose={onAssignClose} size={'lg'} padding={'40px'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Assign Issue(s)</ModalHeader>
                    <ModalBody>
                        <Text fontFamily={"Inter"} fontSize={'16px'} colo={'#667085'} marginBottom={'20px'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>
                        <Box
                            border={'1px solid #adadad'}
                            padding={'10px'}
                            cursor={'pointer'}
                        >
                            <Text fontSize={'15px'} fontFamily={'Inter'}>Select rule info</Text>
                            <Select
                                cursor={'pointer'}
                                border={'none'}
                                _focusVisible={{ outline: 'none' }}
                            >
                                <option>Service Now</option>
                                <option>seqoria</option>
                            </Select>
                        </Box>
                        <Stack
                            mt={'30px !important'}
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
                            >Assign</Button>
                            <Button
                                onClick={() => onAssignClose()}
                                w={'80px'}
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
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Stack>
    )
}
