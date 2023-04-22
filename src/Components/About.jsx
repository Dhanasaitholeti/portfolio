import {  Box, Button, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import myImg from "../assets/myImage.jpg"

const About = () => {
    return (  
            <Box as="section" id="about" h="max-content" bgColor={"#FAFFFD"} alignItems="center" flexDir="column" p="3%">
                    <Heading color="#3D3D3D">About Me</Heading>
                    <SimpleGrid columns={{md:1,lg:2}}  spacing={5} p={"2%"} alignContent="center" justifyItems="center">

                        <Box display={{base:"none",md:"block"}} justifySelf={{base:"center",lg:"end"}} boxShadow="0 1px 3px black" borderRadius="10px" h={{base:"200px",lg:"500px"}}>
                                <Image src={myImg} borderRadius="inherit" h="inherit" />                            
                        </Box>

                        <Box justifySelf={{base:"center",lg:"start"}} >
                                <SimpleGrid columns={2}  p="5vw"   borderRadius="15px" boxShadow="0 1px 3px black">
                                        
                                        <Box display="grid" fontSize={{base:"14px",md:"16px"}} fontWeight="medium" gap={"20px"}  >
                                            <Text>Name:</Text>
                                            <Text>Date of Birth:</Text>
                                            <Text>City:</Text>
                                            <Text>Email:</Text>
                                            <Text>Phone:</Text>
                                            
                                        </Box>
                                        <Box display="grid" gap="10%" fontWeight="bolder" fontSize={{base:"12px",md:"16px"}}>
                                            <Text>Dhanasai</Text>
                                            <Text>22-01-2003</Text>
                                            <Text>kakinada,Andrapradesh</Text>
                                            <Text>dhanasai5566@gmail.com</Text>
                                            <Text>9618378837</Text>
                                        </Box>
                                </SimpleGrid>

                                {/* <Heading my={"2%"}>Download the <Button>CV</Button></Heading> */}
                        </Box>
                    </SimpleGrid>
            </Box>
    );
}
 
export default About;