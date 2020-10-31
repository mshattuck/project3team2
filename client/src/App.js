import React from 'react';
import { Route } from 'react-router-dom'
import { StoreProvider, useStoreContext } from './util/GlobalState';
// components
import Signup from './components/sign-up';
import LoginForm from './components/login-form';
import Header from './components/Header';
import Home from './components/home'
import Books from './components/Books';


function App() {
  const [store] = useStoreContext();

 

    return (
      <div className="App">
        <StoreProvider>
         <Header /> 
          {/* greet user if logged in: */}
          
          {/* Routes to different components */}
          <Route path="/home" component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={Signup} />
          <Route path="/books" component={Books} />
        </StoreProvider>
      </div>
    );
}

export default App;
