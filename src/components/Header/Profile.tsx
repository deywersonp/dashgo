import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Deywerson Pereira</Text>
        <Text color="gray.300" fontSize="small">
          deywerson.pereira@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Deywerson Pereira" src="https://github.com/deywersonp.png" />
    </Flex>
  )
};