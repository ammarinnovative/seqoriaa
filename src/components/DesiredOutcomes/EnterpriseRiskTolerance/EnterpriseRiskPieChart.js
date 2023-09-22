import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Button, Heading, Icon, Stack } from '@chakra-ui/react';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#fff',
                '#b0b0b0',
                '#717171',
                '#fff',
                '#b0b0b0',
                '#717171',
            ],
            borderColor: [
                '#717171',
                '#717171',
                '#717171',
                '#717171',
                '#717171',
                '#717171'
            ],
            borderWidth: 1,
        },
    ],
};

export default function EnterpriseRiskPieChart() {
    return (
        <Stack
            padding={'10px 0'}
        >
            <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'10px'}
            >
                <Button
                    bgColor={'transparent'}
                    _hover={{ bgColor: 'transparent' }}
                    _active={{ bgColor: 'transparent' }}
                ><Icon as={BsCaretLeftFill} /></Button>
                <Heading textAlign={'center'} fontSize={'16px'}>Applications</Heading>
                <Button
                    bgColor={'transparent'}
                    _hover={{ bgColor: 'transparent' }}
                    _active={{ bgColor: 'transparent' }}
                ><Icon as={BsCaretRightFill} /></Button>
            </Stack>
            <Pie data={data} />
        </Stack>
    );
}
