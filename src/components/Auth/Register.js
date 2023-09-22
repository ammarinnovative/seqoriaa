import Logo from '../../assets/images/logo.svg';
import { Typography, Input, Form, Divider } from 'antd';
import { EyeFilled, MailOutlined, UserOutlined } from '@ant-design/icons';
import {
  HiOutlineShoppingBag,
  HiOutlineOfficeBuilding,
  HiOutlineLocationMarker,
  HiOutlineKey,
  HiOutlinePhone,
} from 'react-icons/hi';
import { GiFactory } from 'react-icons/gi';
import { AiOutlineIdcard } from 'react-icons/ai';
import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Select,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import countryList from 'react-select-country-list';
import { useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { POST } from '../../utilities/ApiProvider';
import { useNavigate } from 'react-router-dom';
import { BaseURL } from '../../utilities/config';

export default function Register({ setShowLogin }) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const navigation = useNavigate();
  const toast = useToast();
  const [showPass, setShowPass] = useState(false);
  const options = useMemo(() => countryList().getData(), []);
  const [registerData, setRegisterData] = useState({
    orgName: '',
    businessType: '',
    contactNumber: '',
    country: '',
    ipHostVM: '0.1.2.3',
    license: {
      licenseName: '',
      startTime: '2023-08-10T01:20:14',
      endTime: '2023-11-18T01:20:14',
    },
    organizationPreference: [
      {
        preference: 'non_editable_org',
        dataValue: true,
      },
    ],
    defaultUser: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      tempPassword: '',
      role: '',
    },
  });
  const [selectedLicense, setSelectedLicense] = useState({});

  const submitRegistration = async () => {
    let data = registerData;
    data.license = {
      licenseName: selectedLicense?.licenseName,
      startTime: selectedLicense?.startTime,
      endTime: selectedLicense?.endTime,
    };
    try {
      let response = await POST(`${BaseURL}/onboard/org`, data);
      console.log();
      if (response.status == 200) {
        toast({
          description: `User registered as: ${registerData.defaultUser.firstName} ${registerData.defaultUser.lastName}`,
          isClosable: true,
          status: 'success',
          position: 'top-right',
          duration: 4500,
        });
      } else {
        toast({
          description: response?.debugMessages[0],
          isClosable: true,
          status: 'error',
          position: 'top-right',
          duration: 4500,
        });
      }
    } catch (error) {
      toast({
        description: error.message,
        isClosable: true,
        status: 'error',
        position: 'top-right',
        duration: 4500,
      });
    }
  };

  return (
    <>
      <Image src={Logo} width={'160px'} margin={'65px auto 43px'} />
      <Heading fontSize={'30px'} fontWeight={600}>
        Register Now
      </Heading>
      <Text fontSize={'16px'} margin={'5px 0 0 0'} color={'#8A959E'}>
        Please register your account by providing following details
      </Text>
      <Divider style={{ margin: '2.25rem 0' }} />
      <form
        onSubmit={handleSubmit(e => {
          submitRegistration(e);
        })}
      >
        <Stack direction={'row'} mb={4} gap={'20px'}>
          <Stack w={'full'}>
            <Typography.Text>First Name</Typography.Text>
            <Form.Item>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: 'This is Required' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    name="firstName"
                    placeholder="Allen"
                    prefix={<UserOutlined />}
                    onChange={e => {
                      setRegisterData({
                        ...registerData,
                        defaultUser: {
                          ...registerData.defaultUser,
                          firstName: e.target.value,
                        },
                      });
                    }}
                  />
                )}
              />

              <Text as={'span'} fontSize={'12px'} color={'#F80D4D'}>
                {errors.firstName?.message}
              </Text>
            </Form.Item>
          </Stack>
          <Stack w={'full'}>
            <Typography.Text>Last Name</Typography.Text>
            <Form.Item>
              <Controller
                name="username"
                control={control}
                rules={{ required: 'This is Required' }}
                render={({ field }) => (
                  <Input
                    size="large"
                    {...field}
                    name="lastName"
                    placeholder="James"
                    prefix={<UserOutlined />}
                    onChange={e => {
                      setRegisterData({
                        ...registerData,
                        defaultUser: {
                          ...registerData.defaultUser,
                          lastName: e.target.value,
                        },
                      });
                    }}
                  />
                )}
              />

              <Text as={'span'} fontSize={'12px'} color={'#F80D4D'}>
                {errors.lastName?.message}
              </Text>
            </Form.Item>
          </Stack>
        </Stack>
        <Stack direction={'row'} gap={'20px'}>
          <Stack w={'full'}>
            <Typography.Text>Email Address</Typography.Text>
            <Form.Item>
              <Controller
                name="username"
                control={control}
                rules={{ required: 'This is Required' }}
                render={({ field }) => (
                  <Input
                    size="large"
                    {...field}
                    name="email"
                    placeholder="allen@gmail.com"
                    prefix={<MailOutlined />}
                    onChange={e => {
                      setRegisterData({
                        ...registerData,
                        defaultUser: {
                          ...registerData.defaultUser,
                          email: e.target.value,
                          userName: e.target.value,
                        },
                      });
                    }}
                  />
                )}
              />

              <Text as={'span'} fontSize={'12px'} color={'#F80D4D'}>
                {errors.email?.message}
              </Text>
            </Form.Item>
          </Stack>
          <Stack w={'full'}>
            <Typography.Text>Phone Number</Typography.Text>
            <Form.Item>
              <Controller
                name="username"
                control={control}
                rules={{ required: 'This is Required' }}
                render={({ field }) => (
                  <Input
                    size="large"
                    {...field}
                    name="contactNumber"
                    placeholder="1 xxx xxxx xxx"
                    prefix={<Icon as={HiOutlinePhone} />}
                    onChange={e => {
                      setRegisterData({
                        ...registerData,
                        contactNumber: e.target.value,
                      });
                    }}
                  />
                )}
              />

              <Text as={'span'} fontSize={'12px'} color={'#F80D4D'}>
                {errors.contactNumber?.message}
              </Text>
            </Form.Item>
          </Stack>
        </Stack>
        <Stack w={'full'} marginTop={'16px'}>
          <Typography.Text>Password</Typography.Text>
          <Form.Item>
            <Controller
              name="username"
              control={control}
              rules={{ required: 'This is Required' }}
              render={({ field }) => (
                <Input
                  type={showPass ? 'text' : 'password'}
                  style={{ marginBottom: '16px' }}
                  {...field}
                  name="tempPassword"
                  size="large"
                  placeholder="*****************"
                  prefix={<Icon as={HiOutlineKey} />}
                  onChange={e => {
                    setRegisterData({
                      ...registerData,
                      defaultUser: {
                        ...registerData.defaultUser,
                        tempPassword: e.target.value,
                      },
                    });
                  }}
                />
              )}
            />

            <Text as={'span'} fontSize={'12px'} color={'#F80D4D'}>
              {errors.tempPassword?.message}
            </Text>
            <Button
              onClick={() => setShowPass(!showPass)}
              position={'absolute'}
              right={'5px'}
              top={0}
              background={'transparent'}
              _hover={{ bgColor: 'transparent' }}
              _active={{ bgColor: 'transparent' }}
              zIndex={10}
            >
              <Icon as={showPass ? BsEyeFill : BsEyeSlashFill} />
            </Button>
          </Form.Item>
        </Stack>
        <Stack direction={'row'} gap={'20px'}>
          <Stack w={'full'}>
            <Typography.Text>Organization/Company</Typography.Text>
            <Form.Item>
              <Controller
                name="username"
                control={control}
                rules={{ required: 'This is Required' }}
                render={({ field }) => (
                  <Input
                    size="large"
                    {...field}
                    name="orgId"
                    placeholder=""
                    prefix={<Icon as={HiOutlineShoppingBag} />}
                    onChange={e => {
                      setRegisterData({
                        ...registerData,
                        orgName: e.target.value,
                      });
                    }}
                  />
                )}
              />

              <Text as={'span'} fontSize={'12px'} color={'#F80D4D'}>
                {errors.tempPassword?.message}
              </Text>
            </Form.Item>
          </Stack>
        </Stack>
        <Stack direction={'row'} gap={'20px'} marginTop={'16px'}>
          <Stack w={'full'}>
            <Typography.Text>Industry/Vertical</Typography.Text>
            <Box
              display={'flex'}
              alignItems={'center'}
              border={'1px solid #d9d9d9'}
              borderRadius={8}
              height={'40px'}
              paddingX={'10px'}
            >
              <Icon as={GiFactory} />
              <Controller
                name="username"
                control={control}
                rules={{ required: 'This is Required' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    name="businessType"
                    border={'none'}
                    _focusVisible={{ outline: 'none' }}
                    onChange={e => {
                      setRegisterData({
                        ...registerData,
                        businessType: e.target.value,
                      });
                    }}
                  >
                    <option style={{ display: 'none' }} value={''}></option>
                    <option value="government">Government</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="financial">Financial</option>
                    <option value="defence">Defence</option>
                    <option value="techVendors">Tech Vendors</option>
                    <option value="saas/CloudNative">Saas/Cloud Native</option>
                  </Select>
                )}
              />
            </Box>
            <Text as={'span'} fontSize={'12px'} color={'#F80D4D'}>
              {errors.businessType?.message}
            </Text>
          </Stack>
          <Stack w={'full'}>
            <Typography.Text>Job Title/Role</Typography.Text>
            <Box
              display={'flex'}
              alignItems={'center'}
              border={'1px solid #d9d9d9'}
              borderRadius={8}
              height={'40px'}
              paddingX={'10px'}
            >
              <Icon as={HiOutlineOfficeBuilding} />
              <Controller
                name="username"
                control={control}
                rules={{ required: 'This is Required' }}
                render={({ field }) => (
                  <Select
                    border={'none'}
                    {...field}
                    name="role"
                    _focusVisible={{ outline: 'none' }}
                    onChange={e => {
                      setRegisterData({
                        ...registerData,
                        defaultUser: {
                          ...registerData.defaultUser,
                          role: e.target.value,
                        },
                      });
                    }}
                  >
                    <option style={{ display: 'none' }} value={''}></option>
                    <option value="ADMINISTRATOR">CISO</option>
                    <option value="ADMINISTRATOR">Cloud Security</option>
                    <option value="ADMINISTRATOR">DevSecOps</option>
                    <option value="ADMINISTRATOR">Compliance</option>
                    <option value="ADMINISTRATOR">Business</option>
                    <option value="ADMINISTRATOR">ADMINISTRATOR</option>
                  </Select>
                )}
              />
            </Box>
            <Text as={'span'} fontSize={'12px'} color={'#F80D4D'}>
              {errors.role?.message}
            </Text>
          </Stack>
        </Stack>
        <Stack w={'full'} marginTop={'16px'}>
          <Typography.Text>License Type</Typography.Text>
          <Box
            display={'flex'}
            alignItems={'center'}
            border={'1px solid #d9d9d9'}
            borderRadius={8}
            height={'40px'}
            paddingX={'10px'}
          >
            <Icon as={AiOutlineIdcard} />
            <Controller
              name="username"
              control={control}
              rules={{ required: 'This is Required' }}
              render={({ field }) => (
                <Select
                  border={'none'}
                  {...field}
                  name="license"
                  _focusVisible={{ outline: 'none' }}
                  onChange={e => {
                    console.log(JSON.parse(e.target.value));
                    setSelectedLicense(JSON.parse(e.target.value));
                  }}
                >
                  <option style={{ display: 'none' }} value={''}>
                    License Type
                  </option>
                  <option
                    value={JSON.stringify({
                      licenseName: 'INFINITE',
                      startTime: '2023-08-10T01:20:14',
                      endTime: '2023-11-18T01:20:14',
                    })}
                  >
                    Subscription
                  </option>
                  <option
                    value={JSON.stringify({
                      licenseName: 'INFINITE',
                      startTime: '2023-08-10T01:20:14',
                      endTime: '2023-11-18T01:20:14',
                    })}
                  >
                    30-Day Trial
                  </option>
                </Select>
              )}
            />
          </Box>
          <Text as={'span'} fontSize={'12px'} color={'#F80D4D'}>
            {errors.license?.message}
          </Text>
        </Stack>
        <Stack marginTop={'16px'}>
          <Typography.Text>Region</Typography.Text>
          <Box
            display={'flex'}
            alignItems={'center'}
            border={'1px solid #d9d9d9'}
            borderRadius={8}
            height={'40px'}
            paddingX={'10px'}
          >
            <Icon as={HiOutlineLocationMarker} />
            <Controller
              name="username"
              control={control}
              rules={{ required: 'This is Required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  name="country"
                  border={'none'}
                  _focusVisible={{ outline: 'none' }}
                  onChange={e => {
                    setRegisterData({
                      ...registerData,
                      country: e.target.value,
                    });
                  }}
                >
                  <option style={{ display: 'none' }} value={''}>
                    Country
                  </option>
                  {options.length > 0 &&
                    options.map(val => (
                      <option key={val?.value} value={val?.value}>
                        {val?.label}
                      </option>
                    ))}
                </Select>
              )}
            />
          </Box>
          <Text as={'span'} fontSize={'12px'} color={'#F80D4D'}>
            {errors.country?.message}
          </Text>
        </Stack>
        <Stack
          margin={'34px 0'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Typography.Text color="#262626">
            Already have an account?{' '}
          </Typography.Text>
          <Typography.Text
            style={{
              textDecoration: 'underline',
              color: '#2B2B2C',
              fontWeight: '600',
              cursor: 'pointer',
            }}
            onClick={() => setShowLogin(true)}
          >
            Login
          </Typography.Text>
        </Stack>
        <Button
          //  type="submit"
          onClick={() => submitRegistration()}
          bgColor={'#4A4A4A'}
          color={'#fff'}
          padding={'12px'}
          w={'full'}
          marginBottom={'80px'}
          fontSize={'16px'}
          fontWeight={'500'}
          border={'2px solid #4A4A4A'}
          _hover={{
            bgColor: 'transparent',
            color: '#4A4A4A',
          }}
        >
          Register
        </Button>
      </form>
    </>
  );
}
