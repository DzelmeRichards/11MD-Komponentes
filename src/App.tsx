/* eslint-disable react/self-closing-comp */
import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Task from './components/Task/Task';
import { Task as TaskType, Vegetable } from './types';
import VegetableListFirst from './components/Vegetable/VegetableListFirst/VegetableListFirst';

const tasks: TaskType[] = [
  {
    id: '1',
    text: 'Do laundry',
    done: true,
  },
  {
    id: '2',
    text: 'Clean house',
    done: false,
  },
  {
    id: '3',
    text: 'Make pica and deliver to Ketijas house',
    done: true,
  },
];

const vegetables: Vegetable[] = [
  {
    id: '1',
    title: 'Cucumber',
    description: 'It is green',
    backgroundColor: 'green',
    available: true,
  },
  {
    id: '2',
    title: 'Carrot',
    description: 'It is orange',
    backgroundColor: 'orange',
    available: false,
  },
  {
    id: '3',
    title: 'Sweet pepper',
    description: 'It is in many colors',
    backgroundColor: 'yellow',
    available: true,
  },
];

const App = () => (
  <div className="app__container">
    <div className="task__container">
      {tasks.map((task) => <Task task={task} />)}
    </div>
    <br />
    <div className="task__container">
      {tasks.filter((task) => task.done === false).map((task) => <Task task={task} />)}
    </div>
    <div>

      <VegetableListFirst vegetables={vegetables} />

      <VegetableListFirst vegetables={vegetables.filter((vegetable) => vegetable.available)} />
    </div>
  </div>
);

export default App;
