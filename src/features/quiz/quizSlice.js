import { createSelector, createSlice, current } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const real = [
  {
    category: 'Social-Economic',
    subcategory: null,
    question: 'I am useful to neighbors - I make or do something they need',
    maxValue: 200,
    value: null,
  },
  {
    category: 'Social-Economic',
    subcategory: null,
    question: 'I can generate a surplus',
    maxValue: 50,
    value: null,
  },
  {
    category: 'Social-Economic',
    subcategory: null,
    question: 'I am well liked',
    maxValue: 150,
    value: null,
  },
  {
    category: 'Social-Economic',
    subcategory: null,
    question:
      'I am a long-time resident of this area with many social connections and am well liked here',
    maxValue: 50,
    value: null,
  },
  {
    category: 'Social-Economic',
    subcategory: null,
    question:
      'I am financially well off, without debt, can purchase most tools or other resourced I need',
    maxValue: 200,
    value: null,
  },
  {
    category: 'Social-Economic',
    subcategory: null,
    question: 'I can organize people well and/or work well within a group setting',
    maxValue: 200,
    value: null,
  },
  {
    category: 'Personal and Psychological',
    subcategory: 'Aptitude',
    question:
      'I can quickly figure out solutions to challenges I have never been trained in and enjoy doing so',
    maxValue: 500,
    value: null,
  },
  {
    category: 'Personal and Psychological',
    subcategory: 'Attitude',
    question:
      'I have a positive outlook in difficult situations and experience in adverse conditions which demand calm, calculated, effective action in the face of emergency',
    maxValue: 150,
    value: null,
  },
  {
    category: 'Personal and Psychological',
    subcategory: 'Aptitude',
    question: 'I do not give up when encountering difficulty',
    maxValue: 100,
    value: null,
  },
  {
    category: 'Personal and Psychological',
    subcategory: 'Aptitude',
    question: 'I am patient when it comes to dealing with challenges',
    maxValue: 50,
    value: null,
  },
  {
    category: 'Personal and Psychological',
    subcategory: 'Aptitude',
    question: 'I enjoy challenging situations',
    maxValue: 50,
    value: null,
  },
  {
    category: 'Personal and Psychological',
    subcategory: 'Aptitude',
    question: 'I am confident, believe in myself, and act decisively and with poise',
    maxValue: 200,
    value: null,
  },
  {
    category: 'Personal and Psychological',
    subcategory: 'Aptitude',
    question: 'I know what I do not know',
    maxValue: 200,
    value: null,
  },
  {
    category: 'Personal and Psychological',
    subcategory: 'Mental Health',
    question:
      'I am in sound mental Health, stable, and happy; I enjoy my life, like to engage with others',
    maxValue: 300,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can do everything needed to heat a home efficiently with minimal wood',
    maxValue: 50,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can haul wood from woodlot to house with on-site resources',
    maxValue: 20,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can process firewood with an ax',
    maxValue: 20,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can make and tend a fire',
    maxValue: 20,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can cook on a woodstove',
    maxValue: 20,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can clean a chimney',
    maxValue: 10,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can install a woodstove and chimney',
    maxValue: 10,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can stack and cover wood very well',
    maxValue: 10,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I am able to grow vegetables, grains, fruits, nuts, pulses, and meat',
    maxValue: 50,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'Two-year supply each season',
    maxValue: 50,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'One-year supply each season',
    maxValue: 25,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: "Half a year's supply each season",
    maxValue: 15,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'One-quarter of a year-s supply each season',
    maxValue: 10,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can lactoferment',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can dry/dehydrate',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can smoke, cure',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can slaughter and butcher',
    maxValue: 10,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can plant a variety of food trees properly',
    maxValue: 30,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can propagate trees and other plants',
    maxValue: 30,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can raise seedlings and transplant well',
    maxValue: 100,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can keep a vegetable garden in good condition all growing season',
    maxValue: 100,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can save seed in a vegetable garden',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can breed animals',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can lamb/kid/birth animals',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Food, Fuel and Heat',
    subcategory: null,
    question: 'I can shear, shoe, and perform various animal maintenace in general',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Physical Health',
    subcategory: null,
    question: 'I can cook using local and seasonal ingredients',
    maxValue: 50,
    value: null,
  },
  {
    category: 'Physical Health',
    subcategory: null,
    question: 'I can make a variety of potent medicine',
    maxValue: 30,
    value: null,
  },
  {
    category: 'Physical Health',
    subcategory: null,
    question: 'I can identify and treat various ailments with local medicine/approaches',
    maxValue: 30,
    value: null,
  },
  {
    category: 'Physical Health',
    subcategory: null,
    question:
      'I can treat someone for emergency/acute trauma if given the right tools, and I know how to use them (emergency medicine, including CPR)',
    maxValue: 30,
    value: null,
  },
  {
    category: 'Physical Health',
    subcategory: null,
    question: 'I am currently in good physical health',
    maxValue: 250,
    value: null,
  },
  {
    category: 'Physical Health',
    subcategory: null,
    question: 'I am likely to have a long life ahead of me',
    maxValue: 50,
    value: null,
  },
  {
    category: 'Physical Health',
    subcategory: null,
    question: 'I am not addicted to any foods or drugs',
    maxValue: 250,
    value: null,
  },
  {
    category: 'Physical Health',
    subcategory: null,
    question:
      'I know how to care holistically for my particular body type and mental habits, and I have learned to maintain overall health to a high degree--I am healthy and know how to heal when sick',
    maxValue: 150,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Electrical',
    question: 'I know basic wiring of switches, outlets, batteries, fencing, lighting, etc.',
    maxValue: 15,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Electrical',
    question: 'I know how to use a multimeter and charge vehicle batteries',
    maxValue: 15,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Plumbing',
    question: 'I can set up a gravity-fed domestic water system without freeze problems',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Plumbing',
    question: 'I can capture and store roof water',
    maxValue: 10,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Plumbing',
    question: 'I know irrigation systems',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Plumbing',
    question: 'I can sweat copper and do basic indoor plumbing',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Plumbing',
    question: 'I can work with pex tubing',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Crafting',
    question: 'I can make some clothes and repair them',
    maxValue: 10,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Crafting',
    question:
      "Ropework: I know basic home and farm knots and rigging--bowline clove hitch, trucker's hitch, fiserhman's knot",
    maxValue: 10,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Vehicles',
    question: 'I can change a wheel',
    maxValue: 10,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Vehicles',
    question: 'I can fix a flat tire',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Vehicles',
    question: 'I can check and change oil',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Vehicles',
    question: 'I can check and change other fluids',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Construction',
    question: 'I can frame a wall efficiently',
    maxValue: 15,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Construction',
    question: 'I can frame a house',
    maxValue: 20,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Construction',
    question: "I can use a full woodshop's array of tools",
    maxValue: 25,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Construction',
    question: 'I can design, cut, and raise a timber frame',
    maxValue: 15,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Construction',
    question: 'I can do concrete work: forming and pouring',
    maxValue: 10,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Construction',
    question: 'I can build a proper dry-stack stonewall of 4 feet in height',
    maxValue: 15,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Construction',
    question: 'I can weld',
    maxValue: 5,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Construction',
    question:
      'I can repair and maintain buildings in general from rot, leakage, and mechanical problems',
    maxValue: 50,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Ecological Awareness and Literacy',
    question:
      'I can identify 10 common medicinal plants in my immediate area and make medicine from them',
    maxValue: 25,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Ecological Awareness and Literacy',
    question: 'I can identify 10 edible plants in my immediate area and make food from them',
    maxValue: 25,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Ecological Awareness and Literacy',
    question: 'I can eat from and live in local wild areas for one week',
    maxValue: 50,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Ecological Awareness and Literacy',
    question: 'I can eat from and live in local wild areas for a year',
    maxValue: 100,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Ecological Awareness and Literacy',
    question: 'I can eat from and live in local wild areas for a warm season',
    maxValue: 25,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Ecological Awareness and Literacy',
    question: 'I can stalk, hunt, trap effectively',
    maxValue: 30,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Safety',
    question: 'I am highly aware of my surroundings',
    maxValue: 200,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Safety',
    question: 'I can defend myself well from a physical threat',
    maxValue: 50,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Safety',
    question: "I don't get injured often",
    maxValue: 45,
    value: null,
  },
  {
    category: 'Various Skills',
    subcategory: 'Safety',
    question: 'I am trained to help others in an emergency',
    maxValue: 50,
    value: null,
  },
];

const questionsArray = [
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

const resultsDescription = [
  {
    score: 4000,
    description:
      'Likely adaptable to major change, likely an asset to any community, should likely be facilitating other people’s learning and sharing skills and resources',
  },
];

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    currentIndex: 0,
    questions: real,
    completed: false,
    totalScore: 0,
    resultsDescription: '',
    isActive: false,
  },
  reducers: {
    nextQuestion(state, action) {
      state.currentIndex++;
      if (state.currentIndex === state.questions.length) {
        state.completed = true;
        state.isActive = false;
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
      state.isActive = true;
    },
  },
});

export const selectCurrentQuestion = (state) => state.quiz.questions[state.quiz.currentIndex];

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
  console.log(results);
  return results;
};

export const {
  nextQuestion,
  previousQuestion,
  setAnswer,
  setTotalScore,
  setResultsDescription,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
