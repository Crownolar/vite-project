// import { useContext, useEffect, useState } from "react";
// import { ThemeContext } from "./ContextApi/Context";
// import { Link, NavLink } from "react-router-dom";
// import { BsCart4 } from "react-icons/bs";
// import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
// // import "./Detailed.css";
// import "./Cpage.css";

// const Cpage = () => {
//   //   const [data, setData] = useState({});
//   const { state, carts, dispatch, total } = useContext(ThemeContext);

//   function handleDeleteTask(id) {
//     dispatch({
//       type: "deleted",
//       id: id,
//     });
//   }

//   function handleIncreaseQuantity(id, price) {
//     dispatch({
//       type: "added",
//       id: id,
//       price: price
//     });
//   }

//   function handleDecreaseQuantity(id, price) {
//     console.log('Decrease Quantity:', id, price);
//     dispatch({
//       type: "decremented",
//       id: id,
//       price: price
//     });
//   }

//   return (
//     <div
//       className="head11"
//       style={{ backgroundColor: state ? "#669bbc" : null }}
//     >
//       <header className="header112" style={{ color: state ? "#780000" : null }}>
//         <h1>Cart Page</h1>
//       </header>

//       {carts.length !== 0 && <h3>Total: ${total}</h3>}

//       {carts.length === 0 ? (
//         <h6>Empty Product</h6>
//       ) : (
//         <div className="Aproduct1">
//           {carts?.map((p) => (
//             <Link className="aprodcard1" key={p.id}>
//                 <button
//         onClick={() => handleIncreaseQuantity(p.id, p.price)}
//         style={{
//           width: "30px",
//           height: "20px",
//           border: "none",
//           color: "white",
//           backgroundColor: 'gray'
//         }}
//       >
//         +
//       </button>
//       <br />
//       <button
//         onClick={() => handleDecreaseQuantity(p.id, p.price)}
//         style={{
//           width: "30px",
//           height: "20px",
//           border: "none",
//           color: "white",
//           backgroundColor: 'gray'
//         }}
//       >
//         -
//       </button>
//               <div className="cardimg1">
//                 <div className="showicon1">
//                   <div className="showcircle1">
//                     <div className="cir11">
//                       <BsCart4 />
//                     </div>
//                     <div className="cir11">
//                       <AiOutlineHeart />
//                     </div>
//                     <div className="cir11">
//                       <AiOutlineSearch />
//                     </div>
//                   </div>
//                 </div>

//                 <img src={p.image} alt="" />
//               </div>

//               <div
//                 className="txt1"
//                 style={{
//                   backgroundColor: state ? "#003049" : null,
//                   color: state ? "#fdf0d5" : null,
//                 }}
//               >
//                 <div className="tet1">
//                   <h5>{p.name}</h5>
//                   <p>${p.price}</p>
//                   <p>Quantity: {p.quantity}</p>
//                 </div>

//                 <button
//                   onClick={() => handleDeleteTask(p.id)}
//                   style={{ backgroundColor: state ? "#c1121f" : null }}
//                 >
//                   Delete Item
//                 </button>
//                 {/* <But /> */}
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cpage;

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ContextApi/Context";
import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
// import "./Detailed.css";
import "./Cpage.css";

const Cpage = () => {
  //   const [data, setData] = useState({});
  const { state, carts, dispatch, total } = useContext(ThemeContext);

  function handleDeleteTask(id) {
    dispatch({
      type: "deleted",
      id: id,
    });
  }

  function handleIncreaseQuantity(id, price) {
    dispatch({
      type: "added",
      id: id,
      price: price,
    });
  }

  function handleDecreaseQuantity(id, price) {
    console.log("Decrease Quantity:", id, price);
    dispatch({
      type: "decremented",
      id: id,
      price: price,
    });
  }

  return (
    <div
      className="head11"
      style={{ backgroundColor: state ? "#669bbc" : null }}
    >
      <header className="header112" style={{ color: state ? "#780000" : null }}>
        <h1>Cart Page</h1>
      </header>

      {carts.length !== 0 && <h3>Total: ${total}</h3>}

      {carts.length === 0 ? (
        <h6>Empty Product</h6>
      ) : (
        <div className="Aproduct1">
          {carts?.map((p) => (
            <Link className="aprodcard1" key={p.id}>
              <div className="cardimg1">
                <div className="showicon1">
                  <div className="showcircle1">
                    <div className="cir11">
                      <BsCart4 />
                    </div>
                    <div className="cir11">
                      <AiOutlineHeart />
                    </div>
                    <div className="cir11">
                      <AiOutlineSearch />
                    </div>
                  </div>
                </div>

                <img src={p.image} alt="" />
              </div>

              <div
                className="txt1"
                style={{
                  backgroundColor: state ? "#003049" : null,
                  color: state ? "#fdf0d5" : null,
                }}
              >
                <div className="tet1">
                  <h5>{p.name}</h5>
                  <p>${p.price}</p>
                  <p>Quantity: {p.quantity}</p>
                </div>

                <div className="btnn">
                  <button
                    onClick={() => handleIncreaseQuantity(p.id, p.price)}
                    style={{
                      width: "30px",
                      height: "20px",
                      border: "none",
                      color: "white",
                      backgroundColor: "gray",
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleDeleteTask(p.id)}
                    style={{ backgroundColor: state ? "#c1121f" : null }}
                  >
                    Delete Item
                  </button>
                  <button
                    onClick={() => handleDecreaseQuantity(p.id, p.price)}
                    style={{
                      width: "30px",
                      height: "20px",
                      border: "none",
                      color: "white",
                      backgroundColor: "gray",
                    }}
                  >
                    -
                  </button>
                </div>
                {/* <But /> */}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cpage;

