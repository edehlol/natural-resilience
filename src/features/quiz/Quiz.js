import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Question } from './Question';
import { Results } from './Results';
import { previousQuestion } from './quizSlice';
import { Container, Button, Divider, Center, Progress } from '@chakra-ui/react';

export const Quiz = () => {
  const dispatch = useDispatch();
  const completed = useSelector((state) => state.quiz.completed);
  const quizLength = useSelector((state) => state.quiz.questions.length);
  const currentIndex = useSelector((state) => state.quiz.currentIndex);

  if (completed) {
    return <Results />;
  } else {
    return (
      <>
        <Container>
          <Question />
          <Divider my={6} />
          <Center mb="12">
            <Button
              colorScheme="blackAlpha"
              width={64}
              disabled={currentIndex === 0 ? true : false}
              onClick={() => dispatch(previousQuestion())}
            >
              Back
            </Button>
          </Center>
        </Container>

        <Progress
          hasStripe
          colorScheme="green"
          value={Math.floor((currentIndex / quizLength) * 100)}
          position="fixed"
          bottom="0"
          width="100%"
          height="6"
        />
      </>
    );
  }
};
