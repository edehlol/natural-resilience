import React from 'react';
import { GiTreeBranch } from 'react-icons/gi';
import { Box, Container, HStack, Link, Icon, Heading } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

export const Navbar = () => {
  const history = useHistory();
  return (
    <Box bg="green.500" py="4" mb="8">
      <Container maxW="container.lg">
        <HStack justify="space-between">
          <HStack>
            <Link
              fontSize="lg"
              color="white"
              onClick={() => {
                history.push('/');
              }}
            >
              <HStack>
                <Icon as={GiTreeBranch} boxSize="6" />
                <Heading size="md" color="white">
                  Natural Resilience
                </Heading>
              </HStack>
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};
