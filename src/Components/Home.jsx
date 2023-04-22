import { Box, Flex,  Text } from "@chakra-ui/react";
import TypewriterComponent from "typewriter-effect";


const Home = () => {
    return (  
        <Flex as={"section"} id="home" h={"100vh"} flexDir={"column"} alignItems={"center"} justifyContent={"center"}  bgGradient={"linear(to-r,#FAFFFD 50% ,#D6EAE1 50%)"} >
            <Text fontSize={"26px"} fontWeight={"bold"} fontFamily={"opensans"} color="#3D3D3D">
                Hey👋,I am
            </Text>

            <Text fontSize={"40px"} fontWeight={"bolder"} color="#3E795F">Dhanasai Tholeti</Text>

            <Box fontSize={"24px"} fontWeight={"bold"} fontFamily={"opensans"} color="#3D3D3D">

            <TypewriterComponent onInit={(typewriter)=> {
                typewriter
                .typeString("I'm a Web Developer")
                .pauseFor(1000)
                .deleteChars(13)
                .typeString("Programmer")
                .pauseFor(1000)
                .deleteChars(10)
                .typeString("Designer")
                .pauseFor(1000)
                .deleteChars(8)
                .typeString("Self-Learner")
                .start();
            }
        }
        />
        </Box>


        

        </Flex>
    );
}
// bgGradient={"linear(to-r,#FAFFFD 50% ,#D6EAE1 50%)"} 
export default Home;