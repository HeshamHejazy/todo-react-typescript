import React, { useState, ChangeEvent, FormEvent } from 'react';

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
    setShowForm(false);
  }

  return (
    <React.Fragment>
      {showForm ?
        <div className="todo-form-wrapper">
          <form className="todo-form ">
            <input type="text" value={newTodo} className="todo-input" placeholder="Add a todo" onChange={handleChange} />
            <button type="submit" className="todo-submit" onClick={handleSubmit}>
              Add Todo
            </button>
            <button className='absolute top-2 right-2 cursor-pointer' onClick={()=>setShowForm(false)}>x</button>
          </form>
        </div>

        :
        <div className='todo-add-button-wrapper '>
          <div onClick={() => setShowForm(true)} className='todo-add-button'>+</div>
        </div>
      }

    </React.Fragment>

  )
};