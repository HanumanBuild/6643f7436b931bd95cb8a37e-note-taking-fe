import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegistrationForm} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;