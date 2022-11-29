import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./Components/ToDOList/ToDOList.Component";
import ToDoFrom from "./Components/ToDoFrom/ToDoFrom.component";
import { useState } from "react";

function App() {
  const [state, updateState] = useState({
    allToDos: [],
    singleToDo: "",
    tittle: "All To-Do's",
  });

  const handleInput = (e) => {
    updateState({
      ...state,
      singleToDo: e.target.value,
    });
  };

  const handleBtn = () => {
    updateState({
      ...state,
      allToDos: [...state.allToDos, state.singleToDo],
      singleToDo: "",
    });
  };

  const clearBtn = () => {
    updateState({
      ...state,
      allToDos: [],
    });
  };

  return (
    <div className="App">
      <ToDoFrom
        value={state.singleToDo}
        handleInput={handleInput}
        handleBtn={handleBtn}
        clearBtn={clearBtn}
      />
      <ToDoList tittle={state.tittle} list={state.allToDos} />
    </div>
  );
}

export default App;
