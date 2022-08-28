import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiUsers,
    FiDollarSign,
    FiSettings
} from 'react-icons/fi'


// import { IoPawOutline } from 'react-icons/io5' 

import NavItem from './navitem'


export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="absolute"
            left="0"
            top="0"
            h="100vh"
            marginTop="0"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="2%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "center"}
                as="nav"
            >
                <IconButton
                    aria-label=''
                    background="none"
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem link='/'  navSize={navSize} icon={FiHome} title="Home" description="Dashboard Home page" active />
                <NavItem link='/commandes' navSize={navSize} icon={FiCalendar} title="Commandes" description="Current Commandes managment Page" active={false} />
                <NavItem link="/inventaire" navSize={navSize} icon={FiUser} title="Inventaire" description="Dashboard Inventaire managment page" active={false} />
                <NavItem link="/sales" navSize={navSize} icon={FiDollarSign} title="Sales" description="Dashboard Sales managment page" active={false} />
                <NavItem link="/users" navSize={navSize} icon={FiUsers} title="users" description="Dahboard User managment page" active={false} />
                <NavItem link="/settings" navSize={navSize} icon={FiSettings} title="Settings" description="" active={false} />
            </Flex>
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
