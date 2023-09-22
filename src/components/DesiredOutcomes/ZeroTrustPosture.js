import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react'
import FlowChart from '../../assets/images/zeroTrustFlowChart.svg'

export default function ZeroTrustPosture() {
    return (
        <Stack
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'15px'}
            w={"90%"}
            margin={'0 auto'}
        >
            <Heading
                color={'#344054'}
                fontSize={'18px'}
                fontWeight={'600'}
            >
                Zero-Trust Posture
            </Heading>
            <Image src={FlowChart} alt={'flow chart'} w={'full'} />
            <Text
                color={'#8A959E'}
                fontWeight={'600'}
            >
                0 - 10 Score for each ( Low - Medium - High )
            </Text>
            <Button
                mt={'40px !important'}
                w={'400px'}
                bgColor={'transparent'}
                color={'#2B2B2C'}
                padding={'22px 0'}
                fontSize={'14px'}
                fontWeight={'600'}
                border={'2px solid #2B2B2C'}
                borderRadius={'6px'}
                _hover={{
                    bgColor: '#2B2B2C',
                    color: '#fff'
                }}
            >
                Zero-Trust Maturity ( Low / Medium / High )
            </Button>
        </Stack>
    )
}
