import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Navbar({ name, handleLogout }) {
  return (
    <Flex
      bg="lightcoral"
      justifyContent={"space-around"}
      alignItems="center"
      fontWeight={"600"}
      padding="4px"
    >
      <Box>
        <Text>Welcome to dashboard {name}</Text>
      </Box>
      <Button
        bg="blackAlpha.700"
        color={"whiteAlpha.900"}
        _hover={{
          bg: "blackAlpha.900",
          color: "whiteAlpha.900",
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Flex>
  );
}

export default Navbar;
