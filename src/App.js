import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';

const App = () => (
    <div className="App">
        <TodoList />
    </div>
);

//to see changes in browser automatically without hitting 
export default hot(module)(App);