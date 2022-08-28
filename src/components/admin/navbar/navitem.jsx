import React, { useState } from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList,
    Box
} from '@chakra-ui/react'
import NavHoverBox from './hoverNavbar'
import { useNavigate } from 'react-router-dom'

export default function NavItem({ icon, title, description, active, navSize,link }) {
    const [hover,setHover] = useState(()=>false)
    const history = useNavigate()
    
    const handleHover = () => {
        setHover(!hover)
    }

    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && "#AEC8CA"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                    w={navSize == "large" && "100%"}
                    onClick={() => history(link)}    
                    onMouseEnter={()=>handleHover()}
                    onMouseLeave={()=>handleHover()}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                
 {/* hover?  <Box
                    py={0}
                    border="none"
                    w={200}
                    h={200}
                    ml={200}
                
                >
                    <NavHoverBox title={title} icon={icon} description={description} />
 </Box>:null */}
            </Menu>          
        </Flex>
    )
}
