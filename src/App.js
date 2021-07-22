import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './app/Navbar';
const Home = lazy(() => import('./app/Home'));
const Quiz = lazy(() => import('./features/quiz/Quiz'));

const Loader = () => <p>loading</p>;

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
