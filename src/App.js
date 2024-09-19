import React from 'react';
import Learn from './Learn';
import ParentComponent from './components/propslearn/ParentComponent';
import ChildComponent from './components/propslearn/ChildComponent';

function App() {
  return (
  <>
  <Learn />
  <ParentComponent/>
  <ChildComponent/>
  </>
  )
}

export default App;
