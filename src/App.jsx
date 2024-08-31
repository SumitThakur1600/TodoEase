import {useState, useEffect} from "react";
import {TodoContextProvider} from "./Context/TodoContext";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(), ...todo}]);
  };

  const updateTodo = (todo, id) => {
    setTodos((prev) => prev.map((p) => (p.id === id ? todo : p)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((p) => (p.id === id ? {...p, completed: !p.completed} : p))
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  return (
    <TodoContextProvider
      value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}
    >
      <div className="w-screen h-screen bg-gradient-to-r from-teal-400 to-yellow-200 flex justify-center">
        <div className="w-[700px] flex flex-col place-items-center">
          <h2 className="mt-20 mb-10 font-sans text-5xl font-bold text-gray-700">
            TODO LIST
          </h2>
          <TodoForm />
          <br />
          <div className="flex flex-wrap gap-y-3 w-full">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
