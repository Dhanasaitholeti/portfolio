import {  Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";


const About = () => {
    return (  
            <Box as="section" h={"60vh"} bgGradient={"linear(to-r ,#D6EAE1 50%,#FAFFFD 50%)"}>

                    <Flex justifyContent="center"><Heading>About me</Heading></Flex>

           <Grid templateColumns={"repeat(4,1fr)"}  >

                    <GridItem bg={"black"} colStart={2}>
                            

                    </GridItem>

                    <GridItem colStart={3}>

                            <Text>Dhanasai</Text>
                            <Text>dhanasai5566@gmail.com</Text>
                            


                    </GridItem>
                    




            </Grid>
        
            </Box>
    );
}
 
export default About;