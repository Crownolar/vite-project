import React, { useContext, useState, useReducer } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../ContextApi/Context";

// let initialCart = ['Initial Cart'];

// const reducer = () =>  {
//   if (action.type === 'added') {
//     return [
//       ...carts,
//       {
//         id: action.id,
//         name: action.name,
//         price: action.price,
//         image: action.image
//       },
//     ];
//   } else if (action.type === 'deleted') {
//     return carts.filter((t) => t.id !== action.id);
//   } else {
//     throw Error('Unknown action: ' + action.type);
//   }
// }

const Theme = () => {
  const { state, Toggle } = useContext(ThemeContext);
  // const [carts, dispatch] = useReducer(reducer, initialCart)

  return (
    <div>
      {state ? (
        <MdOutlineLightMode
          onClick={() => {
            Toggle();
          }}
          style={{ color: "white", cursor: "pointer" }}
        />
      ) : (
        <MdDarkMode
          onClick={() => {
            Toggle();
          }}
          style={{cursor: "pointer"}}
        />
      )}
    </div>
  );
};

export default Theme;
