import React from "react";

interface TodoListItemProps {
  key: number
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ key, todo, toggleComplete }) => {

  return (
    <li className={todo.complete ? "todo-row completed" : "todo-row"} key={key} >
      <div>{todo.text}</div>
      <input
        className="todo-checkbox"
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete} />
    </li>
  )
}