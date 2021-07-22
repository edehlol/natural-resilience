import { createSelector, createSlice } from '@reduxjs/toolkit';
import { questions } from '../../questions';

const testData = [
  {
    category: 'Social-Economic',
    question: 'I am useful to neighbors—I make or do something they need',
    subcategory: 'One',
    maxValue: 200,
    value: null,
  },
  {
    category: 'Social-Economic',
    question: 'I can generate a surplus',
    subcategory: 'One',
    maxValue: 200,
    value: null,
  },
  {
    category: 'Social-Economic',
    subcategory: 'Two',
    question: 'I am well liked',
    maxValue: 200,
    value: null,
  },
  {
    category: 'psych',
    subcategory: '3',
    question: 'I am well liked',
    maxValue: 200,
    value: null,
  },
  {
    category: 'psych',
    subcategory: '3',
    question: 'I am well liked',
    maxValue: 200,
    value: null,
  },
];

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    currentIndex: 0,
    questions: questions,
    completed: false,
    totalScore: 0,
    maxTotalScore: 0,
    resultsDescription: '',
  },
  reducers: {
    nextQuestion(state, action) {
      state.currentIndex++;
      if (state.currentIndex === state.questions.length) {
        state.completed = true;
      }
    },
    previousQuestion(state, action) {
      if (state.currentIndex > 0) {
        state.currentIndex--;
      }
    },
    setAnswer(state, action) {
      state.questions[state.currentIndex].value =
        action.payload * state.questions[state.currentIndex].maxValue;
    },
    setTotalScore(state, action) {
      state.totalScore = state.questions.reduce((total, current) => total + current.value, 0);
    },
    setTotalMaxScore(state, action) {
      state.maxTotalScore = state.questions.reduce((total, current) => total + current.maxValue, 0);
    },
    setResultsDescription(state, action) {
      if (state.totalScore >= 4000) {
        state.resultsDescription =
          'Likely adaptable to major change, likely an asset to any community, should likely be facilitating other people’s learning and sharing skills and resources';
      } else if (state.totalScore >= 3000) {
        state.resultsDescription =
          'Probably adaptable to changing conditions, a likely asset to most communities with much to share';
      } else if (state.totalScore >= 2000) {
        state.resultsDescription =
          'Adaptive patterns to work from, positioned to become highly resilient';
      } else if (state.totalScore >= 1000) {
        state.resultsDescription = 'Some resilient tendencies to build on';
      } else {
        state.resultsDescription =
          'Average American—a liability until major changes are undertaken';
      }
    },
    resetQuiz(state, action) {
      state.currentIndex = 0;
      state.completed = false;
      state.totalScore = 0;
      state.resultsDescription = '';
    },
  },
});

export const selectCurrentQuestion = (state) => state.quiz.questions[state.quiz.currentIndex];

// !! TODO: refactor function
export const selectResultsPerCategory = (state) => {
  let results = [];
  // fill the array with categories
  for (let question of state.quiz.questions) {
    if (!results.find((result) => result.category === question.category)) {
      results.push({ category: question.category, subcategories: [], value: null, maxValue: null });
    }
  }
  // TODO: turn subcategory into object with name and score
  // fill the categories with subcategories
  for (let result of results) {
    for (let question of state.quiz.questions) {
      if (question.category === result.category) {
        if (!result.subcategories.includes(question.subcategory)) {
          result.subcategories.push(question.subcategory);
        }
      }
    }
  }
  // Add score and maxscore for each category
  for (let result of results) {
    result.value = state.quiz.questions
      .filter((question) => question.category === result.category)
      .reduce((total, current) => total + current.value, 0);
    result.maxValue = state.quiz.questions
      .filter((question) => question.category === result.category)
      .reduce((total, current) => total + current.maxValue, 0);
  }
  // convert the subcategory array into an object with name and score
  for (let result of results) {
    result.subcategories = result.subcategories.map((subcategory) => {
      if (subcategory) {
        return {
          name: subcategory,
          value: state.quiz.questions
            .filter((question) => question.subcategory === subcategory)
            .reduce((total, current) => total + current.value, 0),
          maxValue: state.quiz.questions
            .filter((question) => question.subcategory === subcategory)
            .reduce((total, current) => total + current.maxValue, 0),
        };
      } else {
        return null;
      }
    });
  }
  // console.log(results);
  return results;
};

export const {
  nextQuestion,
  previousQuestion,
  setAnswer,
  setTotalScore,
  setResultsDescription,
  resetQuiz,
  setTotalMaxScore,
} = quizSlice.actions;

export default quizSlice.reducer;
