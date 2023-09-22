import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideWrapper from "../components/SideBar/SideWrapper.js";
import LocationHeader from "../components/LocationHeader/index.js";
import DoughnutChart from "../components/RiskSimulation/DoughnutChart.js";
import { pieDataBusiness } from "../utilities/SimulationPieData.js";
import SpacedStack from "../components/SpacedStack/index.js";
import { Divider } from "antd";
import Range from "../components/RiskSimulation/Range.js";
import CustomRange from "../components/RiskSimulation/Range.js";

export default function BusinessSimulation() {

    const navigation = useNavigate();
    const user = useSelector(state => state?.value);

    // if(user === undefined || user == null){
    //   navigation('/auth');
    // }

    return (
        <SideWrapper>
            <Stack
                w={'full'}
                margin={'40px 50px 30px 0 !important'}
            >
                {/* Current Location identifier */}
                <LocationHeader forcedText={'Cloud / Business Impact Simulation'} />

                <SpacedStack>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-around'}
                    >
                        {
                            pieDataBusiness.map((v, i) =>
                                <Box
                                    w={'20%'}
                                    key={i}
                                >
                                    <DoughnutChart data={v} />
                                    <Heading
                                        fontFamily={'Inter'}
                                        fontSize={'20px'}
                                        textAlign={'center'}
                                        margin={'20px 0 16px 0'}
                                        fontWeight={'500'}
                                    >
                                        {v[0]['name'] ?? ''}
                                    </Heading>
                                    <Text
                                        fontFamily={'Inter'}
                                        textAlign={'center'}
                                        color={'#667085'}
                                        fontSize={'15px'}
                                    >
                                        {v[0]['date']}
                                    </Text>
                                </Box>
                            )
                        }
                    </Stack>
                    <Divider style={{ margin: '2.25rem 0' }} />
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        margin={'0 0 32px 0 !important'}
                    >
                        <Heading
                            color={'#262626'}
                            fontSize={'22px'}
                            fontWeight={'600'}
                        >
                            What if we improve
                        </Heading>
                        <Button
                            bgColor={'#4A4A4A'}
                            color={'#fff'}
                            padding={'22px 15px'}
                            fontSize={'16px'}
                            fontWeight={'500'}
                            border={'2px solid #4A4A4A'}
                            fontFamily={'Inter'}
                            _hover={{
                                bgColor: 'transparent',
                                color: '#4A4A4A'
                            }}
                        >Preference Configuration</Button>
                    </Stack>
                    <Stack
                        p={'14px'}
                        border={'1px solid #E2E2E2'}
                        borderRadius={'10px'}
                        mb={'20px'}
                    >
                        <Text p={'12px 18px'} color={'#262626'} fontSize={'18px'} fontWeight={'600'} bgColor={'#f6f6f6'} borderRadius={'5px'}>Time-To-Market</Text>
                        <Box
                            py={'12px'}
                            display={'flex'}
                            w={'full'}
                            alignItems={'center'}
                        >
                            <Text px={'20px'}>Risk</Text>
                            <CustomRange value={60} />
                        </Box>
                        <Box
                            py={'12px'}
                            display={'flex'}
                            w={'full'}
                            alignItems={'center'}
                        >
                            <Text px={'20px'}>Cost</Text>
                            <CustomRange value={40} />
                        </Box>
                    </Stack>
                    <Stack
                        p={'14px'}
                        border={'1px solid #E2E2E2'}
                        borderRadius={'10px'}
                        mb={'20px'}
                    >
                        <Text p={'12px 18px'} color={'#262626'} fontSize={'18px'} fontWeight={'600'} bgColor={'#f6f6f6'} borderRadius={'5px'}>Cost Efficiency</Text>
                        <Box
                            py={'12px'}
                            display={'flex'}
                            w={'full'}
                            alignItems={'center'}
                        >
                            <Text px={'20px'}>Risk</Text>
                            <CustomRange value={75} />
                        </Box>
                        <Box
                            py={'12px'}
                            display={'flex'}
                            w={'full'}
                            alignItems={'center'}
                        >
                            <Text px={'20px'}>Cost</Text>
                            <CustomRange value={90} />
                        </Box>
                    </Stack>
                    <Stack
                        p={'14px'}
                        border={'1px solid #E2E2E2'}
                        borderRadius={'10px'}
                        mb={'20px'}
                    >
                        <Text p={'12px 18px'} color={'#262626'} fontSize={'18px'} fontWeight={'600'} bgColor={'#f6f6f6'} borderRadius={'5px'}>Operational Resiliency</Text>
                        <Box
                            py={'12px'}
                            display={'flex'}
                            w={'full'}
                            alignItems={'center'}
                        >
                            <Text px={'20px'}>Risk</Text>
                            <CustomRange value={60} />
                        </Box>
                        <Box
                            py={'12px'}
                            display={'flex'}
                            w={'full'}
                            alignItems={'center'}
                        >
                            <Text px={'20px'}>Cost</Text>
                            <CustomRange value={50} />
                        </Box>
                    </Stack>
                    <Stack
                        p={'14px'}
                        border={'1px solid #E2E2E2'}
                        borderRadius={'10px'}
                        mb={'20px'}
                    >
                        <Text p={'12px 18px'} color={'#262626'} fontSize={'18px'} fontWeight={'600'} bgColor={'#f6f6f6'} borderRadius={'5px'}>Staff Productivity</Text>
                        <Box
                            py={'12px'}
                            display={'flex'}
                            w={'full'}
                            alignItems={'center'}
                        >
                            <Text px={'20px'}>Risk</Text>
                            <CustomRange value={60} />
                        </Box>
                        <Box
                            py={'12px'}
                            display={'flex'}
                            w={'full'}
                            alignItems={'center'}
                        >
                            <Text px={'20px'}>Cost</Text>
                            <CustomRange value={90} />
                        </Box>
                    </Stack>
                </SpacedStack>

            </Stack>
        </SideWrapper>
    );
}