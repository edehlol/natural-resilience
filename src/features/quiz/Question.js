import React from 'react';
import { Stack, Button, Center, Tag, Text, Box } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { nextQuestion, setAnswer, selectCurrentQuestion } from './quizSlice';

export const Question = () => {
  const dispatch = useDispatch();
  const question = useSelector(selectCurrentQuestion);

  const onClickAnswer = (value) => {
    dispatch(setAnswer(value));
    dispatch(nextQuestion());
  };

  if (!question) {
    return <></>;
  }
  return (
    <Box my="8">
      <Center>
        <Tag w={64} colorScheme="green" variant="solid" py="2">
          {question.category} {question.subcategory ? `- ${question.subcategory}` : ''}
        </Tag>
      </Center>

      <Center h={32} my="4">
        <Text fontSize="lg">{question.question}</Text>
      </Center>

      <Stack>
        <Button variant="outline" colorScheme="red" onClick={() => onClickAnswer(0)}>
          Untrue
        </Button>
        <Button variant="outline" colorScheme="orange" onClick={() => onClickAnswer(0.25)}>
          Mostly Untrue
        </Button>
        <Button variant="outline" colorScheme="gray" onClick={() => onClickAnswer(0.5)}>
          Moderately
        </Button>
        <Button variant="outline" colorScheme="teal" onClick={() => onClickAnswer(0.75)}>
          Mostly True
        </Button>
        <Button variant="outline" colorScheme="green" onClick={() => onClickAnswer(1)}>
          True
        </Button>
      </Stack>
    </Box>
  );
};
