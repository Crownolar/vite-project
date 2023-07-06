import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detailed.css";
import But from "./But";
import { useContext } from "react";
import { ThemeContext } from "./ContextApi/Context";
// import { useDispatchCart } from "../Element";

const Detailed = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const { state, carts, dispatch } = useContext(ThemeContext);
  // const dispatch = useDispatchCart();

  function handleAddTask(data, name, price, image) {
    dispatch({
      type: 'added',
      id: data,
      name: name,
      price: price,
      image: image
    });
  }


  // const addToCart = (item) => {
  //   // dispatch({ type:  "ADD", item });
  //   // dispatch({ type: "ADD", item })
  //   console.log(item);
  // }
  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <section style={{ backgroundColor: state ? "black" : null }} className="vad">
        <article style={{ backgroundColor: state ? "black" : null }} className="cad">
          <div className="wrap1">
            <div className="Img">
              <img src={data.image} alt="" />
            </div>
            <div className="des" style={{backgroundColor: state? "black": null}}>
              <h1 style={{ color: state ? "white" : null }}>Product :{id}</h1>
              <h4 style={{ color: state ? "white" : null }}>
                Title: <br /> {data.title}
              </h4>
              {/* <Reducer/> */}
              <p style={{ color: state ? "white" : null }}>
                {data.description}
              </p>
            </div>
          </div>
          <button onClick={() => handleAddTask(data.id, data.title, data.price, data.image)}>Add To Cart</button>
        </article>
      </section>
    </div>
  );
};

export default Detailed;

// if (existingItem) {
//   // If the item already exists in the cart, update the quantity and total price
//   const updatedCarts = carts.map((item) => {
//     if (item.id === action.id) {
//       return {
//         ...item,
//         quantity: item.quantity + 1,
//         totalPrice: item.totalPrice + action.price,
//       };
//     }
//     return item;
//   });

//   return updatedCarts;
// } else {
//   // If the item doesn't exist in the cart, add it with quantity and total price
//   return [
//     ...carts,
//     {
//       id: action.id,
//       name: action.name,
//       price: action.price,
//       image: action.image,
//       quantity: 1,
//       totalPrice: action.price,
//     },
//   ];
// }

// const [quantity, setQuantity] = useState('');

  // const Qty = () => {
  //   if(quantity === action.id) {
  //     setQuantity(quantity + 1)
  //   }
  // }

  // import { createContext, useEffect, useState, useReducer } from 'react';

// export const ThemeContext = createContext();

// const reducer = (carts, action) => {
//   if (action.type === 'added') {
//     const Avail = carts.findIndex((item) => item.id === action.id);
    
//     if (Avail <= -1){
//       return [
//         ...carts,
//         {
//           id: action.id,
//           name: action.name,
//           price: action.price,
//           image: action.image,
//           quantity: 1,
//         },
//       ];
//     } else {
//       const newVal = carts.map((vl) => {
//         if (vl.id === action.id){
//           vl.quantity += 1; // Increment the quantity by 1
//           return vl;
//         } else {
//           return vl;
//         }
//       });
//       return newVal;
//     }
//   } else if (action.type === 'deleted') {
//     return carts.filter((p) => p.id !== action.id);
//   } else {
//     throw Error('Unknown action: ' + action.type);
//   }
// };


// export const ThemeProvider = ({ children }) => {
//   const [state, setState] = useState(() => {
//     try {
//       const storedState = localStorage.getItem('state');
//       return storedState ? JSON.parse(storedState) : false;
//     } catch (error) {
//       console.error('Error parsing state from local storage:', error);
//       return false;
//     }
//   });

//   const [carts, dispatch] = useReducer((carts, action) => {
//     try {
//       return reducer(carts, action);
//     } catch (error) {
//       console.error('Error updating carts:', error);
//       return carts;
//     }
//   }, []);

//   const [total, setTotal] = useState(0);

//   const Toggle = () => {
//     setState(!state);
//   };

//   useEffect(() => {
//     const val = carts.reduce((prev, v) => prev + v.price * v.quantity, 0);
//     setTotal(val.toFixed(2));
//     localStorage.setItem('carts', JSON.stringify(carts));
//   }, [carts]);

//   useEffect(() => {
//     try {
//       localStorage.setItem('state', JSON.stringify(state));
//     } catch (error) {
//       console.error('Error saving state to local storage:', error);
//     }
//   }, [state]);

//   return (
//     <ThemeContext.Provider value={{ state, Toggle, carts, dispatch, total }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };



// import { createContext, useEffect, useState, useReducer } from 'react';

// export const ThemeContext = createContext();

// const reducer = (carts, action) =>  {
//   if (action.type === 'added') {
//     const Avail = carts.findIndex((item) => item.id === action.id);
    
//     if (Avail <= -1){
//       return [
//         ...carts,
//         {
//           id: action.id,
//           name: action.name,
//           price: action.price,
//           image: action.image,
//           quantity: 1, // Set quantity to 1 when the item is added for the first time
//         },
//       ];
//     } else {
//       const newVal = carts.map((vl) => {
//         if(vl.id === action.id){
//           vl.quantity += 1; // Increment quantity by 1 when the item is already in the cart
//           return vl;
//         } else {
//           return vl;
//         }
//       });
//       return newVal;
//     }  
//   } else if (action.type === 'deleted') {
//     return carts.filter((p) => p.id !== action.id);
//   } else {
//     throw Error('Unknown action: ' + action.type);
//   }
// }

// export const ThemeProvider=({children})=>{
//   const [state, setState] = useState(JSON.parse(localStorage.getItem("state")) || false);
//   const [carts, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("carts")) || []);
//   const [total, setTotal] = useState(0)

//   const Toggle = () => {
//     setState(!state);
//   }

//   useEffect(() => {
//     const val = carts.reduce((prev, v) => prev + v.price * v.quantity, 0);
//     setTotal(val.toFixed(2));
//     localStorage.setItem("carts", JSON.stringify(carts)); // Save carts to local storage
//   }, [carts])

//   useEffect(()=>{
//     localStorage.setItem("state", JSON.stringify(state));
//   }, [state])

//   return (
//     <ThemeContext.Provider value={{state, Toggle, carts, dispatch, total}}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// import { createContext, useEffect, useState, useReducer } from 'react';

// export const ThemeContext = createContext();

// const reducer = (carts, action) => {
//   if (action.type === 'added') {
//     const Avail = carts.findIndex((item) => item.id === action.id);

//     if (Avail <= -1) {
//       return [
//         ...carts,
//         {
//           id: action.id,
//           name: action.name,
//           price: action.price,
//           image: action.image,
//           quantity: 1,
//         },
//       ];
//     } else {
//       const newVal = carts.map((vl) => {
//         if (vl.id === action.id) {
//           vl.quantity += 1;
//           return vl;
//         } else {
//           return vl;
//         }
//       });
//       return newVal;
//     }
//   } else if (action.type === 'deleted') {
//     return carts.filter((p) => p.id !== action.id);
//   } else {
//     throw Error('Unknown action: ' + action.type);
//   }
// };

// export const ThemeProvider = ({ children }) => {
//   const [state, setState] = useState(() => {
//     try {
//       const storedState = localStorage.getItem('state');
//       return storedState ? JSON.parse(storedState) : false;
//     } catch (error) {
//       console.error('Error parsing state from local storage:', error);
//       return false;
//     }
//   });

//   const [carts, dispatch] = useReducer((carts, action) => {
//     try {
//       return reducer(carts, action);
//     } catch (error) {
//       console.error('Error updating carts:', error);
//       return carts;
//     }
//   }, []);

//   const [total, setTotal] = useState(0);

//   const Toggle = () => {
//     setState(!state);
//   };

//   useEffect(() => {
//     const val = carts.reduce((prev, v) => prev + v.price * v.quantity, 0);
//     setTotal(val.toFixed(2));
//     localStorage.setItem('carts', JSON.stringify(carts));
//   }, [carts]);

//   useEffect(() => {
//     try {
//       localStorage.setItem('state', JSON.stringify(state));
//     } catch (error) {
//       console.error('Error saving state to local storage:', error);
//     }
//   }, [state]);

//   return (
//     <ThemeContext.Provider value={{ state, Toggle, carts, dispatch, total }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// function handleDecreaseQuantity(id) {
//   dispatch({
//     type: "decremented",
//     id: id,
//   });
// }

// // ...

// const reducer = (carts, action) => {
//   if (action.type === "added") {
//     const Avail = carts.findIndex((item) => item.id === action.id);
    
//     if (Avail <= -1) {
//       return [
//         ...carts,
//         {
//           id: action.id,
//           name: action.name,
//           price: action.price,
//           image: action.image,
//           quantity: 1,
//         },
//       ];
//     } else {
//       const newVal = carts.map((vl) => {
//         if (vl.id === action.id) {
//           vl.quantity += 1;
//           return vl;
//         } else {
//           return vl;
//         }
//       });
//       return newVal;
//     }
//   } else if (action.type === "decremented") {
//     const newVal = carts.map((vl) => {
//       if (vl.id === action.id) {
//         vl.quantity -= 1;
//         return vl;
//       } else {
//         return vl;
//       }
//     });
//     return newVal;
//   } else if (action.type === "deleted") {
//     return carts.filter((p) => p.id !== action.id);
//   } else {
//     throw new Error("Unknown action: " + action.type);
//   }
// };


// const reducer = (carts, action) =>  {
//   if (action.type === 'added') {
//     const Avail = carts.findIndex((item) => item.id === action.id)
    
//     if (Avail === -1) {
//             return [
//               ...carts,
//               {
//                 id: action.id,
//                 name: action.name,
//                 price: action.price.toFixed(1),
//                 image: action.image,
//                 quantity: 1,
//               },
//             ];
//           } else {
//             const newVal = carts.map((vl) => {
//               if (vl.id === action.id) {
//                 vl.quantity += 1;
//                 vl.price = (parseFloat(vl.price) + action.price).toFixed(1);
//                 return vl;
//               } else {
//                 return vl;
//               }
//             });
//             return newVal;
//           }
//         } else if (action.type === "decremented") {
//           const newVal = carts.map((vl) => {
//             if (vl.id === action.id) {
//               if (vl.quantity > 1) {
//                 vl.quantity -= 1;
//                 vl.price = (parseFloat(vl.price) - action.price).toFixed(1);
//               }
//               return vl;
//             } else {
//               return vl;
//             }
//           });
//           return newVal;
    
//   } else if (action.type === 'deleted') {
//     return carts.filter((p) => p.id !== action.id);
//   }else{
//     throw Error('Unknown action: ' + action.type);
//   };
// }


  // const reducer = (carts, action) => {
  //   if (action.type === 'added') {
  //     const existingItem = carts.find((item) => item.id === action.id);
  
  //     if (existingItem) {
  //       return carts.map((item) =>
  //         item.id === action.id ? { ...item, quantity: item.quantity + 1, 
  //           price: (parseFloat(item.price) + parseFloat(action.price)).toFixed(1),} : item
  //       );
  //     } else {
  //       return [
  //         ...carts,
  //         {
  //           id: action.id,
  //           name: action.name,
  //           price: action.price.toFixed(2),
  //           image: action.image,
  //           quantity: 1,
  //         },
  //       ];
  //     }
  //   } else if (action.type === 'decremented') {
  //     const existingItem = carts.find((item) => item.id === action.id);
  //     console.log(existingItem);
  
  //     if (existingItem.quantity > 1) {
  //       return carts.map((item) =>
  //         item.id === action.id ? { ...item, quantity: item.quantity - 1, 
  //         price: (parseFloat(item.price) - parseFloat(action.price)).toFixed(1), } : item
  //       );
  //     } else {
  //       return carts.filter((p) => p.id !== action.id);
  //     }
  //   } else if (action.type === 'deleted') {
  //     return carts.filter((p) => p.id !== action.id);
  //   } else {
  //     throw new Error('Unknown action: ' + action.type);
  //   }
  // };
  
  
  // const reducer = (carts, action) => {
  //   if (action.type === 'added') {
  //     const existingItem = carts.find((item) => item.id === action.id);
  
  //     if (existingItem) {
  //       return carts.map((item) =>
  //         item.id === action.id
  //           ? {
  //               ...item,
  //               quantity: item.quantity + 1,
  //               price: (
  //                 parseFloat(item.price) + parseFloat(action.price)
  //               ).toFixed(1),
  //             }
  //           : item
  //       );
  //     } else {
  //       return [
  //         ...carts,
  //         {
  //           id: action.id,
  //           name: action.name,
  //           price: action.price.toFixed(2),
  //           image: action.image,
  //           quantity: 1,
  //         },
  //       ];
  //     }
  //   } else if (action.type === 'decremented') {
  //     const existingItem = carts.find((item) => item.id === action.id);
  
  //     if (parseInt(existingItem.quantity, 10) > 1) {
  //       return carts.map((item) =>
  //         item.id === action.id
  //           ? {
  //               ...item,
  //               quantity: item.quantity - 1,
  //               price: (
  //                 parseFloat(item.price) - parseFloat(action.price)
  //               ).toFixed(1),
  //             }
  //           : item
  //       );
  //     } else {
  //       return carts.filter((p) => p.id !== action.id);
  //     }
  //   } else if (action.type === 'deleted') {
  //     return carts.filter((p) => p.id !== action.id);
  //   } else {
  //     throw new Error('Unknown action: ' + action.type);
  //   }
  // };
  
  
  
  
  
  
  // const reducer = (carts, action) =>  {
  //   if (action.type === 'added') {
  //     const Avail = carts.findIndex((item) => item.id === action.id)
      
  //     if (Avail === -1) {
  //             return [
  //               ...carts,
  //               {
  //                 id: action.id,
  //                 name: action.name,
  //                 price: action.price.toFixed(1),
  //                 image: action.image,
  //                 quantity: 1,
  //               },
  //             ];
  //           } else {
  //             const newVal = carts.map((vl) => {
  //               if (vl.id === action.id) {
  //                 vl.quantity += 1;
  //                 vl.price = (parseFloat(vl.price) + action.price).toFixed(1);
  //                 return vl;
  //               } else {
  //                 return vl;
  //               }
  //             });
  //             return newVal;
  //           }
  //         } else if (action.type === "decremented") {
  //           const newVal = carts.map((vl) => {
  //             if (vl.id === action.id) {
  //               if (vl.quantity > 1) {
  //                 vl.quantity -= 1;
  //                 vl.price = (parseFloat(vl.price) - action.price).toFixed(1);
  //               }
  //               return vl;
  //             } else {
  //               return vl;
  //             }
  //           });
  //           return newVal;
      
  //   } else if (action.type === 'deleted') {
  //     return carts.filter((p) => p.id !== action.id);
  //   }else{
  //     throw Error('Unknown action: ' + action.type);
  //   };
  // }