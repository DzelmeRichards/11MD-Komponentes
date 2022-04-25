import React, { FC } from 'react'; // functional componente
import './task.scss';
import { Task as TaskType } from '../../types';

type TaskProps = {
  task: TaskType
};

const Task: FC<TaskProps> = ({ task }) => (
  <div className={`task ${task.done ? 'task--done' : ''}`}>{ task.text }</div>
);

export default Task;
