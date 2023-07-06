import { useState } from "react";
import Alproduct from "./Alproduct.jsx";
import Men from "./Men.jsx";
import Jewelry from "./Jewelry.jsx";
import Electronics from "./Electronics.jsx";
import Women from "./Women.jsx";
import { ThemeContext } from "./Pages/ContextApi/Context.jsx";
import { useContext } from "react"

const Product = () => {
  const [allProduct, setAllProduct] = useState(true);
  const [men, setMen] = useState(false);
  const [jewwelry, setJewelry] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [women, setWomen] = useState(false);
  const { state } = useContext(ThemeContext);


  // function handleAddTask(item) {
  //   dispatch({
  //     type: 'added',
  //     id: id,
  //     name: name,
  //     price: price,
  //     image: image
  //   });
  // }

  const Sall = () => {
    setAllProduct(true);
    setMen(false);
    setJewelry(false);
    setElectronics(false);
    setWomen(false);
  };
  const Smen = () => {
    setAllProduct(false);
    setMen(true);
    setJewelry(false);
    setElectronics(false);
    setWomen(false);
  };
  const Sjewelry = () => {
    setAllProduct(false);
    setMen(false);
    setJewelry(true);
    setElectronics(false);
    setWomen(false);
  };
  const Selectronics = () => {
    setAllProduct(false);
    setMen(false);
    setJewelry(false);
    setElectronics(true);
    setWomen(false);
  };
  const Swomen = () => {
    setAllProduct(false);
    setMen(false);
    setJewelry(false);
    setElectronics(false);
    setWomen(true);
  };

  return (
    <>
      <div className="ProductCard">
        <div className="HeaderCard">
          <h1 style={{color: state? "white": null}}>Our Products</h1>
          <div className="Line" style={{backgroundColor: state? "orange": null}}></div>
        </div>
        <div className="List">
          <div className="navleft">
            <ul>
              <li  className={allProduct ? "Active" : null} onClick={Sall} style={{color: state? "white": null}}>
                All Product
              </li>
              <li className={men ? "Active" : null} onClick={Smen} style={{color: state? "white": null}}>
                Men's clothing
              </li>
              <li className={jewwelry ? "Active" : null} onClick={Sjewelry} style={{color: state? "white": null}}>
                Jewelry
              </li>
              <li
                className={electronics ? "Active" : null}
                onClick={Selectronics} style={{color: state? "white": null}}
              >
                Electronics
              </li>
              <li className={women ? "Active" : null} onClick={Swomen} style={{color: state? "white": null}}>
                Women's clothing
              </li>
            </ul>
          </div>

          <div className="navright">
            <button>Filter</button>
          </div>
        </div>

        <div className="PRoductItem">
          {allProduct ? (
            <Alproduct />
          ) : men ? (
            <Men />
          ) : jewwelry ? (
            <Jewelry />
          ) : electronics ? (
            <Electronics />
          ) : women ? (
            <Women />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Product;
