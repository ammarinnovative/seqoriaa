import { Image, Table, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import { useState } from 'react';
import Wifi from '../../../assets/images/desired-icons/wifi.svg'

export default function EnterpriseRiskTable({ onOpen, onAssignOpen }) {

    const [tableHead, setTableHead] = useState(['Status', 'Description', 'Assets at Risk', 'Impact', 'Details', 'Remediation Status', 'Assigned to', 'Action']);
    const [tableBody, setTableBody] = useState([
        {
            icon: Wifi,
            des: 'simontopia',
            assets: 'simontopia',
            impact: 'simontopia',
            details: 'simontopia',
            remediation: 'simontopia',
            assigned: 'simontopia',
            action: 'simontopia',
        },
        {
            icon: Wifi,
            des: 'simontopia',
            assets: 'simontopia',
            impact: 'simontopia',
            details: 'simontopia',
            remediation: 'simontopia',
            assigned: 'simontopia',
            action: 'simontopia',
        },
        {
            icon: Wifi,
            des: 'simontopia',
            assets: 'simontopia',
            impact: 'simontopia',
            details: 'simontopia',
            remediation: 'simontopia',
            assigned: 'simontopia',
            action: 'simontopia',
        },
        {
            icon: Wifi,
            des: 'simontopia',
            assets: 'simontopia',
            impact: 'simontopia',
            details: 'simontopia',
            remediation: 'simontopia',
            assigned: 'simontopia',
            action: 'simontopia',
        },
        {
            icon: Wifi,
            des: 'simontopia',
            assets: 'simontopia',
            impact: 'simontopia',
            details: 'simontopia',
            remediation: 'simontopia',
            assigned: 'simontopia',
            action: 'simontopia',
        },
        {
            icon: Wifi,
            des: 'simontopia',
            assets: 'simontopia',
            impact: 'simontopia',
            details: 'simontopia',
            remediation: 'simontopia',
            assigned: 'simontopia',
            action: 'simontopia',
        },
        {
            icon: Wifi,
            des: 'simontopia',
            assets: 'simontopia',
            impact: 'simontopia',
            details: 'simontopia',
            remediation: 'simontopia',
            assigned: 'simontopia',
            action: 'simontopia',
        },
        {
            icon: Wifi,
            des: 'simontopia',
            assets: 'simontopia',
            impact: 'simontopia',
            details: 'simontopia',
            remediation: 'simontopia',
            assigned: 'simontopia',
            action: 'simontopia',
        },
        {
            icon: Wifi,
            des: 'simontopia',
            assets: 'simontopia',
            impact: 'simontopia',
            details: 'simontopia',
            remediation: 'simontopia',
            assigned: 'simontopia',
            action: 'simontopia',
        },
        {
            icon: Wifi,
            des: 'simontopia',
            assets: 'simontopia',
            impact: 'simontopia',
            details: 'simontopia',
            remediation: 'simontopia',
            assigned: 'simontopia',
            action: 'simontopia',
        },
    ])

    return (
        <Table>
            <Thead
                className='enerpriseRiskTableHead'
            >
                <Tr
                    bgColor={'#eaeaea'}
                    border={'1px solid #CBCBCB'}
                >
                    {
                        tableHead.map((v, i) => <Td key={i} color={'#262626'} fontSize={'14px'} fontWeight={'700'}>{v}</Td>)
                    }
                </Tr>
            </Thead>
            <Tbody
                className='enerpriseRiskTable'
            >
                {
                    tableBody.map((v, i) => {
                        return (
                            <Tr key={i} bgColor={i % 2 !== 0 ? '#f0f1f3' : '#fff'}>
                                <Td color={'#262626'} fontSize={'14px'} fontWeight={'700'}><Image src={v.icon} /></Td>
                                <Td color={'#262626'} fontSize={'14px'} fontWeight={'700'}>{v.des}</Td>
                                <Td color={'#262626'} fontSize={'14px'} fontWeight={'700'} onClick={() => onOpen()} cursor={'pointer'}>{v.assets}</Td>
                                <Td color={'#262626'} fontSize={'14px'} fontWeight={'700'}>{v.impact}</Td>
                                <Td color={'#262626'} fontSize={'14px'} fontWeight={'700'}>{v.details}</Td>
                                <Td color={'#262626'} fontSize={'14px'} fontWeight={'700'}>{v.remediation}</Td>
                                <Td color={'#262626'} fontSize={'14px'} fontWeight={'700'}>{v.assigned}</Td>
                                <Td color={'#262626'} fontSize={'14px'} fontWeight={'700'} onClick={() => onAssignOpen()} cursor={'pointer'}>{v.action}</Td>
                            </Tr>
                        )
                    })
                }
            </Tbody>
        </Table>
    )
}
