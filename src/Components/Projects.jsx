import { 
    Box, 
    Button, 
    Card, 
    CardBody, 
    CardFooter, 
    CardHeader, 
    Heading, 
    Image, 
    SimpleGrid, 
    Tab, 
    TabList, 
    TabPanel, 
    TabPanels, 
    Tabs, 
    Text 
} from "@chakra-ui/react";
import student_Profile from "../assets/promos/studentProfile.jpeg" 
import Infoboard from "../assets/promos/infoboard.jpeg"
import RPS from "../assets/promos/RPS.jpeg"
import Library from "../assets/promos/library.jpeg"




const Projects = () => {
    return ( 
        <Box as="section" h="max-content"  w="100%" bgColor={"#fdffff"} pos="absolute" top="7vh" p={"3%"}>
                    <Heading> Projects</Heading>
           <SimpleGrid columns={3}  spacing="50px" p={"2%"} justifyItems="center" >


           <Card w="max-content"  boxShadow="0 2px 5px black" >
            <CardHeader display="flex" justifyContent="center">
                <Heading as="h6">Dhindora!</Heading>
            </CardHeader>
            <CardBody  py={0} >
            <Tabs variant="soft-rounded" colorScheme="green" >
                    <TabList>
                        <Tab>prototype</Tab>
                        <Tab>Tools</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Image src={student_Profile} h="250px" w="400px" borderRadius="10px" boxShadow="0 2px 3px black"/></TabPanel>
                        <TabPanel>
                            <SimpleGrid w={"400px"}></SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
            <CardFooter display="flex" justifyContent={"space-evenly"}>
                <Button>view site</Button>
                <Button>Demo video</Button>
            </CardFooter>
           </Card>


           <Card w="max-content"  boxShadow="0 2px 5px black" >
            <CardHeader display="flex" justifyContent="center">
                <Heading as="h6">Student-Profile</Heading>
            </CardHeader>
            <CardBody  py={0} >
            <Tabs variant="soft-rounded" colorScheme="green" >
                    <TabList>
                        <Tab>prototype</Tab>
                        <Tab>Tools</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Image src={student_Profile} h="250px" w="400px" borderRadius="10px" boxShadow="0 2px 3px black"/></TabPanel>
                        <TabPanel>
                            <SimpleGrid w={"400px"}></SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
            <CardFooter display="flex" justifyContent={"space-evenly"}>
                <Button>view site</Button>
                <Button>Demo video</Button>
            </CardFooter>
           </Card>


            
           <Card w="max-content"  boxShadow="0 2px 5px black" >
            <CardHeader display="flex" justifyContent="center">
                <Heading as="h6">Infoboard</Heading>
            </CardHeader>
            <CardBody  py={0} >
            <Tabs variant="soft-rounded" colorScheme="green" >
                    <TabList>
                        <Tab>prototype</Tab>
                        <Tab>Tools</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Image src={Infoboard} h="250px" w="400px" borderRadius="10px" boxShadow="0 2px 3px black"/></TabPanel>
                        <TabPanel>
                            <SimpleGrid w={"400px"}></SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
            <CardFooter display="flex" justifyContent={"space-evenly"}>
                <Button>view site</Button>
                <Button>Demo video</Button>
            </CardFooter>
           </Card>


           <Card w="max-content"  boxShadow="0 2px 5px black" >
            <CardHeader display="flex" justifyContent="center">
                <Heading as="h6">Portfolio</Heading>
            </CardHeader>
            <CardBody  py={0} >
            <Tabs variant="soft-rounded" colorScheme="green" >
                    <TabList>
                        <Tab>prototype</Tab>
                        <Tab>Tools</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Image src={student_Profile} h="250px" w="400px" borderRadius="10px" boxShadow="0 2px 3px black"/></TabPanel>
                        <TabPanel>
                            <SimpleGrid w={"400px"}></SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
            <CardFooter display="flex" justifyContent={"space-evenly"}>
                <Button>view site</Button>
                <Button>Demo video</Button>
            </CardFooter>
           </Card>



           <Card w="max-content"  boxShadow="0 2px 5px black" >
            <CardHeader display="flex" justifyContent="center">
                <Heading as="h6">Library</Heading>
            </CardHeader>
            <CardBody  py={0} >
                <Tabs variant="soft-rounded" colorScheme="green" >
                    <TabList>
                        <Tab>prototype</Tab>
                        <Tab>Tools</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Image src={Library} h="250px" w="400px" borderRadius="10px" boxShadow="0 2px 3px black"/></TabPanel>
                        <TabPanel>
                            <SimpleGrid w={"400px"}></SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
            <CardFooter display="flex" justifyContent={"space-evenly"}>
                <Button>view site</Button>
                <Button>Demo video</Button>
            </CardFooter>
           </Card>


           <Card w="max-content"  boxShadow="0 2px 5px black" >
            <CardHeader display="flex" justifyContent="center">
                <Heading as="h6">Rock-Paper-Scissor</Heading>
            </CardHeader>
            <CardBody  py={0} >
            <Tabs variant="soft-rounded" colorScheme="green" >
                    <TabList>
                        <Tab>prototype</Tab>
                        <Tab>Tools</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Image src={RPS} h="250px" w="400px" borderRadius="10px" boxShadow="0 2px 3px black"/></TabPanel>
                        <TabPanel>
                            <SimpleGrid w={"400px"}></SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
            <CardFooter display="flex" justifyContent={"space-evenly"}>
                <Button>view site</Button>
                <Button>Demo video</Button>
            </CardFooter>
           </Card>
          
           </SimpleGrid>
        </Box>
     );
}
 
export default Projects;