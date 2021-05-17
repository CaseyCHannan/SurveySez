import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'


const Surveys = () => <h2>NEW!!</h2>
const Potent = () => <h2>potent potables</h2>

class App extends Component {
  componentDidMount(){
    this.props.fetchUser()
  }
    render() {
        return (
            <div className="container">
                <BrowserRouter> 
                <>
                    <Header/>
                    <Route path="/" component={Potent} />
                    <Route path="/surveys" component={Surveys} />
                </>    
                </BrowserRouter>
            </div>
        );
    };
}

export default connect(null, actions) (App);