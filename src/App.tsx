import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/index.css';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import { StoreProvider } from './Shared/StoreContext';

export const App: React.FC = () => (
  <StoreProvider>
    <div className='container'>
      <Router>
        <Route path='/' exact component={Join} />
        <Route path='/chat' component={Chat} />
      </Router>
    </div>
  </StoreProvider>
);

export default App;
