import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { RiEmotionSadLine } from "react-icons/ri";
function Notlogged() {
  return (
    <Flex w="80%" m="auto" mt="50px" flexDirection={"column"} gap={10}>
      <Heading color={"green.500"}>
        USER not logged in <RiEmotionSadLine />{" "}
      </Heading>

      <Flex flexDirection={"column"} gap={6}>
        <Box fontFamily={"mono"} fontWeight="600" fontSize={"18px"}>
          want to Register?{" "}
          <Link href="/register" color="blue" fontSize="18px">
            Create Account
          </Link>{" "}
        </Box>
        <Box fontFamily={"mono"} fontWeight="600" fontSize={"18px"}>
          Already have account?{" "}
          <Link href="/signin" color="blue" fontSize="18px">
            Login
          </Link>{" "}
        </Box>
      </Flex>
    </Flex>
  );
}

export default Notlogged;
