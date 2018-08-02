import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

// internal components:
import Post from './components/Post';
import PostFrom from './components/PostFrom';

// Store
import store from  './store/store';

// -- CREATING A STORE --
//const store = createStore( () => {} , {}, applyMiddleware());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
              <div className="App">
                    <header className="App-header">
                      <h1 className="App-title">Redux Demo</h1>
                    </header>
                   <section>
                       ihskn
                       <PostFrom/>
                       <hr/>
                       <Post/>
                   </section>
              </div>
        </Provider>
    );
  }
}

export default App;
