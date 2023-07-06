import React from 'react'

const Element = () => {
  return (
    <div>Element</div>
  )
}

export default Element
























































































// import React, { useReducer, useContext, createContext } from 'react';

// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state, action) => {
//   switch(action.type) {
//     case "ADD":
//       return[...state, action.item]
//     default:
//       throw new Error(`unknown action ${action.type}`);
//   }
// };

// export const CartProvider = ({ children })  => {
//   const [state, dispatch] = useReducer(reducer, []);


//   return(
//     <CartDispatchContext.Provider value={dispatch}>
//       <CartStateContext.Provider value={state}>
//         {children}
//       </CartStateContext.Provider>
//     </CartDispatchContext.Provider>
//   )
// }



// export const useCart = () => useContext(CartStateContext);
// export const useDispatchCart = () => useContext(CartDispatchContext);



// import React, { useReducer } from 'react';

// // Step 1: Define the initial state
// const initialCartState = {
//   items: [],
//   total: 0
// };

// // Step 2: Define the reducer function
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//         total: state.total + action.payload.price
//       };
//     case 'REMOVE_ITEM':
//       const updatedItems = state.items.filter(item => item.id !== action.payload.id);
//       const updatedTotal = state.total - action.payload.price;
//       return {
//         ...state,
//         items: updatedItems,
//         total: updatedTotal
//       };
//     case 'CLEAR_CART':
//       return initialCartState;
//     default:
//       return state;
//   }
// };

// const Reducer = () => {
//   // Step 3: Initialize the state using useReducer
//   const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

//   const addItemToCart = item => {
//     // Step 4: Dispatch an action to update the state
//     dispatch({ type: 'ADD_ITEM', payload: item });
//   };

//   const removeItemFromCart = item => {
//     dispatch({ type: 'REMOVE_ITEM', payload: item });
//   };  

//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   console.log(cartState);

//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>
//         {cartState.items.map(item => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//             <button onClick={() => removeItemFromCart(item)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <p>Total: ${cartState.total}</p>
//       <button onClick={clearCart}>Clear Cart</button>
//     </div>
//   );
// };

// export default Reducer;



// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // import But from "./But";

// const Element = () => {
//   const [pro, setPro] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => res.json())
//       .then((json) => setPro(json));
//   }, []);

//   console.log(pro);

//   return (
//     <>
//       <section className="Ele">
//         <div className="articl">
//           <h1>Your Cart</h1>
//           <div className="decd">
//             <div className="img">
//               <img src={pro.image} alt="" />
//             </div>
//             <div className="spech">
//               <h2>Detail: {id}</h2>
//               <h4>Title: {pro.title}</h4>
//               <p>{pro.description}</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Element;
