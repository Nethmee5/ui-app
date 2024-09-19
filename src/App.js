import React from 'react';
import Learn from './Learn';
import ParentComponent from './components/propslearn/ParentToChild&ChildToParent/ParentComponent';
import ChildComponent from './components/propslearn/ParentToChild&ChildToParent/ChildComponent';
import ContextApiLearn from './components/propslearn/BetweenMultipleComponents/ContextApiLearn';

function App() {
  return (
  <>
  <Learn />
  <ParentComponent/>
  <ChildComponent/>
  <ContextApiLearn/>
  </>
  )
}

export default App;
