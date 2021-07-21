import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTotalScore,
  setTotalScore,
  selectResultsPerCategory,
  setResults,
  setResultsDescription,
} from './quizSlice';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Progress,
  Stack,
  VStack,
  Box,
  Container,
  Heading,
  Text,
  List,
  ListItem,
  TableCaption,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';

export const Results = () => {
  const dispatch = useDispatch();
  // const questions = useSelector((state) => state.quiz.questions);
  // const totalScore = useSelector((state) => state.quiz.totalScore);
  const resultsPerCategory = useSelector(selectResultsPerCategory);
  const resultsDescription = useSelector((state) => state.quiz.resultsDescription);
  console.log(resultsPerCategory);
  useEffect(() => {
    dispatch(setTotalScore());
    dispatch(setResultsDescription());
  }, [dispatch]);

  const calculateResult = (value, maxValue) => {
    const result = (value / maxValue) * 100;
    console.log(result);
    switch (true) {
      case result >= 95:
        return 'A+';
      case result >= 90:
        return 'A';
      case result >= 85:
        return 'A-';
      case result >= 80:
        return 'B+';
      case result >= 75:
        return 'B';
      case result >= 70:
        return 'B-';
      case result >= 65:
        return 'C+';
      case result >= 60:
        return 'C';
      case result >= 55:
        return 'C-';
      case result >= 50:
        return 'D+';
      case result >= 45:
        return 'D';
      case result >= 40:
        return 'D-';
      case result < 35:
        return 'F';
      default:
        return '';
    }
    //   if (result >= 90) {
    //     return 'A';
    //   } else if (result >= 80) {
    //     return 'B';
    //   } else if (result >= 70) {
    //     return 'C';
    //   } else if (result >= 60) {
    //     return 'D';
    //   } else {
    //     return 'F';
    //   }
  };

  // const renderResults = resultsPerCategory.map((result) => (
  //   <Tr key={nanoid()}>
  //     <Td>{result.category}</Td>
  //     <Td>
  //       {calculateResult(result.value, result.maxValue)}
  //       {/* {result.value} / {result.maxValue} */}
  //     </Td>
  //   </Tr>
  // ));
  // const renderedResults = resultsPerCategory.map((result) => (
  //   <VStack key={nanoid()}>
  //     <Box>
  //       {result.category} <Progress value={(result.value / result.maxValue) * 100} />
  //     </Box>
  //     <Box></Box>
  //   </VStack>
  // ));

  const renderResults = () => {
    return resultsPerCategory.map((result) => {
      return (
        <Table key={nanoid()}>
          <Thead>
            <Tr>
              <Th>{result.category}</Th>
              <Th>Score</Th>
            </Tr>
          </Thead>
        </Table>
      );
    });
  };
  return (
    <Container>
      <Text align="center" mb="4">
        Your result:
      </Text>
      <Heading size="md" align="center" mb="8">
        {resultsDescription}
      </Heading>
      <p></p>
      {/* {renderedResults} */}

      <Table>
        <TableCaption>Testing it out </TableCaption>
        <Thead>
          <Tr>
            <Th>Personal and Psychological</Th>
            <Th>Score</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Aptitude</Td>
            <Td>A+</Td>
          </Tr>
          <Tr>
            <Td>Attitude</Td>
            <Td>B-</Td>
          </Tr>
          <Tr>
            <Td>
              <b>Total</b>
            </Td>
            <Td>
              <b>B+</b>
            </Td>
          </Tr>
        </Tbody>
      </Table>

      {renderResults()}

      {/* <Table>
        <Thead>
          <Tr>
            <Th>Category</Th>
            <Th>Score</Th>
          </Tr>
        </Thead>
        <Tbody>{renderResults}</Tbody>
      </Table> */}
    </Container>
  );
};
