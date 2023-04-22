import { Button, Flex, HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as Clink } from "@chakra-ui/react";


const Header = () => {
    return ( 
        <Flex as={"nav"} zIndex={1} position={"fixed"} width="100%" bg={"white"} color={"black"}  px={"30px"} h={"7vh"} justifyContent="space-around" borderBottom="2px solid #D6EAE1" >
            <HStack>
                <Heading as={"h1"} color="#3D3D3D">Dhanasai</Heading>
            </HStack>
            
            <HStack spacing={"20px"} display={{base:"none", md:"flex"}}>
                <Button colorScheme={'teal'} variant="ghost"><Clink href="/#home">Home</Clink></Button>
                <Button colorScheme={'teal'} variant="ghost"><Clink href="/#about">About</Clink></Button>
                <Button colorScheme={'teal'} variant="ghost"><Clink href="/#skills">Skills</Clink></Button>
                <Button colorScheme={'teal'} variant="outline"><Link to="/projects">Projects</Link></Button>
                <Button colorScheme={'teal'} variant="ghost"><Clink href="/#contact">Contact</Clink></Button>
            </HStack>         
        </Flex>
     );
}
 
export default Header;