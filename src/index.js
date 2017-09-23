import React from 'react';
import { render } from 'react-dom';
import TodoList from './App';
import registerServiceWorker from './registerServiceWorker';

render(
    <TodoList />,
    document.getElementById('root')
);
registerServiceWorker();