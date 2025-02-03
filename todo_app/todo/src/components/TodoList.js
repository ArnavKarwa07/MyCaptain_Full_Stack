// import React from "react";

// function TodoList(props) {
//   return (
//     <li className="list-item">
//       {props.listitem}
//       <span className="icons">
//         <i
//           onClick={(e) => {
//             props.deleteListItem(props.index);
//           }}
//         >
//           &times;
//         </i>
//       </span>
//     </li>
//   );
// }

// export default TodoList;

import React from "react";

function TodoList({ listItem, index, deleteListItem }) {
  return (
    <li className="list-item">
      {listItem}
      <span className="icons">
        <i onClick={() => deleteListItem(index)} className="icon-delete">
          &times;
        </i>
      </span>
    </li>
  );
}

export default TodoList;
