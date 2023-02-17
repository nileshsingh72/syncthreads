import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoordinates, loginAction } from "../redux/auth.action";
const initState = {
  email: "",
  password: "",
};

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const { isAuth, loader, error } = useSelector((state) => state.auth);
  const [data, setdata] = React.useState(initState);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(isAuth, "Auth");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // console.log(data);
    dispatch(loginAction(data))
      .then((res) => {
        if (res) {
          toast({
            title: "Login Successful.",
            description: "Login Successful.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          navigate("/");
        } else {
          toast({
            title: "Please try again.",
            description: "Something went wrong",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) =>
        toast({
          title: "Please try again.",
          description: err.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <form onSubmit={handleLogin}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  type="email"
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  required
                />
              </FormControl>
              <Stack spacing={5}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  {loader ? "Sign in..." : "Sign in"}
                </Button>
                <Stack pt={2}>
                  <Text align={"center"}>
                    Want to create new account?{" "}
                    <Link href="/register" color={"blue.400"}>
                      Sign-up
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Flex>
  );
}
