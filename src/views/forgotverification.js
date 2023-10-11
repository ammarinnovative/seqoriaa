import { Container, Stack, Text } from "@chakra-ui/react";
import Forgotpassword from "../components/Auth/Forgotpassword";

export default function Forgotverification() {
  return (
    <>
    <Stack
          bgColor={'#fff'}
          w={'100vw'}
          h={'100%'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          color={'#262626'}
          fontFamily={'Inter'}
      >
          <Container maxW={'2xl'}>
              <Forgotpassword/>
          </Container>
          </Stack>
  </>
  )
}
