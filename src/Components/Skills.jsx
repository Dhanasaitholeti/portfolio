import { Box,  Button,  GridItem, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import htmlIcon from "../assets/icons/icons8-html-5-96.png"
import ReduxIcon from "../assets/icons/icons8-redux-96.png"
import cssIcon from "../assets/icons/icons8-css3-96.png"
import JsIcon from "../assets/icons/icons8-javascript-96.png"
import pythonIcon from "../assets/icons/icons8-python-96.png"
import reactIcon from "../assets/icons/icons8-react-96.png"
import nodeIcon from "../assets/icons/icons8-nodejs-96.png"
import expressIcon from "../assets/icons/icons8-express-js-96.png"
import MongoIcon from "../assets/icons/icons8-mongodb-96.png"
import RustIcon from "../assets/icons/icons8-rust-96.png"
import ChakraIcon from "../assets/icons/icons8-chakra-ui-96.png"
import ReduxSagaIcon from "../assets/icons/Redux-Saga-Logo.png"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const Skills = () => {

    return (
        <Box as="section" h="max-content" bgColor="#D6EAE1" p={"5%"} >
        <SimpleGrid columns={5} spacing={"40px"}>
                
            <Card h={"max-content"} borderTop="5px solid #3E795F">
                <CardHeader>
                    <Heading>Html</Heading> 
                </CardHeader> 

                <CardBody>
                    <Image
                     src={htmlIcon}
                     alt="html-icon" />

                </CardBody>

                <CardFooter>
                    <Button>Website</Button>
                </CardFooter>
            </Card>


            <Card  h={"max-content"} borderTop="5px solid #3E795F">
                <CardHeader>
                    <Heading>CSS</Heading> 
                </CardHeader>
                <CardBody>
                    <Image src={cssIcon} alt="cssicon" />
                </CardBody>
                <CardFooter>
                    <Button>Website</Button>
                </CardFooter>
            </Card>


            <Card  h={"max-content"} borderTop="5px solid #3E795F">
            <CardHeader>
                    <Heading>Javascript</Heading> 
                </CardHeader>
                <CardBody>
                    <Image src={JsIcon} alt="" />
                </CardBody>
                <CardFooter>
                    <Button>Website</Button>
                </CardFooter>
            </Card>

            <Card  h={"max-content"} borderTop="5px solid #3E795F">
            <CardHeader>
                    <Heading>Python</Heading> 
                </CardHeader>
                <CardBody>
                    <Image src={pythonIcon} alt="" />
                </CardBody>
                <CardFooter>
                    <Button>Website</Button>
                </CardFooter>
            </Card>

            

            <Card h={"max-content"} borderTop="5px solid #3E795F">
            <CardHeader>
                    <Heading>ReactJs</Heading> 
                </CardHeader>
                <CardBody>
                    <Image src={reactIcon} alt="" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>
            </Card>
            <Card  h={"max-content"} borderTop="5px solid #3E795F">
            <CardHeader>
                    <Heading>Redux</Heading> 
                </CardHeader>
                <CardBody>
                    <Image src={ReduxIcon} alt="" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>
            </Card>

            <Card  h={"max-content"} borderTop="5px solid #3E795F">
            <CardHeader>
                    <Heading>Redux-saga</Heading> 
                </CardHeader>
                <CardBody>
                   <Image src={ReduxSagaIcon} alt="Redux-saga" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>
            </Card>

            <Card  h={"max-content"} borderTop="5px solid #3E795F">
                <CardHeader>
                    <Heading>Chakra-UI</Heading> 
                </CardHeader>
                <CardBody>
                    <Image src={ChakraIcon} alt="Chakra-UI" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>
            </Card>

            <Card  h={"max-content"} borderTop="5px solid #3E795F">
            <CardHeader>
                    <Heading>NodeJs</Heading> 
                </CardHeader>
                <CardBody>
                <Image src={nodeIcon} alt="" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>
                    
                </CardFooter>
            </Card>

            <Card  h={"max-content"} borderTop="5px solid #3E795F">
            <CardHeader>
                    <Heading>Express Js</Heading> 
                </CardHeader>
                <CardBody>
                    <Image src={expressIcon} alt="" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>
            </Card>

            <Card  h={"max-content"} borderTop="5px solid #3E795F">
            <CardHeader>
                    <Heading>MongoDb</Heading> 
                </CardHeader>
                <CardBody>
                    <Image src={MongoIcon} alt="" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>
            </Card>
            <Card  h={"max-content"} borderTop="5px solid #3E795F">
            <CardHeader>
                    <Heading>Rust</Heading> 
                </CardHeader>
                <CardBody>
                    <Image src={RustIcon} alt="" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>   
            </Card>
        </SimpleGrid>
        </Box>  
     );
}
 
export default Skills;