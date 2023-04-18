import { Button, Flex, HStack, Heading } from "@chakra-ui/react";



const Header = () => {
    return ( 
        <Flex as={"nav"} zIndex={1} position={"fixed"} width="100%" bg={"white"} color={"black"}  px={"30px"} h={"7vh"} justifyContent="space-around" borderBottom="2px solid #D6EAE1" >
            <HStack>
                <Heading as={"h1"}>Dhanasai</Heading>
            </HStack>
            
            <HStack spacing={"20px"}>
                <Button colorScheme={'teal'} variant="ghost"><a href="#home">Home</a></Button>
                <Button colorScheme={'teal'} variant="ghost"><a href="#about">About</a></Button>
                <Button colorScheme={'teal'} variant="ghost"><a href="#skills">Skills</a></Button>
                <Button colorScheme={'teal'} >Projects</Button>
                <Button colorScheme={'teal'} variant="ghost"><a href="#contact">Contact</a></Button>
            </HStack>         
        </Flex>
     );
}
 
export default Header;