import { ClockCircleOutlined } from "@ant-design/icons";
import { Box, Icon, Stack } from "@chakra-ui/react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { useState } from "react";
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',  
            labels: {
                boxWidth: 0,
              }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = [
    'Jul 1',
    'Jul 2',
    'Jul 3',
    'Jul 4',
    'Jul 5',
    'Jul 6',
    'Jul 7',
    'Jul 8',
    'Jul 9',
    'Jul 10',
    'Jul 11',
    'Jul 12',
    'Jul 13',
    'Jul 14',
    'Jul 15',
    'Jul 16',
    'Jul 17',
    'Jul 18',
  ];

export default function EnterpriseRiskLineChart() {

    const [timeList] = useState(['2 hours day', 'week', 'month', 'whitelist', 'all listed'])
    const [selectedTime, setSelectedTime] = useState('week');
    const [data, setData] = useState({
        labels,
        datasets: [
            {
                fill: true,
                label: '',
                data: labels.map(() => Math.floor(Math.random() * 60)),
                borderColor: '#2B2B2C',
                backgroundColor: '#ffffff1c',
            },
        ],
    });
    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
        >
            <Stack
                className="timeList"
                direction={'row'}
                padding={'10px'}
                w={'240px'}
            >
                <Box
                    mt={'5px'}
                >
                    <Icon as={ClockCircleOutlined} />
                </Box>
                <Box>
                    <ul>
                        {
                            timeList.map((v, i) =>
                                <li className={selectedTime === v ? 'current' : ''} onClick={() => setSelectedTime(v)} key={i}>{v}</li>
                            )
                        }
                    </ul>
                </Box>
            </Stack>
            <Box
                className="lineChart"
                w={'full'}
                height={'280px'}
            >
                <Line options={options} data={data} />
            </Box>
        </Stack>
    )
}
