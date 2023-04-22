import { 
    Box, 
    Button, 
    Card, 
    CardBody, 
    CardFooter, 
    CardHeader, 
    Heading, 
    Image, 
    List, 
    ListItem, 
    SimpleGrid, 
    Tab, 
    TabList, 
    TabPanel, 
    TabPanels, 
    Tabs
} from "@chakra-ui/react";

import student_Profile from "../assets/promos/studentProfile.jpeg" 
import Infoboard from "../assets/promos/infoboard.jpeg"
import RPS from "../assets/promos/RPS.jpeg"
import Library from "../assets/promos/library.jpeg"
import Dhindora from "../assets/promos/Dhindora.jpeg"
import portfolio from "../assets/promos/portfolio.png"


const Projects = () => {

    const tabsstyles = {
        variant:"soft-rounded" ,
        colorScheme:"green",
        align:"center",
        isFitted:true
    }
    return ( 
        <Box as="section" h="max-content"  w="100%" bgColor={"#fdffff"} pos="absolute" top="7vh" p={"3%"}>
                    <Heading color="#3D3D3D"> Projects</Heading>
           <SimpleGrid columns={3}  spacing="50px" p={"2%"} justifyItems="center" >



            {/* Dhindora */}
           <Card w="max-content"  boxShadow="0 2px 5px black" >
            <CardHeader display="flex" justifyContent="center">
                <Heading as="h6" color="#3D3D3D">Dhindora!</Heading>
            </CardHeader>
            <CardBody  py={0} >
            <Tabs {...tabsstyles} >
                    <TabList>
                        <Tab>prototype</Tab>
                        <Tab>Tools</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Image src={Dhindora} h="250px" w="400px" borderRadius="10px" boxShadow="0 2px 3px black"/></TabPanel>
                        <TabPanel>
                            <SimpleGrid columns={2} maxHeight={"250px"} w={"400px"} overflowY="scroll" >
                                
                                <List fontSize="24px">
                                        <ListItem fontWeight="bold">Frontend</ListItem>
                                        <ListItem>CSS</ListItem>  
                                        <ListItem>Javascript</ListItem>
                                        <ListItem>React</ListItem>
                                        <ListItem>Redux</ListItem>
                                        <ListItem>Redux-Saga</ListItem>
                                </List>
                                <List fontSize="24px">
                                        <ListItem fontWeight="bold">Backend</ListItem>
                                        <ListItem>Node Js</ListItem>
                                        <ListItem>Express Js</ListItem>  
                                        <ListItem>REST API</ListItem>
                                        <ListItem>MongoDB</ListItem>
                                        <ListItem>Authentication</ListItem>
                                </List>

                                
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
            <CardFooter display="flex" justifyContent={"space-evenly"}>
                <Button ><a href="https://dhindora.netlify.app/">view site</a></Button>
                <Button>Demo video</Button>
            </CardFooter>
           </Card>

            {/* student_Profile */}
           <Card w="max-content"  boxShadow="0 2px 5px black" >
            <CardHeader display="flex" justifyContent="center">
                <Heading as="h6" color="#3D3D3D">Student-Profile</Heading>
            </CardHeader>
            <CardBody  py={0} >
            <Tabs {...tabsstyles} >
                    <TabList>
                        <Tab>prototype</Tab>
                        <Tab>Tools</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Image src={student_Profile} h="250px" w="400px" borderRadius="10px" boxShadow="0 2px 3px black"/></TabPanel>
                        <TabPanel>
                        <SimpleGrid columns={2} maxHeight={"250px"} w={"400px"} overflowY="scroll" >
                                
                                <List fontSize="24px">
                                        <ListItem fontWeight="bold">Frontend</ListItem>
                                        <ListItem>CSS</ListItem>  
                                        <ListItem>Javascript</ListItem>
                                        <ListItem>React</ListItem>
                                        <ListItem>Redux</ListItem>
                                </List>
                                <List fontSize="24px">
                                        <ListItem fontWeight="bold">Backend</ListItem>
                                        <ListItem>Node Js</ListItem>
                                        <ListItem>Express Js</ListItem>  
                                        <ListItem>REST API</ListItem>
                                        <ListItem>MongoDB</ListItem>
                                </List>
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
            <CardFooter display="flex" justifyContent={"space-evenly"}>
                <Button> <a href="https://studentprofileup.netlify.app/"> view site</a></Button>
                <Button>Demo video</Button>
            </CardFooter>
           </Card>


            {/* Infoboard */}
           <Card w="max-content"  boxShadow="0 2px 5px black" >
            <CardHeader display="flex" justifyContent="center">
                <Heading as="h6" color="#3D3D3D">Infoboard</Heading>
            </CardHeader>
            <CardBody  py={0} >
            <Tabs {...tabsstyles} >
                    <TabList>
                        <Tab>prototype</Tab>
                        <Tab>Tools</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Image src={Infoboard} h="250px" w="400px" borderRadius="10px" boxShadow="0 2px 3px black"/></TabPanel>
                        <TabPanel>
                        <SimpleGrid columns={2} maxHeight={"250px"} w={"400px"} overflowY="scroll" >
                                
                                <List fontSize="24px">
                                        <ListItem fontWeight="bold">Frontend</ListItem>
                                        <ListItem>CSS</ListItem>  
                                        <ListItem>Javascript</ListItem>
                                        <ListItem>React</ListItem>
                                        <ListItem>Redux</ListItem>
                                </List>
                                <List fontSize="24px">
                                        <ListItem fontWeight="bold">Backend</ListItem>
                                        <ListItem>Node Js</ListItem>
                                        <ListItem>Express Js</ListItem>  
                                        <ListItem>REST API</ListItem>
                                </List>
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
            <CardFooter display="flex" justifyContent={"space-evenly"}>
                <Button> <a href="https://infoboard-by-dhanasai.netlify.app/"> view site </a></Button>
                <Button>Demo video</Button>
            </CardFooter>
           </Card>


            {/* portfolio */}
           <Card w="max-content"  boxShadow="0 2px 5px black" >
            <CardHeader display="flex" justifyContent="center">
                <Heading as="h6" color="#3D3D3D">Portfolio</Heading>
            </CardHeader>
            <CardBody  py={0} >
            <Tabs {...tabsstyles}>
                    <TabList>
                        <Tab>prototype</Tab>
                        <Tab>Tools</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Image src={portfolio} h="250px" w="400px" borderRadius="10px" boxShadow="0 2px 3px black"/></TabPanel>
                        <TabPanel>
                        <SimpleGrid  maxHeight={"250px"} w={"400px"} overflowY="scroll" >
                                
                                <List fontSize="24px">
                                        <ListItem fontWeight="bold">Frontend</ListItem>
                                        <ListItem>CSS</ListItem>  
                                        <ListItem>Javascript</ListItem>
                                        <ListItem>React</ListItem>
                                        <ListItem>Redux</ListItem>
                                        <ListItem>Chakra-UI</ListItem>
                                </List>
                        </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
            <CardFooter display="flex" justifyContent={"space-evenly"}>
                <Button>view site</Button>
                <Button>Demo video</Button>
            </CardFooter>
           </Card>


            {/* Library */}
           <Card w="max-content"  boxShadow="0 2px 5px black" >
            <CardHeader display="flex" justifyContent="center">
                <Heading as="h6" color="#3D3D3D">Library</Heading>
            </CardHeader>
            <CardBody  py={0} >
                <Tabs {...tabsstyles}>
                    <TabList>
                        <Tab>prototype</Tab>
                        <Tab>Tools</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Image src={Library} h="250px" w="400px" borderRadius="10px" boxShadow="0 2px 3px black"/></TabPanel>
                        <TabPanel>
                        <SimpleGrid  maxHeight={"250px"} w={"400px"} overflowY="scroll" >
                                
                                <List fontSize="24px">
                                        <ListItem fontWeight="bold">Frontend</ListItem>
                                        <ListItem>Html</ListItem>
                                        <ListItem>CSS</ListItem>
                                        <ListItem>Javascript</ListItem>
                                </List>
                        </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
            <CardFooter display="flex" justifyContent={"space-evenly"}>
                <Button> <a href="https://dhanasaitholeti.github.io/library/"> view site </a></Button>
                <Button>Demo video</Button>
            </CardFooter>
           </Card>

            {/* RPS */}
           <Card w="max-content"  boxShadow="0 2px 5px black" >
            <CardHeader display="flex" justifyContent="center">
                <Heading as="h6" color="#3D3D3D">Rock-Paper-Scissor</Heading>
            </CardHeader>
            <CardBody  py={0} >
            <Tabs {...tabsstyles} >
                    <TabList>
                        <Tab>prototype</Tab>
                        <Tab>Tools</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Image src={RPS} h="250px" w="400px" borderRadius="10px" boxShadow="0 2px 3px black"/></TabPanel>
                        <TabPanel>
                        <SimpleGrid  maxHeight={"250px"} w={"400px"} overflowY="scroll" >
                                
                                <List fontSize="24px">
                                        <ListItem fontWeight="bold">Frontend</ListItem>
                                        <ListItem>Html</ListItem>
                                        <ListItem>CSS</ListItem>
                                        <ListItem>Javascript</ListItem>
                                </List>
                        </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
            <CardFooter display="flex" justifyContent={"space-evenly"}>
                <Button>  <a href="https://dhanasaitholeti.github.io/rock-paper-scissor/"> view site </a></Button>
                <Button>Demo video</Button>
            </CardFooter>
           </Card>
          
           </SimpleGrid>
        </Box>
     );
}
 
export default Projects;