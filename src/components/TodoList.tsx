import React from "react";
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <ul>
     {todos.map((todo,index) => (
       <TodoListItem
          key={index}
          todo={todo}
          toggleComplete={toggleComplete}
        />
     ))}
    </ul>
  );
};