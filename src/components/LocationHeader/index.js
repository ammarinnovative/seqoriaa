import { Icon, Stack, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { BsChevronRight } from 'react-icons/bs'

export default function LocationHeader({ optionsList, followingRoute, forcedText }) {
    const location = useLocation();
    console.log(optionsList)
    console.log(followingRoute)
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            margin={'0 0 30px 0'}
            fontWeight={'500'}
        >
            {
                forcedText ?
                    <Text
                        textTransform={'capitalize'}
                        color={'#8A959E'}
                    >{forcedText}</Text>
                    :
                    <Text
                        textTransform={'capitalize'}
                        color={'#8A959E'}
                    >
                        {location.pathname.split('-')[0].replace('/', '')} {location.pathname.split('-')[1]}
                    </Text>
            }
            {
                followingRoute &&
                followingRoute.map((v, i) => {
                    if (v) return (
                        <Stack
                            // key={i}
                            direction={'row'}
                            alignItems={'center'}
                        >
                            {
                                optionsList &&
                                <Text color={'#8A959E'} as={'span'}>{i === 0 ? <Icon as={BsChevronRight} fontSize={12} /> : ','} {optionsList[i]}</Text>
                            }
                            <Text color={'#8A959E'} as={'span'}><Icon as={BsChevronRight} fontSize={12} /> {v}</Text>
                        </Stack>
                    )
                }
                )
            }
        </Stack >
    )
}
