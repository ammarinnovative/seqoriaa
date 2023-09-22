import { Stack } from "@chakra-ui/react";

export default function SpacedStack({ children, ...rest }) {
    return (
        <Stack
            padding={'35px 30px'}
            background={'#fff'}
            borderRadius={'10px'}
            marginBottom={'20px !important'}
            {...rest}
        >
            {children}
        </Stack>
    )
}