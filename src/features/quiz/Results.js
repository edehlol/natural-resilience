import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTotalScore,
  selectResultsPerCategory,
  setResultsDescription,
  setTotalMaxScore,
} from './quizSlice';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Container,
  Heading,
  Text,
  TableCaption,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';

export const Results = () => {
  const dispatch = useDispatch();
  const totalScore = useSelector((state) => state.quiz.totalScore);
  const maxTotalScore = useSelector((state) => state.quiz.maxTotalScore);
  const resultsPerCategory = useSelector(selectResultsPerCategory);
  const resultsDescription = useSelector((state) => state.quiz.resultsDescription);
  console.log(resultsPerCategory);
  useEffect(() => {
    dispatch(setTotalScore());
    dispatch(setTotalMaxScore());
    dispatch(setResultsDescription());
  }, [dispatch]);

  const calculateResult = (value, maxValue) => {
    const result = (value / maxValue) * 100;
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
  };

  const renderResults = () => {
    const results = resultsPerCategory.map((result) => {
      const renderedSubCategories = result.subcategories.map(
        (subcategory) =>
          subcategory && (
            <Tr key={nanoid()}>
              <Td>{subcategory.name}</Td>
              <Td isNumeric>{calculateResult(subcategory.value, subcategory.maxValue)}</Td>
            </Tr>
          )
      );
      return (
        <Table key={nanoid()} mb="16">
          <TableCaption fontSize="xl" placement="top">
            {result.category}
          </TableCaption>
          <Thead>
            {result.subcategories[0] !== null && (
              <Tr>
                <Th>Subcategory</Th>
                <Th isNumeric>Score</Th>
              </Tr>
            )}
          </Thead>
          <Tbody>
            {renderedSubCategories}
            <Tr bg="gray.300">
              <Td>
                <b>Score</b>
              </Td>
              <Td isNumeric>
                <b>{calculateResult(result.value, result.maxValue)}</b>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      );
    });
    return results;
  };
  return (
    <Container>
      <Text align="center" mb="4" fontSize="lg">
        Your results:
      </Text>
      {renderResults()}

      <Text align="center" fontSize="lg">
        Total Score:{' '}
      </Text>
      <Heading mb="4" align="center" size="3xl">
        {calculateResult(totalScore, maxTotalScore)}
      </Heading>
      <Heading size="md" align="center" mb="8">
        {resultsDescription}
      </Heading>
    </Container>
  );
};
