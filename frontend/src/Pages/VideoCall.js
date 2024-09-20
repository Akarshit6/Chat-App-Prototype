import React, { useState, useCallback } from "react";
import { useHistory } from 'react-router-dom';
import { Box, Input, Button, Flex, Text } from "@chakra-ui/react";


const VideoCallPage = () => {
  const [value, setValue] = useState("");
  const history = useHistory();  

  const handleVideoCall = useCallback(() => {
    history.push(`/call/${value}`); 
    window.location.reload(); 
  }, [history, value]);
  return (
    <Flex 
      direction="column"
      align="center"
      justify="center"
      h="100vh" 
      w="100vw" 
    >
      <Box
        w={{ base: "80%", md: "50%" }} 
        maxW="500px" 
        h="400px" 
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        p={8}
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Text
          fontSize="4xl"
          fontWeight="bold"
          color="teal.500"
          mb={6} 
        >
          Video Chat
        </Text>
        <Input
          
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Type Room Name..."
          size="lg"
          focusBorderColor="teal.400"
          borderRadius="full"
          p={5}
          boxShadow="md"
          mb={4} 
        />
        <Button
          colorScheme="teal"
          size="lg"
          borderRadius="full"
          w="100%"
          boxShadow="md"
          _hover={{ bg: "teal.500", transform: "scale(1.05)" }}
          onClick={handleVideoCall}
        >
          Begin Chat
        </Button>
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="gray.200"
          zIndex="-1"
        />
      </Box>
    </Flex>
  );
};

export default VideoCallPage;