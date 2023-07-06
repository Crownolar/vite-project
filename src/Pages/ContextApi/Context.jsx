

import {  createContext, useEffect, useState, useReducer } from 'react';
import Theme from '../Theme/Theme';
export const ThemeContext = createContext();

let initialCart = JSON.parse(localStorage.getItem('carts')) || [];

// let total = 0;


const reducer = (carts, action) => {
    if (action.type === 'added') {
      const existingItem = carts.find((item) => item.id === action.id);
      console.log('Existing Item:', existingItem);
      console.log('Existing Item Quantity:', existingItem.quantity);
      console.log('Action Price:', action.price);
  
      if (existingItem) {
        return carts.map((item) =>
          item.id === action.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: (
                  parseFloat(item.price) + parseFloat(item.initialPrice)
                ).toFixed(1),
              }
            : item
        );
      } else {
        return [
          ...carts,
          {
            id: action.id,
            name: action.name,
            initialPrice: action.initialPrice,
            price: action.price.toFixed(1),
            image: action.image,
            quantity: 1,
            // initialPrice: action.price
          },
        ];
      }
    } else if (action.type === 'decremented') {
      const existingItem = carts.find((item) => item.id === action.id);
      console.log('Existing Item:', existingItem);
      console.log('Existing Item Quantity:', existingItem.quantity);
      console.log('Action Price:', action.price);
  
      if (existingItem.quantity > 1) {
        return carts.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity - 1, 
            price: (parseFloat(item.price) - parseFloat(item.initialPrice)).toFixed(1) } : item
        );
      } else {
        return carts.filter((p) => p.id !== action.id);
      }
    } else if (action.type === 'deleted') {
      return carts.filter((p) => p.id !== action.id);
    } else {
      // throw new Error('Unknown action: ' + action.type);
      return carts;
    }
  };



export const ThemeProvider=({children})=>{
  const [state, setState] = useState(JSON.parse(localStorage.getItem("state")));
  // const [state, setState] = useState(false);
  const [carts, dispatch] = useReducer(reducer, initialCart);
  const [total, setTotal] = useState(0)

  const Toggle=()=>{
    setState(!state);
  }

  useEffect(() => {
    const val = carts.reduce((prev, v) => prev + parseFloat(v.price), 0);
    setTotal(val.toFixed(2));
  
    localStorage.setItem('carts', JSON.stringify(carts));
  }, [carts]);
  

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state))
  },[state])

 



  return(
    <ThemeContext.Provider value={{state, Toggle, carts, dispatch, total}}>
        {children}
    </ThemeContext.Provider>
  )
}

// 