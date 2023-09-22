import { Box, Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SideWrapper from '../components/SideBar/SideWrapper.js';
import LocationHeader from '../components/LocationHeader/index.js';
import { useState } from 'react';
import { desiredOptions } from '../utilities/desiredOutcomesData.js';
import DesiredButton from '../components/DesiredOutcomes/DesiredButtons.js';
import SpacedStack from '../components/SpacedStack/index.js';
import { Form, Typography, Input } from 'antd';
import CyberResiliency from '../components/DesiredOutcomes/CyberResiliency.js';
import EnterpriseRiskTolerance from '../components/DesiredOutcomes/EnterpriseRiskTolerance/EnterpriseRiskTolerance.js';
import VulnerabilityManagement from '../components/DesiredOutcomes/VulnerabilityManagement/VulnerabilityManagement.js';
import ZeroTrustPosture from '../components/DesiredOutcomes/ZeroTrustPosture.js';

export default function DesiredOutComes() {
  const navigation = useNavigate();
  const user = useSelector(state => state?.value);
  const [selectedDesireOption, setSelectedDesireOption] =
    useState('Cyber Resiliency');

  // if(user === undefined || user == null){
  //   navigation('/auth');
  // }

  return (
    <SideWrapper>
      <Stack w={'full'} margin={'40px 50px 30px 0 !important'}>
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
          {desiredOptions.map(v => (
            <DesiredButton
              {...v}
              selectedDesireOption={selectedDesireOption}
              setSelectedDesireOption={setSelectedDesireOption}
            />
          ))}
        </Stack>
        <SpacedStack>
          {selectedDesireOption === desiredOptions[0]['name'] ? (
            <CyberResiliency />
          ) : selectedDesireOption === desiredOptions[1]['name'] ? (
            <ZeroTrustPosture />
          ) : selectedDesireOption === desiredOptions[7]['name'] ? (
            <VulnerabilityManagement />
          ) : selectedDesireOption === desiredOptions[8]['name'] ? (
            <EnterpriseRiskTolerance />
          ) : (
            <></>
          )}
        </SpacedStack>
      </Stack>
    </SideWrapper>
  );
}
