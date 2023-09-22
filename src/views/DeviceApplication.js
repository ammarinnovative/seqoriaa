import { Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideWrapper from "../components/SideBar/SideWrapper.js";
import LocationHeader from "../components/LocationHeader/index.js";
import { useState } from "react";
import { deviceOptions } from "../utilities/deviceApplicationData.js";
import DesiredButton from "../components/DesiredOutcomes/DesiredButtons.js";
import SpacedStack from "../components/SpacedStack/index.js";

export default function DeviceApplication() {

    const navigation = useNavigate();
    const user = useSelector(state => state?.value);
    const [selectedDesireOption, setSelectedDesireOption] = useState('Network Infrastructure');

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
                <LocationHeader followingRoute={[selectedDesireOption]} />
                {/* Cloud options */}
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={'10px'}
                    padding={'35px 30px'}
                    background={'#fff'}
                    borderRadius={'10px'}
                    marginBottom={'20px !important'}
                    spacing={0}
                    flexWrap={'wrap'}
                >
                    {
                        deviceOptions.map((v, i) => <DesiredButton {...v} key={i} selectedDesireOption={selectedDesireOption} setSelectedDesireOption={setSelectedDesireOption} />)
                    }
                </Stack>
                <SpacedStack>
                    {
                        // selectedDesireOption === 'Cyber Resiliency' ?
                        //     <CyberResiliency />
                        //     :
                        <></>
                    }
                </SpacedStack>
            </Stack>
        </SideWrapper>
    );
}