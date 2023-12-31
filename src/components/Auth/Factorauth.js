import Logo from '../../assets/images/logo.svg';
import { Typography, Input, Form, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AiOutlineIdcard, AiOutlineLock } from 'react-icons/ai';
import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm, Controller } from 'react-hook-form';
import { POST } from '../../utilities/ApiProvider';
import { BaseURL } from '../../utilities/config';

export default function Factorauth() {


    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      console.log(errors);
      const toast = useToast();
      const navigation = useNavigate();
      const [showPass, setShowPass] = useState(false);
    
    
      const submitLogin = async (data) => {
        
        let tepdata = {
            passcode: data.passcode,
            username: data.username,
            orgId: 22
        }
        console.log(tepdata);
        // let response = await POST(`${BaseURL}/onboard/users/authenticate`, tepdata);
        // console.log(response);
        toast({
        //   description: `User logged in as: ${response.orgName}`,
        description: "Login Success",
          isClosable: true,
          status: 'success',
          position: 'top-right',
          duration: 4500,
        });
       
        navigation('/cloud-onboarding')
      };

  return (
    <>
    <Image src={Logo} width={'160px'} margin={'65px auto 100px'} />
      <Heading fontSize={'30px'} fontWeight={600} textAlign={'center'}>
      Login Authentication
      </Heading>
      <Text
        fontSize={'16px'}
        margin={'5px 0 0 0'}
        color={'#8A959E'}
        textAlign={'center'}
      >
        Please Enter  Your Verification Code
      </Text>
      <Divider style={{ margin: '35px 0' }} />
      <form
        onSubmit={handleSubmit(e => {
          submitLogin(e);
          console.log(e);
        })}
      >
        {/* <Stack w={'full'} mb={4}>
          <Typography.Text>Login ID</Typography.Text>
          <Form.Item>
            <Controller
              name="username"
              control={control}
              rules={{ required: 'This is Required' }}
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  placeholder="Allen"
                  name="username"
                  prefix={<UserOutlined />}
                  //   onChange={e =>
                  //     setLoginData({
                  //       ...loginData,
                  //       username: e.target.value,
                  //     })
                  //   }
                />
              )}
            />

            <Text as={'span'} fontSize={'12px'} color={'#F80D4D'}>
              {errors.username?.message}
            </Text>
          </Form.Item>
        </Stack> */}
        <Stack w={'full'} mb={4}>
          <Typography.Text>Verification Code</Typography.Text>
          <Form.Item>
            <Controller
              name="passcode"
              control={control}
              rules={{ required: 'This is Required' }}
              render={({ field }) => (
                <Input
                  type={showPass ? 'text' : 'passcode'}
                  size="large"
                  {...field}
                  name="passcode"
                  placeholder="**************"
                  prefix={<AiOutlineLock />}
                  //   onChange={e =>
                  //     setLoginData({
                  //       ...loginData,
                  //       passcode: e.target.value,
                  //     })
                  //   }
                />
              )}
            />

            <Button
              onClick={() => setShowPass(!showPass)}
              position={'absolute'}
              right={'5px'}
              background={'transparent'}
              _hover={{ bgColor: 'transparent' }}
              _active={{ bgColor: 'transparent' }}
              zIndex={10}
            >
              <Icon as={showPass ? BsEyeFill : BsEyeSlashFill} />
            </Button>

            <Text as={'span'} fontSize={'12px'} color={'#F80D4D'}>
              {errors.passcode?.message}
            </Text>
          </Form.Item>
        </Stack>

        <Button
          // onClick={() => { submitLogin() }}
          type="submit"
          bgColor={'#4A4A4A'}
          color={'#fff'}
          padding={'12px'}
          w={'full'}
          margin={'38px 0 25px'}
          fontSize={'16px'}
          fontWeight={'500'}
          border={'2px solid #4A4A4A'}
          _hover={{
            bgColor: 'transparent',
            color: '#4A4A4A',
          }}
        >
          Submit
        </Button>
      </form>
      
    </>
  )
}
