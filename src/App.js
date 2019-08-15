import React from 'react';
import Header from './components/header';
import './App.scss';
import Headline from './components/headline/';

const tempArr = [{
  fName: 'Jake',
  lName: 'Doe',
  email: 'john@doe.com',
  age: 24,
  onlineStatus: false
}]

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
      <Headline header="Posts" desc="Click the button to render Posts!" tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
