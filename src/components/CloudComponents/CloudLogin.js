import {
  Box,
  Icon,
  Image,
  Input,
  Stack,
  Button,
  Heading,
  Select,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Input as CharkInput,
} from '@chakra-ui/react';
import { Typography, Form, Divider } from 'antd';
import {
  MinusSquareOutlined,
  PlusSquareOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { HiOutlineKey } from 'react-icons/hi';
import { AiOutlineIdcard } from 'react-icons/ai';
import { otherCloud } from '../../utilities/cloudOnBoardingData';
import { useRef, useState } from 'react';

export default function CloudLogin({ filterData,mainVal, sendData, getMainData }) {
  const rgnFile = useRef(null);
  const formatFile = useRef(null);
  const [otherCloudSelect, setOtherCloudSelect] = useState('');
  const [configFileData, setConfigFileData] = useState({
    rgn: '',
    name: '',
    content: '',
  });
  const [variableData, setVariableData] = useState({
    rgn: '',
    format: '',
  });

  return (
    <Stack w={'100%'}>
      <>
        <Stack direction={'row'} justifyContent={'space-between'} gap={'50px'}>
          <Box w={'full'} className="vendorConfigOpt">
            <Heading fontSize={'22px'} color={'#2626262'} margin={'0 0 20px 0'}>
              Add / Update Vendor Configuration
            </Heading>
            <Typography.Text>Name</Typography.Text>
            <Input
              size="large"
              p={4}
              borderRadius={6}
              placeholder="Production Account Configuration"
              value={filterData?.name ?? null}
            />
            <Typography.Text>ClientId / AccessKeyId</Typography.Text>
            <Input
              size="large"
              p={4}
              borderRadius={6}
              placeholder="123xxx555xxx"
              value={
                filterData.configurations.host.credentials.clientId ?? null
              }
            />
            <Typography.Text>
              Client Secret Key / Access Key Secret
            </Typography.Text>
            <Input
              size="large"
              p={4}
              borderRadius={6}
              placeholder="kjuyt67765tgg"
              value={
                filterData.configurations.host.credentials.clientSecret ?? null
              }
            />
            <Typography.Text>Tenant Id</Typography.Text>
            <Input
              size="large"
              p={4}
              borderRadius={6}
              placeholder="13333558ki8u-00ikxn"
              value={
                filterData.configurations.host.credentials.tenantId ?? null
              }
            />
            <Typography.Text>Subscription Id</Typography.Text>
            <Input
              size="large"
              p={4}
              borderRadius={6}
              placeholder="4lkxbb0(kk_@2"
              value={
                filterData.configurations.host.credentials.subscriptionId ??
                null
              }
            />
          </Box>
          <Box w={'full'}>
            <Accordion defaultIndex={[0, 1]} allowMultiple allowToggle>
              <AccordionItem
                border={'1px solid #E8EDFC'}
                borderRadius={'6px'}
                mb={'30px'}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          borderRadius={'6px'}
                        >
                          Custom Variable
                        </Box>
                        {isExpanded ? (
                          <Icon as={PlusSquareOutlined} fontSize="18px" />
                        ) : (
                          <Icon as={MinusSquareOutlined} fontSize="18px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={0} px={0}>
                      <Stack
                        bgColor={'#4a4a4a'}
                        color={'#fff'}
                        direction={'row'}
                      >
                        <Text
                          py={'20px'}
                          w={'150px'}
                          borderRight={'1px solid #E8EDFC'}
                          pl={'20px'}
                        >
                          Variable / Key
                        </Text>
                        <Text py={'20px'} pl={'20px'}>
                          Value
                        </Text>
                      </Stack>
                      <Stack
                        direction={'row'}
                        alignItems={'center'}
                        spacing={0}
                      >
                        <Text
                          border={'1px solid #E8EDFC'}
                          py={'20px'}
                          w={'150px'}
                          pl={'20px'}
                        >
                          RGN
                        </Text>
                        <Box w={'78%'} border={'1px solid #E8EDFC'} p={'12px'}>
                          <Input
                            border={'1px solid #E8EDFC'}
                            style={{ width: '82px' }}
                            size="large"
                            name='rgn1'
                            value={mainVal.rgn1}
                            onChange={getMainData}
                            placeholder="Value 1"
                          />
                        </Box>
                      </Stack>
                      <Stack
                        direction={'row'}
                        spacing={0}
                        alignItems={'center'}
                      >
                        <Text
                          border={'1px solid #E8EDFC'}
                          py={'20px'}
                          w={'150px'}
                          pl={'20px'}
                        >
                          Format
                        </Text>
                        <Box border={'1px solid #E8EDFC'} w={'78%'} p={'12px'}>
                          <Input
                            border={'1px solid #E8EDFC'}
                            style={{ width: '82px' }}
                            size="large"
                            value={mainVal.format}
                            name='format'
                            onChange={getMainData}
                            placeholder="Value 2"
                          />
                        </Box>
                      </Stack>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem
                border={'1px solid #E8EDFC'}
                borderRadius={'6px'}
                mb={'30px'}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          borderRadius={'6px'}
                        >
                          Configuration File Upload
                        </Box>
                        {isExpanded ? (
                          <Icon as={PlusSquareOutlined} fontSize="18px" />
                        ) : (
                          <Icon as={MinusSquareOutlined} fontSize="18px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={0} px={0}>
                      <Stack
                        bgColor={'#4a4a4a'}
                        color={'#fff'}
                        direction={'row'}
                      >
                        <Text
                          py={'20px'}
                          w={'150px'}
                          borderRight={'1px solid #E8EDFC'}
                          pl={'20px'}
                        >
                          Name
                        </Text>
                        <Text py={'20px'} pl={'20px'}>
                          File
                        </Text>
                      </Stack>
                      <Stack
                        direction={'row'}
                        alignItems={'center'}
                        spacing={0}
                      >
                        <Text
                          border={'1px solid #E8EDFC'}
                          py={'20px'}
                          w={'150px'}
                          pl={'20px'}
                        >
                          Name
                        </Text>
                        <Box border={'1px solid #E8EDFC'} w={'78%'} p={'12px'}>
                          <Input
                            border={'1px solid #E8EDFC'}
                            style={{ width: '82px' }}
                            size="large"
                            name='name'
                            value={mainVal.name}
                            type='text'
                            onChange={getMainData}
                            placeholder="name"
                          />
                        </Box>
                      </Stack>
                      <Stack
                        direction={'row'}
                        alignItems={'center'}
                        spacing={0}
                      >
                        <Text
                          border={'1px solid #E8EDFC'}
                          py={'20px'}
                          w={'150px'}
                          pl={'20px'}
                        >
                          RGN
                        </Text>
                        <Box border={'1px solid #E8EDFC'} w={'78%'} p={'12px'}>
                          <Input
                            border={'1px solid #E8EDFC'}
                            style={{ width: '82px' }}
                            size="large"
                            name='rgn2'
                            value={mainVal.rgn2}
                            onChange={getMainData}
                            placeholder="Value"
                          />
                        </Box>
                      </Stack>
                      <Stack direction={'row'} spacing={0}>
                        <Text
                          border={'1px solid #E8EDFC'}
                          py={'20px'}
                          w={'150px'}
                          pl={'20px'}
                        >
                          Content
                        </Text>
                        <Box
                          border={'1px solid #E8EDFC'}
                          w={'78%'}
                          p={'12px'}
                          display={'flex'}
                          alignItems={'center'}
                          gap={'10px'}
                        >
                          <CharkInput
                            border={'1px solid #E8EDFC'}
                            // style={{ width: '82px', display: 'none' }}
                            size="large"
                            placeholder="Value 2"
                            name='content'
                            type="file"
                            onChange={getMainData}
                          />
                        </Box>
                      </Stack>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
        </Stack>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'flex-end'}
        >
          <Button
            w={'190px'}
            bgColor={'#4A4A4A'}
            color={'#fff'}
            padding={'22px 0'}
            onClick={sendData}
            fontSize={'16px'}
            fontWeight={'500'}
            border={'2px solid #4A4A4A'}
            _hover={{
              bgColor: 'transparent',
              color: '#4A4A4A',
            }}
          >
            Save
          </Button>
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
              color: '#4A4A4A',
            }}
          >
            Cancel
          </Button>
        </Stack>
      </>
    </Stack>
    // <Stack w={'100%'}>
    //     <Box>
    //         {
    //             image ?
    //                 <Image src={image} width={'225px'} height={'50px'} margin={'0 auto 36px 0'} objectFit={'contain'} />
    //                 :
    //                 <Stack>
    //                     <Stack
    //                         direction={'row'}
    //                         alignItems={'flex-end'}
    //                         justifyContent={'space-between'}
    //                     >
    //                         <Heading w={'30%'} fontSize={'22px'} margin={'0 0 10px 0'}>Add / Update Vendor</Heading>
    //                         <Stack w={'60%'}>
    //                             <Typography.Text>Description</Typography.Text>
    //                             <Select
    //                                 _focusVisible={{ outline: 'none' }}
    //                                 border={'1px solid #d9d9d9'}
    //                                 borderRadius={8}
    //                             >
    //                                 <option style={{ display: 'none' }} value={''}>Company .Co</option>
    //                                 <option value='1'>GCP</option>
    //                                 <option value='2'>MSTeams</option>
    //                                 <option value='3'>Zoom</option>
    //                             </Select>
    //                         </Stack>
    //                     </Stack>
    //                     <Divider style={{ margin: '2.25rem 0' }} />
    //                 </Stack>
    //         }
    //     </Box>
    //     {
    //         image ?
    //             <>
    //                 <Stack
    //                     direction={'row'}
    //                     alignItems={'center'}
    //                     w={'full'}
    //                     gap={'30px'}
    //                     spacing={0}
    //                 >
    //                     <Stack w={'full'}>
    //                         <Typography.Text className="formLabel">Login ID</Typography.Text>
    //                         <Form.Item name="userId">
    //                             <Input style={{ marginBottom: '26px', padding: '14px' }} size="large" placeholder="*****************" prefix={<UserOutlined />} />
    //                         </Form.Item>
    //                     </Stack>
    //                     <Stack w={'full'}>
    //                         <Typography.Text className="formLabel">Services Token Key</Typography.Text>
    //                         <Form.Item name="serviceToken">
    //                             <Input style={{ marginBottom: '26px', padding: '14px' }} size="large" placeholder="*****************" prefix={<Icon as={HiOutlineKey} />} />
    //                         </Form.Item>
    //                     </Stack>
    //                 </Stack>
    //                 <Stack w={'full'}>
    //                     <Typography.Text className="formLabel">MFA Token</Typography.Text>
    //                     <Form.Item name="MFAtoken">
    //                         <Input style={{ marginBottom: '26px', padding: '14px' }} size="large" placeholder="*****************" prefix={<Icon as={AiOutlineIdcard} />} />
    //                     </Form.Item>
    //                 </Stack>
    //                 <Stack
    //                     direction={'row'}
    //                     alignItems={'center'}
    //                 >
    //                     <Button
    //                         w={'190px'}
    //                         bgColor={'#4A4A4A'}
    //                         color={'#fff'}
    //                         padding={'22px 0'}
    //                         fontSize={'16px'}
    //                         fontWeight={'500'}
    //                         border={'2px solid #4A4A4A'}
    //                         _hover={{
    //                             bgColor: 'transparent',
    //                             color: '#4A4A4A'
    //                         }}
    //                     >Login</Button>
    //                     <Button
    //                         w={'190px'}
    //                         bgColor={'transparent'}
    //                         color={'#8A959E'}
    //                         padding={'22px 0'}
    //                         fontSize={'16px'}
    //                         fontWeight={'500'}
    //                         border={'2px solid transparent'}
    //                         _hover={{
    //                             borderColor: '#4A4A4A',
    //                             color: '#4A4A4A'
    //                         }}
    //                     >Cancel</Button>
    //                 </Stack>
    //             </>
    //             : otherCloudSelect === '' ?
    //                 <>
    //                     <Stack
    //                         mb={'30px'}
    //                         direction={'row'}
    //                         alignItems={'center'}
    //                         justifyContent={'space-between'}
    //                     >
    //                         <Heading
    //                             color={'#2B2B2C'}
    //                             fontSize={'16px'}
    //                         >
    //                             Vendor Account Configuration
    //                         </Heading>
    //                         <Select
    //                             w={'230px'}
    //                             _focusVisible={{ outline: 'none' }}
    //                             border={'1px solid #d9d9d9'}
    //                             borderRadius={8}
    //                         >
    //                             <option style={{ display: 'none' }} value={''}></option>
    //                             <option value='add'>Add</option>
    //                             <option value='configuration'>Configuration</option>
    //                         </Select>
    //                     </Stack>
    //                     <Stack
    //                         direction={'row'}
    //                         alignItems={'center'}
    //                         flexWrap={'wrap'}
    //                         spacing={0}
    //                         gap={2}
    //                     >
    //                         {
    //                             otherCloud?.map((v, i) =>
    //                                 <Button
    //                                     key={i}
    //                                     w={'49.7%'}
    //                                     background={'#F0F0F0'}
    //                                     border={'1px solid'}
    //                                     borderColor={'#E8EDFC'}
    //                                     borderRadius={'6px'}
    //                                     padding={'32px 17px'}
    //                                     _hover={{ bgColor: '#F0F0F0' }}
    //                                     _active={{ bgColor: '#F0F0F0' }}
    //                                     onClick={() => setOtherCloudSelect(v.name)}
    //                                 >
    //                                     <Stack
    //                                         w={'full'}
    //                                         direction={'row'}
    //                                         alignItems={'center'}
    //                                         gap={'10px'}
    //                                         justifyContent={'space-between'}
    //                                     >
    //                                         <Box
    //                                             display={'flex'}
    //                                             gap={'10px'}
    //                                             alignItems={'center'}
    //                                         >
    //                                             <Icon fontSize={'18px'} as={v.icon} />
    //                                             <Text
    //                                                 fontSize={'16px'}
    //                                                 fontWeight={'600'}
    //                                                 color={'#8A959E'}
    //                                             // color={name === selectedCloudOption ? '#2B2B2C' : '#8A959E'}
    //                                             >
    //                                                 {v.name}
    //                                             </Text>
    //                                         </Box>
    //                                     </Stack>
    //                                 </Button>
    //                             )
    //                         }
    //                     </Stack>
    //                 </>
    //                 :
    //                 <>
    //                     <Stack
    //                         direction={'row'}
    //                         justifyContent={'space-between'}
    //                         gap={'50px'}
    //                     >
    //                         <Box w={'full'} className="vendorConfigOpt">
    //                             <Heading
    //                                 fontSize={'22px'}
    //                                 color={'#2626262'}
    //                                 margin={'0 0 20px 0'}
    //                             >
    //                                 Add / Update Vendor Configuration
    //                             </Heading>
    //                             <Typography.Text>Name</Typography.Text>
    //                             <Input
    //                                 size="large"
    //                                 placeholder="Production Account Configuration"
    //                             />
    //                             <Typography.Text>ClientId / AccessKeyId</Typography.Text>
    //                             <Input
    //                                 size="large"
    //                                 placeholder="123xxx555xxx"
    //                             />
    //                             <Typography.Text>Client Secret Key / Access Key Secret</Typography.Text>
    //                             <Input
    //                                 size="large"
    //                                 placeholder="kjuyt67765tgg"
    //                             />
    //                             <Typography.Text>Tenant Id</Typography.Text>
    //                             <Input
    //                                 size="large"
    //                                 placeholder="13333558ki8u-00ikxn"
    //                             />
    //                             <Typography.Text>Subscription Id</Typography.Text>
    //                             <Input
    //                                 size="large"
    //                                 placeholder="4lkxbb0(kk_@2"
    //                             />
    //                         </Box>
    //                         <Box w={'full'}>
    //                             <Accordion defaultIndex={[0, 1]} allowMultiple allowToggle>
    //                                 <AccordionItem
    //                                     border={'1px solid #E8EDFC'}
    //                                     borderRadius={'6px'}
    //                                     mb={'30px'}
    //                                 >
    //                                     {({ isExpanded }) => (
    //                                         <>
    //                                             <h2>
    //                                                 <AccordionButton>
    //                                                     <Box
    //                                                         as="span"
    //                                                         flex='1'
    //                                                         textAlign='left'
    //                                                         borderRadius={'6px'}
    //                                                     >
    //                                                         Custom Variable
    //                                                     </Box>
    //                                                     {isExpanded ? (
    //                                                         <Icon as={PlusSquareOutlined} fontSize='18px' />
    //                                                     ) : (
    //                                                         <Icon as={MinusSquareOutlined} fontSize='18px' />
    //                                                     )}
    //                                                 </AccordionButton>
    //                                             </h2>
    //                                             <AccordionPanel pb={0} px={0}>
    //                                                 <Stack
    //                                                     bgColor={'#4a4a4a'}
    //                                                     color={'#fff'}
    //                                                     direction={'row'}
    //                                                 >
    //                                                     <Text
    //                                                         py={'20px'} w={'150px'} borderRight={'1px solid #E8EDFC'} pl={'20px'}>Variable / Key</Text>
    //                                                     <Text
    //                                                         py={'20px'} pl={'20px'}>Value</Text>
    //                                                 </Stack>
    //                                                 <Stack
    //                                                     direction={'row'}
    //                                                     alignItems={'center'}
    //                                                     spacing={0}
    //                                                 >
    //                                                     <Text
    //                                                         border={'1px solid #E8EDFC'}
    //                                                         py={'20px'}
    //                                                         w={'150px'} pl={'20px'}>RGN</Text>
    //                                                     <Box
    //                                                         w={'78%'}
    //                                                         border={'1px solid #E8EDFC'}
    //                                                         p={'12px'}
    //                                                     >
    //                                                         <Input
    //                                                             border={'1px solid #E8EDFC'}
    //                                                             style={{ width: '82px' }}
    //                                                             size="large"
    //                                                             placeholder="Value 1"
    //                                                         />
    //                                                     </Box>
    //                                                 </Stack>
    //                                                 <Stack
    //                                                     direction={'row'}
    //                                                     spacing={0}
    //                                                     alignItems={'center'}
    //                                                 >
    //                                                     <Text
    //                                                         border={'1px solid #E8EDFC'}
    //                                                         py={'20px'}
    //                                                         w={'150px'} pl={'20px'}>Format</Text>
    //                                                     <Box
    //                                                         border={'1px solid #E8EDFC'}
    //                                                         w={'78%'}
    //                                                         p={'12px'}
    //                                                     >
    //                                                         <Input
    //                                                             border={'1px solid #E8EDFC'}
    //                                                             style={{ width: '82px' }}
    //                                                             size="large"
    //                                                             placeholder="Value 2"
    //                                                         />
    //                                                     </Box>
    //                                                 </Stack>
    //                                             </AccordionPanel>
    //                                         </>
    //                                     )}
    //                                 </AccordionItem>
    //                                 <AccordionItem
    //                                     border={'1px solid #E8EDFC'}
    //                                     borderRadius={'6px'}
    //                                     mb={'30px'}
    //                                 >
    //                                     {({ isExpanded }) => (
    //                                         <>
    //                                             <h2>
    //                                                 <AccordionButton>
    //                                                     <Box
    //                                                         as="span"
    //                                                         flex='1'
    //                                                         textAlign='left'
    //                                                         borderRadius={'6px'}
    //                                                     >
    //                                                         Configuration File Upload
    //                                                     </Box>
    //                                                     {isExpanded ? (
    //                                                         <Icon as={PlusSquareOutlined} fontSize='18px' />
    //                                                     ) : (
    //                                                         <Icon as={MinusSquareOutlined} fontSize='18px' />
    //                                                     )}
    //                                                 </AccordionButton>
    //                                             </h2>
    //                                             <AccordionPanel pb={0} px={0}>
    //                                                 <Stack
    //                                                     bgColor={'#4a4a4a'}
    //                                                     color={'#fff'}
    //                                                     direction={'row'}
    //                                                 >
    //                                                     <Text
    //                                                         py={'20px'} w={'150px'} borderRight={'1px solid #E8EDFC'} pl={'20px'}>Name</Text>
    //                                                     <Text
    //                                                         py={'20px'} pl={'20px'}>File</Text>
    //                                                 </Stack>
    //                                                 <Stack
    //                                                     direction={'row'}
    //                                                     alignItems={'center'}
    //                                                     spacing={0}
    //                                                 >
    //                                                     <Text
    //                                                         border={'1px solid #E8EDFC'}
    //                                                         py={'20px'}
    //                                                         w={'150px'} pl={'20px'}>RGN</Text>
    //                                                     <Box
    //                                                         w={'78%'}
    //                                                         border={'1px solid #E8EDFC'}
    //                                                         p={'12px'}
    //                                                         display={'flex'}
    //                                                         alignItems={'center'}
    //                                                         gap={'10px'}
    //                                                     >
    //                                                         <CharkInput
    //                                                             border={'1px solid #E8EDFC'}
    //                                                             style={{ width: '82px', display: 'none' }}
    //                                                             size="large"
    //                                                             placeholder="Value 1"
    //                                                             type="file"
    //                                                             ref={rgnFile}
    //                                                             onChange={e => setConfigFileData({
    //                                                                 ...configFileData,
    //                                                                 rgn: e.target.files[0]
    //                                                             })}
    //                                                         />
    //                                                         <Button
    //                                                             w={'110px'}
    //                                                             borderRadius={'8px'}
    //                                                             border={'1px solid #D0D5DD'}
    //                                                             fontSize={'16px'}
    //                                                             fontFamily={'Inter'}
    //                                                             fontWeight={'400'}
    //                                                             onClick={() => rgnFile?.current.click()}
    //                                                         >Choose File</Button>
    //                                                         <Text>{configFileData.rgn?.name ?? `No file choosen!`}</Text>
    //                                                     </Box>
    //                                                 </Stack>
    //                                                 <Stack
    //                                                     direction={'row'}
    //                                                     spacing={0}
    //                                                 >
    //                                                     <Text
    //                                                         border={'1px solid #E8EDFC'}
    //                                                         py={'20px'}
    //                                                         w={'150px'} pl={'20px'}>Format</Text>
    //                                                     <Box
    //                                                         border={'1px solid #E8EDFC'}
    //                                                         w={'78%'}
    //                                                         p={'12px'}
    //                                                         display={'flex'}
    //                                                         alignItems={'center'}
    //                                                         gap={'10px'}
    //                                                     >
    //                                                         <CharkInput
    //                                                             border={'1px solid #E8EDFC'}
    //                                                             style={{ width: '82px', display: 'none' }}
    //                                                             size="large"
    //                                                             placeholder="Value 2"
    //                                                             type="file"
    //                                                             ref={formatFile}
    //                                                             onChange={e => setConfigFileData({
    //                                                                 ...configFileData,
    //                                                                 format: e.target.files[0]
    //                                                             })}
    //                                                         />
    //                                                         <Button
    //                                                             w={'110px'}
    //                                                             borderRadius={'8px'}
    //                                                             border={'1px solid #D0D5DD'}
    //                                                             fontSize={'16px'}
    //                                                             fontFamily={'Inter'}
    //                                                             fontWeight={'400'}
    //                                                             onClick={() => formatFile?.current.click()}
    //                                                         >
    //                                                             Choose File
    //                                                         </Button>
    //                                                         <Text>{configFileData.format?.name ?? `No file choosen!`}</Text>
    //                                                     </Box>
    //                                                 </Stack>
    //                                             </AccordionPanel>
    //                                         </>
    //                                     )}
    //                                 </AccordionItem>
    //                             </Accordion>
    //                         </Box>
    //                     </Stack>
    //                     <Stack
    //                         direction={'row'}
    //                         alignItems={'center'}
    //                         justifyContent={'flex-end'}
    //                     >
    //                         <Button
    //                             w={'190px'}
    //                             bgColor={'#4A4A4A'}
    //                             color={'#fff'}
    //                             padding={'22px 0'}
    //                             fontSize={'16px'}
    //                             fontWeight={'500'}
    //                             border={'2px solid #4A4A4A'}
    //                             _hover={{
    //                                 bgColor: 'transparent',
    //                                 color: '#4A4A4A'
    //                             }}
    //                         >Save</Button>
    //                         <Button
    //                             w={'190px'}
    //                             bgColor={'transparent'}
    //                             color={'#8A959E'}
    //                             padding={'22px 0'}
    //                             fontSize={'16px'}
    //                             fontWeight={'500'}
    //                             border={'2px solid transparent'}
    //                             _hover={{
    //                                 borderColor: '#4A4A4A',
    //                                 color: '#4A4A4A'
    //                             }}
    //                         >Cancel</Button>
    //                     </Stack>
    //                 </>
    //     }

    // </Stack >
  );
}
