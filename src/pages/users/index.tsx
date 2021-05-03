import { Button, Checkbox, Flex, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/layout";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Heading } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" algin="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={
              <Icon as={RiAddLine} fontSize="20"/>
            }>
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4","4","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Giovanne Faccio Tarcitano</Text>
                    <Text fontSize="sm" color="gray.300">giovannetarcitano@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>28 de Abril, 2021</Td> }
                <Td p={["4", "4", "6"]}>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="gray">
                    <Icon as={RiPencilLine} fontSize={["14","20"]} color="gray.800"/>
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Giovanne Faccio Tarcitano</Text>
                    <Text fontSize="sm" color="gray.300">giovannetarcitano@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>28 de Abril, 2021</Td> }
                <Td p={["4", "4", "6"]}>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="gray">
                    <Icon as={RiPencilLine} fontSize={["14","20"]} color="gray.800"/>
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Giovanne Faccio Tarcitano</Text>
                    <Text fontSize="sm" color="gray.300">giovannetarcitano@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>28 de Abril, 2021</Td> }
                <Td p={["4", "4", "6"]}>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="gray">
                    <Icon as={RiPencilLine} fontSize={["14","20"]} color="gray.800"/>
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />

        </Box>
      </Flex>
    </Box>
  )
}
