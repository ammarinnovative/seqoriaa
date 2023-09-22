import { Container, Stack } from "@chakra-ui/react";
import Register from "../components/Auth/Register";
import { useState } from "react";
import Login from "../components/Auth/Login";

export default function Auth() {

    const [showLogin, setShowLogin] = useState(true);

    return (
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
                {
                    showLogin ?
                        <Login setShowLogin={setShowLogin} />
                        :
                        <Register setShowLogin={setShowLogin} />
                }
            </Container>
        </Stack>
    );
}