import { Box,  Button,  GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
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
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const Skills = () => {

    return (
        <Box as="section" h="max-content" bgColor="#D6EAE1" p={"5%"} >
        <SimpleGrid columns={4} spacing={"40px"}>
                
            <Card h={"max-content"}>
                <CardHeader>
                    <Heading>Html</Heading> 
                </CardHeader> 

                <CardBody>
                    <img src={htmlIcon} alt="" />
                </CardBody>

                <CardFooter>
                    <Button>Website</Button>
                </CardFooter>
            </Card>


            <Card >
                <CardHeader>
                    <Heading>CSS</Heading> 
                </CardHeader>
                <CardBody>
                    <img src={cssIcon} alt="" />
                </CardBody>
                <CardFooter>
                    <Button>Website</Button>
                </CardFooter>
            </Card>


            <Card >
            <CardHeader>
                    <Heading>Javascript</Heading> 
                </CardHeader>
                <CardBody>
                    <img src={JsIcon} alt="" />
                </CardBody>
                <CardFooter>
                    <Button>Website</Button>
                </CardFooter>
            </Card>

            <Card >
            <CardHeader>
                    <Heading>Python</Heading> 
                </CardHeader>
                <CardBody>
                    <img src={pythonIcon} alt="" />
                </CardBody>
                <CardFooter>
                    <Button>Website</Button>
                </CardFooter>
            </Card>

            

            <Card >
            <CardHeader>
                    <Heading>ReactJs</Heading> 
                </CardHeader>
                <CardBody>
                    <img src={reactIcon} alt="" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>
            </Card>
            <Card >
            <CardHeader>
                    <Heading>Redux</Heading> 
                </CardHeader>
                <CardBody>
                    <img src={ReduxIcon} alt="" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>
            </Card>

            <Card >
            <CardHeader>
                    <Heading>Redux-saga</Heading> 
                </CardHeader>
                <CardBody>
                    <Text>Hello</Text>

                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>
            </Card>

            <Card >
                <CardHeader>
                    <Heading>Chakra-UI</Heading> 
                </CardHeader>
                <CardBody>
                    <Text>Hello</Text>

                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>
            </Card>

            <Card >
            <CardHeader>
                    <Heading>NodeJs</Heading> 
                </CardHeader>
                <CardBody>
                <img src={nodeIcon} alt="" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>
                    
                </CardFooter>
            </Card>

            <Card >
            <CardHeader>
                    <Heading>Express Js</Heading> 
                </CardHeader>
                <CardBody>
                    <img src={expressIcon} alt="" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>
            </Card>

            <Card >
            <CardHeader>
                    <Heading>MongoDb</Heading> 
                </CardHeader>
                <CardBody>
                    <img src={MongoIcon} alt="" />
                </CardBody>
                <CardFooter>
                <Button>Website</Button>

                </CardFooter>
            </Card>
            <Card >
            <CardHeader>
                    <Heading>Rust</Heading> 
                </CardHeader>
                <CardBody>
                    <img src={RustIcon} alt="" />
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