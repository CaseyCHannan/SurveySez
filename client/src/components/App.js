import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

const Header = () => <h2>HEader</h2>
const Dogtime = () => <h2>Dog time</h2>
const Surveys = () => <h2>NEW!!</h2>
const Potent = () => <h2>potent potables</h2>

const App = () => {
  return (
    <div>
        <BrowserRouter> 
        <>
            <Route path="/" component={Potent} />
            <Route path="/surveys" component={Surveys} />
        </>    
        </BrowserRouter>
    </div>
  );
};

export default App;