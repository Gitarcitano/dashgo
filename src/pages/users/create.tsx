import { Flex, HStack, Box, Divider, Heading, SimpleGrid, VStack, Button } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import React from "react";
import Link from "next/link";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading ize="lg" fontWeight="normal">Create user</Heading>

          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Full name"/>
              <Input name="email" type="email" label="E-mail"/>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" type="password" label="Password"/>
              <Input name="password_confirmation" type="password" label="Confirm password"/>
            </SimpleGrid>

          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancel</Button>
              </Link>
              <Button colorScheme="pink">Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
