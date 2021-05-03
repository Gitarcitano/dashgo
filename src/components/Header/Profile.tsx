import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

  export function Profile({ showProfileData }: ProfileProps ) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Giovanne Tarcitano</Text>
          <Text color="gray.300" fontSize="sm">
            giovanne.tarcitano@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Giovanne Tarcitano" src="https://github.com/gitarcitano.png"/>
    </Flex>
  );
}
