import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

function Error() {
  return (
    <Flex
      m="auto"
      w="50%"
      mt="30px"
      fontSize={"18px"}
      justifyContent="space-around"
      alignItems={"center"}
      fontWeight="600"
    >
      <Box>Not Such page..</Box>
      <Link href="/">Back to home</Link>
    </Flex>
  );
}

export default Error;
