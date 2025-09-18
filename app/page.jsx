"use client";
import { useState } from "react";
import { Button } from "./components/Button";
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [id, setId] = useState(1);
  function handleChange(e) {
    setInputValue(e.target.value);
    console.log("current inputVal: " + inputValue);
  }

  function addTask(e) {
    if (inputValue.trim() !== "" || e.key === "Enter") {
      console.log("after addition  tasks: " + tasks);
      console.log("nemegdeh input: " + inputValue);
      setTasks([
        ...tasks,
        {
          id: id,
          title: inputValue.trim(),
          completed: false,
        },
      ]);
      console.log("before add  : " + tasks);
      setId(id + 1);
      setInputValue("");
    }
  }

  function deleteTasks(deleteIndex) {
    const deleteTask = tasks.filter((_, i) => i !== deleteIndex);
    setTasks(deleteTask);
  }

  const barsaa = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const clearCompleted = () => {
    const clear = tasks.filter((task) => !task.completed);
    setTasks(clear);
  };
  const clearActive = () => {
    const clear = tasks.filter((task) => task.completed);
    setTasks(clear);
  };

  const visibleTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });
  const keyboard = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="w-[377px] h-fit bg-black flex flex-col gap-5 p-5">
      <p className="flex justify-center text-2xl">To-Do list</p>
      <div className="flex items-center gap-2">
        <div className="flex gap-2 items-center">
          <input
            className="bg-pink-400  w-[263px] pl-4 h-[38px]"
            placeholder="Add a new task... "
            onKeyDown={keyboard}
            type="text"
            value={inputValue}
            onChange={handleChange}
          />

          <button
            className="w-[59px] h-[40px] rounded-xl bg-[#3C82F6] p-[8px,16px]"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>
      <Button filter={filter} setFilter={setFilter}></Button>
      {tasks.length === 0 ? (
        <p className="flex justify-center pt-10 text-amber-300">
          No tasks yet. Add one above!
        </p>
      ) : (
        <ol>
          {visibleTasks.map((task, i) => {
            return (
              <li
                key={i}
                className="flex gap-5 mb-5 justify-between items-center relative bg-green-400 w-[345px] h-[40px]"
              >
                <input
                  type="checkbox"
                  className="absolute w-[20px] h-[20px] left-3"
                  checked={task.completed}
                  onChange={() => barsaa(task.id)}
                />{" "}
                <p
                  className={`pl-12 text-2xl ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {" "}
                  {task.title}
                </p>
                <button
                  className="w-[59px] h-[40px] rounded-xl bg-red-100 mr-5 p-[8px,16px] text-red-400"
                  onClick={() => deleteTasks(i)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      )}
      {tasks.length !== 0 && <p></p>}
      <div className="flex justify-between ">
        <p className="text-pink-700">
          {tasks.filter((task) => task.completed).length} of {tasks.length}{" "}
          completed
        </p>
        <div>
          <button onClick={clearCompleted} className="text-red-400 rounded-xl">
            Clear completed
          </button>
        </div>
      </div>
      <div className="flex gap-10 items-center justify-center">
        <button onClick={clearActive} className="text-pink-400">
          Clear Active
        </button>
        <button onClick={clearAll} className="text-pink-200">
          Clear All
        </button>
      </div>

      <div className="flex justify-center gap-2">
        <p>Powered by </p>
        <a
          href="https://www.youtube.com/watch?v=p0kCE0cFXw4     "
          target="_blank"
          className="text-blue-600"
        >
          Pinecone Academy
        </a>
      </div>
      <img
        src="https://i.pinimg.com/736x/0e/42/f9/0e42f90a9cb83552aab3b0f89dfaffd2.jpg"
        alt="dsadsa"
        className="w-[500px] h-[500px] bg-contain"
      />
    </div>
  );
}
