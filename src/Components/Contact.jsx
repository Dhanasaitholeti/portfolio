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

import { motion } from "framer-motion";

import githubicon from "../assets/logos/icons8-github-60.png"
import LinkedinIcon from "../assets/logos/icons8-linkedin-60.png"
import InstagramIcon from "../assets/logos/icons8-instagram-60.png"
import redditIcon from "../assets/logos/icons8-reddit-60.png"
import discord from "../assets/logos/icons8-discord-60.png"



const Contact = () => {
    const MotionCard = motion(Card);
    const MotionGrid = motion(SimpleGrid);

    const rightAnime = {
        initial:{
            opacity:0,
            scale:0,
            y:300,
           rotate:+180
        }
    }

    const leftAnime = {
        initial:{
            opacity:0,
            scale:0,
            y:300,
            rotate:-180
        }
    }
    const commonAnime= {
       
        whileInView:{
            y:0,
            opacity:1,
            scale:1,
            rotate:0
        },
        transition:{
            ease:"easeInOut",
            duration:0.7
        }

    }


    const logoitemgrid = {
        display:"grid",
        justifyItems:"center"
    }

    return (  
    <Box as="section" id="contact" h="max-content" bgColor={"#FAFFFD"}>
        <Heading>Contact Me</Heading>
        <SimpleGrid columns={2} alignContent="center" justifyItems="center">
 
            <MotionCard 
            gap={"20px"}  
            width="max-content" 
            border={"1px solid #3E795F"} 
            p="5vw" 
            m="5vh" 
            bgColor="#EDFCF9" 
            justifySelf="end" 
            borderRadius="15px"
             {...rightAnime} {...commonAnime} >
                
                <InputGroup w={"300px"}  >
                    <InputLeftAddon children="Name" />
                    <Input variant="outline"  colorScheme="blackAlpha" />
                </InputGroup>

                <InputGroup w={"300px"}>
                    <InputLeftAddon children="Email" />
                    <Input variant="outline" />
                </InputGroup>

                <Textarea placeholder="your message here" w={"300px"} />
                <Button w="50%" variant="outline" colorScheme="green">Send</Button>
                

            </MotionCard>
            
            <MotionGrid 
            w={"50%"} 
            columns={2} 
            border={"1px solid #3E795F"} 
            justifyItems="center" 
            gap="10px"  
            m="5vh" 
            bgColor="#EDFCF9" 
            justifySelf="start" 
            p="30px" 
            borderRadius="15px" 
            {...leftAnime} {...commonAnime}>
                
                <Box {...logoitemgrid} >
                    <Image src={githubicon} />
                    <Button> <a href="https://github.com/Dhanasaitholeti">Follow</a></Button>
                </Box>

                <Box {...logoitemgrid}>
                <Image src={LinkedinIcon} />
                <Button> <a href="https://www.linkedin.com/in/dhanasai-tholeti/">Follow</a></Button>
                </Box>


                <Box {...logoitemgrid}>
                <Image src={InstagramIcon} />
                <Button><a href="https://www.instagram.com/dhanasai_naidu_tholeti/"> Follow </a></Button>
                </Box>


                <Box {...logoitemgrid}>
                <Image src={redditIcon} />
                <Button><a href="https://www.reddit.com/user/Eggplant_Early">Follow</a></Button>
                </Box>

                <Box {...logoitemgrid}>
                <Image src={discord} />   
                <Button><a href="https://discord.gg/GEXKudhW">Follow</a></Button>
                </Box>

            </MotionGrid>

    
        </SimpleGrid>

    </Box>
    );
}
 
export default Contact;