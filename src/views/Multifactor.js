import { Container, Stack, Text } from "@chakra-ui/react";
import Factorauth from "../components/Auth/Factorauth";


export default function Multifactor() {
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
                <Factorauth/>
            </Container>
            </Stack>
    </>
  )
}
