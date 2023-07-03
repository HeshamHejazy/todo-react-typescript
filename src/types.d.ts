type AddTodo = (newTodo: string) => void;
type ToggleComplete = (selectedTodo: Todo) => void;

type Todo = {
  text: string;
  complete: boolean;
}

