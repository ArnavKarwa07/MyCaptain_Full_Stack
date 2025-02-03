// import React from "react";
// import TodoInput from "./components/TodoInput.js";
// import TodoList from "./components/TodoList.js";
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [listTodo, setListTodo] = useState([]);
//   let addList = (inputText) => {
//     if (inputText !== "") {
//       setListTodo([...listTodo, inputText]);
//     }
//   };
//   const deleteListItem = (key) => {
//     let newListTodo = [...listTodo];
//     newListTodo.splice(key, 1);
//     setListTodo([...newListTodo]);
//   };
//   return (
//     <div className="main-container">
//       <div className="center-container">
//         <TodoInput addList={addList} />
//         <h1 className="app-heading">Todo</h1>
//         <hr />
//         {listTodo.map((listItem, i) => {
//           return (
//             <TodoList
//               key={i}
//               index={i}
//               listItem={listItem}
//               deleteListItem={deleteListItem}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText.trim() !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    const newListTodo = listTodo.filter((_, index) => index !== key);
    setListTodo(newListTodo);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">Todo</h1>
        <hr />
        <ul>
          {listTodo.map((listItem, index) => (
            <TodoList
              key={index}
              index={index}
              listItem={listItem}
              deleteListItem={deleteListItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
