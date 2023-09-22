'use client'

import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,
    Image,
    Stack,
    Text
} from '@chakra-ui/react'
import { FiMenu, FiLifeBuoy } from 'react-icons/fi'
import { RiHome3Line, RiFileCloudLine, RiStackLine, RiSearchLine } from 'react-icons/ri'
import { BsPhoneLandscape, BsChevronUp, BsChevronDown } from 'react-icons/bs'
import { BiPieChartAlt2, BiUserCircle } from 'react-icons/bi'
import { AiOutlineFileText, AiOutlineProfile, AiOutlineDisconnect } from 'react-icons/ai'
import Logo from '../../assets/images/logo.svg'
import policy from "../../assets/images/companies/policy.png";
import { Link as ReactLink, useLocation } from 'react-router-dom'

const LinkItems = [
    { name: 'Dashboard', url: '', icon: RiHome3Line },
    { name: 'Cloud Onboarding', url: 'cloud-onboarding', icon: RiFileCloudLine },
    { name: 'Desired Outcomes', url: 'desired-outcomes', icon: RiStackLine },
    { name: 'Devices Applications', url: 'device-application', icon: BsPhoneLandscape },
    { name: 'Solution Builder', url: 'solution-builder', icon: BiPieChartAlt2 },
    { name: 'Discover Inventory', url: 'discover-inventory', icon: RiSearchLine },
    { name: 'Logging', url: '', icon: AiOutlineFileText },
    { name: 'Summary Report', url: '', icon: AiOutlineProfile },
    { name: 'Administration', url: '', icon: BiUserCircle },
    { name: 'Risk/Cost Impact Simulation', url: 'risk-simulation', icon: FiLifeBuoy },
    { name: 'Cloud/Business Impact Simulation', url: 'business-simulation', icon: FiLifeBuoy },
    { name: 'Third-Party Integrations', url: '', icon: AiOutlineDisconnect },
    { name: 'Policy Generator', url: 'Policy-Generator', icon: AiOutlineDisconnect },
]

export default function SimpleSidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {/* Content */}
            </Box>
        </Box>
    )
}

const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('transparent', 'transparent')}
            w={{ base: 'full', md: '350px' }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Image src={Logo} margin={'30px 0'} />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} url={link.url}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    )
}

const NavItem = ({ icon, url, children, ...rest }) => {
    const location = useLocation();
    return (
        <Box
            mt={'5px'}
            display={'block'}
            as={ReactLink}
            to={`/${url}`}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
        >

            <Flex
                align="center"
                justifyContent={'space-between'}
                py="2"
                px="4"
                mx="3"
                borderRadius="lg"
                role="group"
                transition={'0.2s'}
                cursor="pointer"
                bgColor={location.pathname === `/${url}` ? '#4A4A4A' : 'transparent'}
                color={location.pathname === `/${url}` ? '#fff' : '#8A959E'}
                _hover={{
                    bg: '#4A4A4A',
                    color: 'white',
                }}
                {...rest}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                >
                    {icon && (
                        <Icon
                            mr="2"
                            fontSize="18"
                            _groupHover={{
                                color: 'white',
                            }}
                            as={icon}
                        />
                    )}
                    <Text fontSize={'15px'}>{children}</Text>
                </Stack>
                <Icon
                    fontSize="16"
                    _groupHover={{
                        color: 'white',
                    }}
                    as={location.pathname === `/${url}` ? BsChevronUp : BsChevronDown}
                />
            </Flex>
        </Box>
    )
}

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Image src={Logo} margin={'30px 0'} />
        </Flex>
    )
}