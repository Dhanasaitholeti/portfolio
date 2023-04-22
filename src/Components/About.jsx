import {  Box, Container, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import myImg from "../assets/myImage.jpg"

const About = () => {
    return (  
            <Box as="section" id="about" h="max-content" bgColor={"#FAFFFD"} alignItems="center" flexDir="column" p="3%">
                    <Heading color="#3D3D3D">About Me</Heading>
                    <SimpleGrid columns={2}  spacing={5}  alignContent="center" justifyItems="center">

                        <Box justifySelf="end" boxShadow="0 1px 3px black" borderRadius="15px">
                                <Image src={myImg} borderRadius="15px" h="500px" />                            
                        </Box>

                        <Box justifySelf="start" p="1vw" >
                                <SimpleGrid columns={2}  p="5vw"   borderRadius="15px" boxShadow="0 1px 3px black">
                                        
                                        <Box display="grid" fontWeight="bolder" gap={"20px"}  >
                                            <Text>Name:</Text>
                                            <Text>Date of Birth:</Text>
                                            <Text>City:</Text>
                                            <Text>Email:</Text>
                                            <Text>Phone:</Text>
                                            
                                        </Box>
                                        <Box display="grid" gap="10%">
                                            <Text>Dhanasai</Text>
                                            <Text>22-01-2003</Text>
                                            <Text>kakinada,Andrapradesh</Text>
                                            <Text>dhanasai5566@gmail.com</Text>
                                            <Text>9618378837</Text>

                                        </Box>

                                </SimpleGrid>
                            
                        </Box>

                    </SimpleGrid>
        
            </Box>
    );
}
 
export default About;