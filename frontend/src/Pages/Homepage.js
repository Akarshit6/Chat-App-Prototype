import {Box,Container,Tab,TabList,TabPanel,TabPanels,Tabs,Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={4}  
        bg="#efefef"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.200"
        boxShadow="lg" 
        _hover={{ boxShadow: "2xl" }} 
        transition="box-shadow 0.3s ease-in-out" 
      >
        <Text 
        fontSize="4xl" 
        fontFamily="Work sans"
        fontWeight="bold"
        color="red"
        >  
          GOSSIP
        </Text>
        

      </Box>
      <Box 
        justifyContent="center"
        p={6}  
        bg="#efefef"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.200"
        boxShadow="lg" 
        _hover={{ boxShadow: "2xl" }} 
        transition="box-shadow 0.3s ease-in-out"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
