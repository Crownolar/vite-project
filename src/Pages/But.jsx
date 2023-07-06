import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ContextApi/Context";
import { useReducer } from "react";

const But = () => {
  const {state, dispatch} = useContext(ThemeContext)

  function handleAddTask(id, name, price, image) {
    dispatch({
      type: 'added',
      id: id,
      name: name,
      price: price,
      image: image
    });
  }

  return (
  
      <button style={{backgroundColor: state? "#fca311":null} } onClick={() => handleAddTask(p.id, p.title, p.price, p.image)}>Add to Cart</button>
  );
};

export default But;
