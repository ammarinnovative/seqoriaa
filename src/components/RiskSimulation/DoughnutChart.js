import { Box, Heading } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export default function DoughnutChart({ data }) {

    const [colors, setColors] = useState(['#4A4A4A', '#F6F6F6']);
    useEffect(() => {
        (data[0]['value'] >= 0 && data[0]['value'] <= 33) ? setColors(['#FF0000', '#F6F6F6'])
            : (data[0]['value'] > 33 && data[0]['value'] < 75) ? setColors(['#FFEC00', '#F6F6F6'])
                : setColors(['#52d726', '#F6F6F6'])
    }, [data])

    return (
        <Box
            position={'relative'}
        >
            <PieChart
                width={260}
                height={200}
            >
                <Pie
                    data={data}
                    cx={130}
                    cy={100}
                    startAngle={90}
                    endAngle={450}
                    innerRadius={60}
                    outerRadius={80}
                    cornerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
            </PieChart>
            <Heading
                fontFamily={'Inter'}
                fontWeight={'500'}
                fontSize={'30px'}
                position={'absolute'}
                top={'50%'}
                left={'50%'}
                transform={'translate(-40%, -40%)'}
            >
                {data[0]['value']}%
            </Heading>
        </Box>
    );
}