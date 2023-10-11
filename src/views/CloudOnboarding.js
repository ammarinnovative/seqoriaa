import { Box, Heading, Icon, Stack, Text, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SideWrapper from '../components/SideBar/SideWrapper.js';
import LocationHeader from '../components/LocationHeader/index.js';
import CloudOptionButton from '../components/CloudComponents/CloudOptionButton.js';
import { useState, useEffect } from 'react';
import HostCloudButton from '../components/CloudComponents/HostCloudButton.js';
import { useToast } from '@chakra-ui/react';
import CloudLogin from '../components/CloudComponents/CloudLogin.js';
import {
  cloudOptions,
  hostCloud,
  peer1,
  peer2,
} from '../utilities/cloudOnBoardingData.js';
import SpacedStack from '../components/SpacedStack/index.js';
import { HiUserAdd } from 'react-icons/hi';
import { ExpiredToken } from '../components/ExpiredToken/ExpiredToken.js';
import { AiOutlinePlus } from 'react-icons/ai';
import AdditionalPeers from '../components/CloudComponents/AdditionalPeers.js';
import { GET, POST } from '../utilities/ApiProvider.js';
import axios from 'axios'; 
import { BaseURL } from '../utilities/config.js';
import { Form } from 'antd';

export default function CloudOnboarding() {
  const navigation = useNavigate();
  const [user, setUser] = useState({});
  const [selectedCloudOption, setSelectedCloudOption] = useState('');
  const [apiData, setApiData] = useState(null);
  const [main, setMain] = useState();
  const [mainVal,setMainVal] = useState({
    rgn1:"",
    format:"",
    rgn2:"",
    name:"",
    content:""
  });
  const apiUrl = 'https://144.126.248.16.nip.io/api/v1/worker/supported-vendor';
  const [hostData, setHostData] = useState([]);
  const [optionsList] = useState(['Host Cloud', 'Peer 1', 'Peer 2']);
  const [filterData, setFilterData] = useState({});
  const [value, setValue] = useState({
    name: '',
    iconPath: '',
    supportedVendorId: '',
    configurations: {
      host: {
        credentials: {
          configuraitonId: '',
          username: '',
          password: '',
          clientSecret: '',
          clientId: '',
          tenantId: '',
          subscriptionId: '',
          accessToken: '',
          variables: {
            rgn: '',
            format: '',
          },
          configurationFiles: {
            rgn: '',
            name: '',
            content: '',
          },
        },
      },
    },
  });
  const [selectedHostOption, setSelectedHostOption] = useState();
  const [selectedPeer1Option, setSelectedPeer1Option] = useState(null);
  const [data, setData] = useState([]);
  const [selectedPeer2Option, setSelectedPeer2Option] = useState(null);
  const selector = useSelector(state => state);
  const token =
    'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJrM2tTeVZoZmhuTDVRZjliWTNVaUVzQk5fX0hvVG1nb1J5bHpIaGEwdkRVIn0.eyJleHAiOjE2OTUyMDE1MjYsImlhdCI6MTY5NTIwMTIyNiwianRpIjoiYzI4OGI0MzktNmNjOC00MGQ1LWE0ZmMtOGQ5OWVhODMwMDc2IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5mb3ItdGhlLmJpei9yZWFsbXMvY2lwaGVyc3RhY2siLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNjQ3MmE2YjEtZmI2ZC00YTg1LWI0ZjAtYTlkMjkwY2MyZjcxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY2lwaGVyc3RhY2stY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6ImY0YzU4NTQ1LWMyYmUtNGU4My1hM2YxLTYxOGUxZmU2YTA2MSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo3ODAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWNpcGhlcnN0YWNrIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJmNGM1ODU0NS1jMmJlLTRlODMtYTNmMS02MThlMWZlNmEwNjEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IkNpcGhlcnN0YWNrIFVzZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJjaXBoZXJzdGFja3VzZXIiLCJnaXZlbl9uYW1lIjoiQ2lwaGVyc3RhY2siLCJmYW1pbHlfbmFtZSI6IlVzZXIifQ.MiyxA3ncUqnnE1w5mcCNcP7CBoNA-hcqbH68KEYgKMGY4qQA-kPsQeCtJZz6u7hClS9v9Tz8sGbvbKlnZQUteKYGMIaW5CERT5sW_rF589_rIknq_rXsCEAKqgEcR47UxTS7OSEcn0sJ_I1fegNzXhmtUIvbjOCpmmhWKlamI96Ry7pl57POT9ewNdcFwi74TF6CYSmVI5tVXaybbqjx7ycZomeSpJtH-0z2ZGb4e3zX_YT-VpIwYrMSDZvgqQzm-NFH82xyE5jR2tC5X8LQfU42tR03Qak3f0ML1B9Tg__39VLgiruy-KJQVO_lKkSSJ0wOBNpXNJdkbtHKMAzulQ';
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const navigate = useNavigate();
  const toast = useToast();

  // const refreshhToken = () => {
  //   // Replace this with your actual access token refreshing logic
  //   // Send a request to your server with the refresh token to obtain a new access token
  //   // Update the access token in state and local storage
  //   const newAccessToken = 'YOUR_NEW_ACCESS_TOKEN';

  //   setAccessToken(newAccessToken);
  //   localStorage.setItem('accessToken', newAccessToken);
  // };

  // const refreshRefreshToken = () => {
  //   // Replace this with your actual refresh token refreshing logic
  //   // Send a request to your server with the current refresh token to obtain a new one
  //   // Update the refresh token in state and local storage
  //   const newRefreshToken = 'YOUR_NEW_REFRESH_TOKEN';

  //   setRefreshToken(newRefreshToken);
  //   localStorage.setItem('refreshToken', newRefreshToken);
  // };

  // const getData = async () => {
  //   if (localStorage.getItem('accessToken')) {
  //     try {
  //       const res = await GET(`api/v1/worker/supported-vendor/`);
  //       setHostData(res);
  //     } catch (error) {}
  //   } else {
  //     // Handle the case where there's no access token
  //     toast({
  //       position: 'bottom-left',
  //       isClosable: true,
  //       duration: 5000,
  //       status: 'error',
  //       description: 'Access token is missing',
  //     });
  //     navigate('/');
  //     return;
  //   }
  // };
  const getData = async () => {
    if (localStorage.getItem('accessToken')) {
      try {
        const res = await GET(`api/v1/worker/supported-vendor/`);
        console.log(res);
        setHostData(Array.isArray(res) ? res : [res]); // Ensure hostData is an array
      } catch (error) {
        // Handle errors
      }
    } else {
      // Handle the case where there's no access token
      toast({
        position: 'bottom-left',
        isClosable: true,
        duration: 5000,
        status: 'error',
        description: 'Access token is missing',
      });
      navigate('/');
      return;
    }
  };

  // useEffect(() => {
  //   // Check if access and refresh tokens are available in local storage
  //   const storedAccessToken = localStorage.getItem('accessToken');
  //   const storedRefreshToken = localStorage.getItem('refreshToken');
  //   if (storedAccessToken && storedRefreshToken) {
  //     setAccessToken(storedAccessToken);
  //     setRefreshToken(storedRefreshToken);

  //     // const accessTokenRefreshInterval = setInterval(() => {
  //     //   refreshhToken();
  //     // }, 250000);

  //     // const refreshTokenRefreshInterval = setInterval(() => {
  //     //   refreshRefreshToken();
  //     // }, 1700000);

  //     // return () => {
  //     //   clearInterval(accessTokenRefreshInterval);
  //     //   clearInterval(refreshTokenRefreshInterval);
  //     // };
  //   }
  //   (async () => {
  //     const isTokenExpired = await ExpiredToken(
  //       localStorage.getItem('accessToken')
  //     );
  //     console.log('isTokenExpired', isTokenExpired);
  //     if (isTokenExpired) {
  //       alert('token expired');
  //       navigate('/');
  //     }
  //   })();
  // }, []);

  // useEffect(() => {
  //   // setSelectedHostOption(null);
  //   // setSelectedPeer1Option(null);
  //   // setSelectedPeer2Option(null);
  // }, [selectedCloudOption]);

  const getVenderManagement = async () => {
    if (localStorage.getItem('accessToken')) {
      const res = await GET(`api/v1/worker/tenant/vendor/`, {
        
      });
      setData(res);
      console.log("res",res);
    } else {
      toast({
        position: 'bottom-left',
        isClosable: true,
        duration: 5000,
        status: 'error',
        description: 'Access token is missing',
      });
    }
  };

  // const getMainData = async e => {
  //   const {name,value,files} = e.target;

  //   console.log(name,value);
  //   if (files) {
  //     const reader = new FileReader();
  //     reader.onload()
  //     // const formdata = new FormData();
  //     // formdata.append(name,value);
  //     // setMainVal({...mainVal,formdata});
  //   }else{
  //     setMainVal({
  //       ...mainVal,[name]:value
  //     });
  //   }
   
  // };

  const getMainData = async (e) => {
    const { name, value, files } = e.target;
  
    if (files) {
      const file = files[0]; // Assuming you handle only one file at a time
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (readerEvent) => {
          const binaryImageData = readerEvent.target.result; // This contains the raw binary data of the image as an ArrayBuffer
  
          // Convert the binary image data to a Base64-encoded string using a DataView
          const dataView = new DataView(binaryImageData);
          let base64ImageString = '';
  
          for (let i = 0; i < dataView.byteLength; i++) {
            base64ImageString += String.fromCharCode(dataView.getUint8(i));
          }
  
          base64ImageString = btoa(base64ImageString);
  
          // Update only the "content" field in mainVal with the string representation
          setMainVal({
            ...mainVal,
            content: base64ImageString, // This sets it as a Base64-encoded string
          });
        };
  
        reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
      }
    } else {
      // If it's not a file input, update other fields as usual
      setMainVal({
        ...mainVal,
        [name]: value,
      });
    }
  };
  
  


  const findData = val => {
    setValue({
      ...value,
      name: val.name,
      iconPath: val.iconPath,
      supportedVendorId: val.id,
    });
    const find = data.find(item => {
      return item?.configurations?.host?.supportedVendorId == val?.id;
    });
    setFilterData(find);
  };
  const sendData = async () => {
    if(!mainVal.name || !mainVal.rgn1 || !mainVal.rgn2 || !mainVal.format || !mainVal.content){
      toast({
        position:"bottom-left",
        isClosable:true,
        duration:5000,
        status:"error",
        description:"Please fill all the fields"
      });
      return;
    }
    let data = filterData;
    data.configurations.host.configurationFiles = {
      rgn:mainVal.rgn1,
      name:mainVal.name,
      content:mainVal.content
    }
    
    data.configurations.host.variables = {
      rgn:mainVal.rgn2,
      format:mainVal.format
    }
    console.log("data",data);
    const res = await POST('api/v1/worker/tenant/vendor/', data);
    console.log("res",res);
    try {
      if (res?.configurations) {
        toast({
          position: 'bottom-left',
          isClosable: true,
          duration: 5000,
          status: 'success',
          description: 'Success',
        });
      }
    } catch (error) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        duration: 5000,
        status: 'error',
        description: error?.message,
      });
    }
  };
  useEffect(() => {
    if (selector) {
      setUser(selector.value);
    }
  }, [selector]);

  useEffect(() => {
    if (user) {
      getData();
      getVenderManagement();
    }
  }, [user]);




  return (
    <SideWrapper>
      <Stack w={'full'} margin={'40px 50px 30px 35px !important'}>
        {/* Current Location identifier */}
        <LocationHeader
          optionsList={optionsList}
          selectedCloudOption={selectedCloudOption}
          followingRoute={[
            selectedHostOption?.name,
            selectedPeer1Option?.name,
            selectedPeer2Option?.name,
          ]}
        />
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
        {/* Selected cloud option extended*/}
        {selectedCloudOption === 'Host Cloud' ? (
            <>
              <SpacedStack>
              <Heading fontSize={'22px'} margin={'0 0 10px 0'}>
                Host Cloud
              </Heading>
              <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'10px'}
                flexWrap={'wrap'}
                spacing={0}
              >
                {hostData?.length > 0 &&
                  hostData &&
                  hostData?.map((v, i) => (
                    <HostCloudButton
                      {...v}
                      key={i}
                      findData={findData}
                      selectedCloudOption={selectedHostOption}
                      setSelectedCloudOption={setSelectedHostOption}
                    />
                  ))}
              </Stack>
              </SpacedStack>
             
            </>
          ) : selectedCloudOption === 'Peer 1' ? (
            <>
            <SpacedStack>
              <>
              <SpacedStack>
              <Heading fontSize={'22px'} margin={'0 0 10px 0'}>
              Peer 1

              </Heading>
              <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'10px'}
                flexWrap={'wrap'}
                spacing={0}
              >
                {hostData?.length > 0 &&
                  hostData &&
                  hostData?.map((v, i) => (
                    <HostCloudButton
                      {...v}
                      key={i}
                      findData={findData}
                      selectedCloudOption={selectedHostOption}
                      setSelectedCloudOption={setSelectedHostOption}
                    />
                  ))}
              </Stack>
              </SpacedStack>
             
            </>
            </SpacedStack>
             
            </>
          ) : selectedCloudOption === 'Peer 2' ? (
            <>
            <SpacedStack>
            <>
              <SpacedStack>
              <Heading fontSize={'22px'} margin={'0 0 10px 0'}>
              Peer 2

              </Heading>
              <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'10px'}
                flexWrap={'wrap'}
                spacing={0}
              >
                {hostData?.length > 0 &&
                  hostData &&
                  hostData?.map((v, i) => (
                    <HostCloudButton
                      {...v}
                      key={i}
                      findData={findData}
                      selectedCloudOption={selectedHostOption}
                      setSelectedCloudOption={setSelectedHostOption}
                    />
                  ))}
              </Stack>
              </SpacedStack>
             
            </>
            </SpacedStack>
             
            </>
          ) 
          : selectedCloudOption === 'Additional Peers' ? (
            <>
            <SpacedStack>
            <Heading fontSize={'22px'} margin={'0 0 10px 0'}>
                Additional Peers
              </Heading>
              <AdditionalPeers />
            </SpacedStack>
             
            </>
          )
          : (
            <>
           
            </>
          )}
        {/* Extended selected host cloud */}
        {selectedHostOption && (
          <>
          <StackWrapper>
            {selectedCloudOption === 'Host Cloud' && selectedHostOption ? (
              <CloudLogin
                getMainData={getMainData}
                sendData={sendData}
                mainVal={mainVal}
                filterData={filterData}
              />
              
            ) : selectedCloudOption === 'Peer 1' &&
            selectedHostOption ? (
              <CloudLogin
              getMainData={getMainData}
              sendData={sendData}
              mainVal={mainVal}
              filterData={filterData}
              />
            ) : selectedCloudOption === 'Peer 2' &&
            selectedHostOption ? (
              <CloudLogin
              getMainData={getMainData}
              sendData={sendData}
              mainVal={mainVal}
              filterData={filterData}
              />
            ) : (
              <></>
            )}
          </StackWrapper>
          </>
        )}
      </Stack>
    </SideWrapper>
  );
}

const StackWrapper = ({ children }) => (
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
    {children}
  </Stack>
);
