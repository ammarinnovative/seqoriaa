import { Box, Stack, Text } from '@chakra-ui/react/dist/chakra-ui-react.cjs';
import React from 'react';
import LocationHeader from '../components/LocationHeader';
import SideWrapper from '../components/SideBar/SideWrapper';
import CloudOptionButton from '../components/CloudComponents/CloudOptionButton';
import { cloudOptions, hostCloud } from '../utilities/cloudOnBoardingData';
import { useState } from 'react';
import { desiredOptions } from '../utilities/desiredOutcomesData';
import DesiredButton from '../components/DesiredOutcomes/DesiredButtons';
import SpacedStack from '../components/SpacedStack';
import {Enforcement,solutionAzureOpt1} from "../utilities/Policy";
import HostCloudButton from '../components/CloudComponents/HostCloudButton';
import {
  solutionAmzaonOpt,
  solutionAzureOpt,
} from '../utilities/solutionBuilderData';
import SolutionSubOptBox from '../components/SolutionBuilder/SolutionSubOptBox';

const Policy = () => {
  const [selectedCloudOption, setSelectedCloudOption] = useState('');
  const [selectedDesireOption, setSelectedDesireOption] =
    useState('');
  return (
    // <SideWrapper>
    //     {/* Current Location identifier */}
    //   <Stack >
    //     <LocationHeader />
    //   </Stack>
    //   {/* Cloud options */}
    //   <Stack
    //       direction={'row'}
    //       alignItems={'center'}
    //       gap={'10px'}
    //       padding={'35px 30px'}
    //       background={'#fff'}
    //       borderRadius={'10px'}
    //       marginBottom={'20px !important'}
    //       spacing={0}
    //     >
    //       {
    //         cloudOptions.map((v, i) => <CloudOptionButton {...v} key={i}   />)
    //       }
    //     </Stack>
    //     {/* Selected cloud option extended*/}
    // </SideWrapper>
    <SideWrapper>
      <Stack w={'full'} margin={'40px 50px 30px 0 !important'}>
        {/* Current Location identifier */}
        <LocationHeader />
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
        >
          {cloudOptions.map((v, i) => (
            <CloudOptionButton
              {...v}
              key={i}
              selectedCloudOption={selectedCloudOption}
              setSelectedCloudOption={setSelectedCloudOption}
            />
          ))}
        </Stack>
        <Text lineHeight={"48px"} fontWeight={"700"} fontSize={"20px"}>Desired Outcomes</Text>
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
          {desiredOptions.map(v => (
            <DesiredButton
              {...v}
              selectedDesireOption={selectedDesireOption}
              setSelectedDesireOption={setSelectedDesireOption}
            />
          ))}
        </Stack>
          <Text color={"black"} fontWeight={"700"} lineHeight={"48px"} fontSize={"22px"}>Solution - Architecture - Devices</Text>
        <Stack w={'full'} margin={'40px 50px 30px 0 !important'}>
          {/* Cloud options */}
          <Stack
            direction={'row'}
            alignItems={'center'}
            gap={'10px'}
            flexWrap={'wrap'}
            spacing={0}
            padding={'35px 30px'}
            background={'#fff'}
            borderRadius={'10px'}
            marginBottom={'20px !important'}
          >
            {hostCloud.map((v, i) => (
              <HostCloudButton
                {...v}
                key={i}
                selectedCloudOption={selectedCloudOption}
                setSelectedCloudOption={setSelectedCloudOption}
              />
            ))}
          </Stack>
          <SpacedStack
            direction={'row'}
            alignItems={'center'}
            gap={'10px'}
            flexWrap={'wrap'}
            spacing={0}
          >
            {selectedCloudOption.name === 'Amazon'
              ? solutionAzureOpt1.map((v, i) => (
                  <SolutionSubOptBox key={i} {...v} />
                ))
              : solutionAzureOpt1.map((v, i) => (
                  <SolutionSubOptBox key={i} {...v} />
                ))}
          </SpacedStack>
          <Text color={'#8A959E'} fontSize={'16px'} fontWeight={'600'}>
            Policily Enforcement
          </Text>
          <SpacedStack
            direction={'row'}
            alignItems={'center'}
            gap={'10px'}
            flexWrap={'wrap'}
            spacing={0}
          >
            {selectedCloudOption.name === 'Amazon'
              ? Enforcement.map((v, i) => (
                  <SolutionSubOptBox key={i} {...v} />
                ))
              : Enforcement.map((v, i) => (
                  <SolutionSubOptBox key={i} {...v} />
                ))}
          </SpacedStack>
        </Stack>
      </Stack>
    </SideWrapper>
  );
};

export default Policy;
