import { Box, Flex, HStack, Heading, Link, Spacer, Text } from "@chakra-ui/react";

const Header = () => {
    return ( 
        <Flex as={"nav"} bg={"white"} color={"black"}  px={"30px"} h={"10vh"} justifyContent="space-around" borderBottom="2px solid #D6EAE1" >
            <HStack>
                <Heading as={"h1"}>Dhanasai</Heading>
            </HStack>
            
            <HStack spacing={"20px"}>
                <Text>Home</Text>
                <Text>About</Text>
                <Text>Skills</Text>
                <Text>Projects</Text>
                <Text>Contact</Text>
            </HStack>         
        </Flex>
     );
}
 
export default Header;