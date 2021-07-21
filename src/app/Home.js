import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { navigate } from '@reach/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { resetQuiz } from '../features/quiz/quizSlice';
import house from '../assets/house.jpg';
import waterfall from '../assets/waterfall.jpg';
import { FaCheckCircle } from 'react-icons/fa';

export const Home = () => {
  const dispatch = useDispatch();
  const onBtnClick = () => {
    dispatch(resetQuiz());
    navigate('/quiz');
  };
  return (
    <>
      <Container maxW="container.lg">
        <Center>
          <Heading size="lg" align="center">
            The Resilience Aptitude Assessment Test
          </Heading>
        </Center>

        <SimpleGrid columns={[1, 1, 2]} my="12" spacing="8">
          <Image src={waterfall} boxSize="md" objectFit="cover" alt="waterfall scenery" />
          <Box>
            <Text>
              Assessment is always an important, albeit imperfect, subjective, and incomplete tool.
              In order to understand one’s skill in living a resilient lifestyle, we have developed
              the following assessment tool. This test is useful in identifying strong points—where
              one can help others most directly, and weak areas—where the lowest hanging fruit is.
              Developing skills as rapidly and thoroughly as possible requires that we focus on the
              weakest links in ourselves, which raises the function of the whole system most easily.
              Since we only have so much time and energy, being strategic with these precious
              resources is key.
            </Text>
            <br />
            <Text>
              The results of the test below should not be taken literally but as an indicator of
              patterns. As you go through the test, notice in what areas you are strongest and in
              what areas you are weakest. Think about how these strengths can help others around
              you. How can you share them? In what areas do you need someone else to learn from?
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} my="12" spacing="8">
          <Box>
            <Text>
              As with all tests, the breadth and depth of what can be measured by this evaluation is
              very limited. The point of this “test” is to help you identify areas in which you have
              sound skills and those areas that would be most strategic to work on. Scoring your
              evaluation should be done in the following manner:
            </Text>
            <br />
            <List>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Read the question, and think about how competent you are at the skill described.
              </ListItem>
              <br />
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Mark a number corresponding with that competence. This gets subjective, but do your
                best. For instance, for the question of “Can you weld?” If you could probably cob
                together a poor weld because you’ve tried it once, choose 'Mostly Untrue' or
                'Moderately'. If you can do a satisfactory job with basic welding tools, choose
                "Mostly True". If you can weld with an array of welding equipment very well, choose
                "True".
              </ListItem>
            </List>
          </Box>

          <Image src={house} boxSize="md" objectFit="cover" alt="waterfall scenery" />
        </SimpleGrid>
      </Container>

      <Center bg="green.500">
        <Box align="center" py="12">
          <Heading size="lg" color="white">
            Take the Aptitude Test
          </Heading>
          <Button
            mt="12"
            variant="outline"
            borderColor="white"
            color="white"
            border="2px"
            size="lg"
            _hover={{ bg: 'green.600' }}
            onClick={onBtnClick}
          >
            Start Test
          </Button>
        </Box>
      </Center>
    </>
  );
};
