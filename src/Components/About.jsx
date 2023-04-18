import {  Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import Img from "../assets/man.png"

const About = () => {
    return (  
            <Flex as="section" id="about" h="max-content" bgColor={"#FAFFFD"} alignItems="center" flexDir="column">
                    <Flex justifyContent="center"><Heading>About me</Heading></Flex>
                    <Box >
                        <Flex h={"150px"} w={"150px"}>
                                <Image src={Img} />
                        </Flex>
                        <Text>Name:Dhanasai Tholeti</Text>
                        <Text>22-01-2003</Text>
                        <Text></Text>
                    </Box>
        
            </Flex>
    );
}
 
export default About;