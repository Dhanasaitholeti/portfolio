import {  
     Box,
     Button,
     Card,
     Heading,
     Image,
     Input,
     InputGroup,
     InputLeftAddon,
     SimpleGrid,
     Textarea
} from "@chakra-ui/react";

import githubicon from "../assets/logos/icons8-github-60.png"
import LinkedinIcon from "../assets/logos/icons8-linkedin-60.png"
import InstagramIcon from "../assets/logos/icons8-instagram-60.png"
import redditIcon from "../assets/logos/icons8-reddit-60.png"
import discord from "../assets/logos/icons8-discord-60.png"



const Contact = () => {
    return (  
    <Box as="section" id="contact" h="max-content" bgColor={"#FAFFFD"}>
        <Heading>Contact Me</Heading>
        <SimpleGrid columns={2} alignContent="center" justifyItems="center">
 
            <Card gap={"20px"}  width="max-content" border={"1px solid black"} p="5vw" m="5vh" bgColor="#D6EAE1" justifySelf="end" >
                
                <InputGroup w={"300px"}  >
                    <InputLeftAddon children="Name" />
                    <Input variant="outline"  colorScheme="blackAlpha" />
                </InputGroup>

                <InputGroup w={"300px"}>
                    <InputLeftAddon children="Email" />
                    <Input variant="outline" />
                </InputGroup>

                <Textarea placeholder="your message here" w={"300px"}>

                </Textarea>
            </Card>

            <SimpleGrid w={"50%"} columns={2} border={"1px solid black"} justifyItems="center"  m="5vh" bgColor="#D6EAE1" justifySelf="start" p="25px">
            
                <Box >
                    <Image src={githubicon} />
                    <Button>Follow</Button>
                </Box>

                <Box >
                <Image src={LinkedinIcon} />
                <Button>Follow</Button>
                </Box>


                <Box>
                <Image src={InstagramIcon} />
                <Button>Follow</Button>
                </Box>


                <Box>
                <Image src={redditIcon} />
                <Button>Follow</Button>
                </Box>

                <Box>
                <Image src={discord} />   
                <Button>Follow</Button>
                </Box>

            </SimpleGrid>

        </SimpleGrid>

    </Box>
    );
}
 
export default Contact;