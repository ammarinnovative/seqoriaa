import { Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SideWrapper from '../components/SideBar/SideWrapper.js';
import LocationHeader from '../components/LocationHeader/index.js';
import { useState } from 'react';
import HostCloudButton from '../components/CloudComponents/HostCloudButton.js';
import {
  hostCloud,
  solutionAmzaonOpt,
  solutionAzureOpt,
} from '../utilities/solutionBuilderData.js';
import SpacedStack from '../components/SpacedStack/index.js';
import SolutionSubOptBox from '../components/SolutionBuilder/SolutionSubOptBox.js';

export default function SolutionBuilder() {
  const navigation = useNavigate();
  const user = useSelector(state => state?.value);
  const [selectedCloudOption, setSelectedCloudOption] = useState({
    id: 1,
    name: 'Amazon',
  });

  // if(user === undefined || user == null){
  //   navigation('/auth');
  // }

  return (
    <SideWrapper>
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
            ? solutionAmzaonOpt.map((v, i) => (
                <SolutionSubOptBox key={i} {...v} />
              ))
            : solutionAzureOpt.map((v, i) => (
                <SolutionSubOptBox key={i} {...v} />
              ))}
        </SpacedStack>
      </Stack>
    </SideWrapper>
  );
}
