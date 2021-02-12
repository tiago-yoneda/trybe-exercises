import './App.css';
import React ,{Component} from 'react';
import HelloWorld from './HelloWorld'

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = [
  'Aprender React', 
  'Entender React',
  'Pesquisar React',
  'Entender o que está acontecendo',
]

function App () {
  return (
  <div>
    <h2>Antes do Hello</h2>
    <HelloWorld />
    <h2>Após o Hello</h2>
    <ol>
      {taskList.map((item)=>task(item))}
    </ol>
  </div>
  )
}

export default App;

