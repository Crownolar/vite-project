import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import But from "../src/Pages/But";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { ThemeContext } from "./Pages/ContextApi/Context";

const Alproduct = () => {
  const [item, setItem] = useState([]);
  const { state, carts, dispatch } = useContext(ThemeContext);
  const [tap, setTap] = useState();

  // const Heart = () => {
  //     if(tap === backgroundColor){
  //         setTap("blue")
  //     }
  // }

  //   const Heart = () => {
  //     // setTap((prevTap) => prevTap === "blue" ? null : "red");
  //     setTap((prevTap) => (prevTap === id ? null : id));
  //   };

  function handleAddTask(id, name, price, image) {
    dispatch({
      type: "added",
      id: id,
      name: name,
      price: price,
      image: image,
    });
  }

  const getallData = () => {
    const url = "https://fakestoreapi.com/products";
    axios.get(url).then((res) => setItem(res.data));
  };
  console.log(item);

  useEffect(() => {
    getallData();
  }, []);

  return (
    <>
      <div className="Aproduct">
        {item?.map((p) => (
          <Link className="aprodcard" key={p.id}>
            <div className="cardimg">
              <div className="showicon">
                <div className="showcircle">
                  <div className="cir1">
                    <BsCart4 />
                  </div>
                  <div className="cir1">
                    <AiOutlineHeart />
                  </div>
                  <div className="cir1">
                    <AiOutlineSearch />
                  </div>
                </div>
              </div>

              <img src={p.image} alt="" />
            </div>

            <div
              className="txt"
              style={{
                backgroundColor: state ? "#14213d" : null,
                color: state ? "white" : null,
              }}
            >
              <div className="tet">
                <h5>{p.title}</h5>
                <p>${p.price}</p>
              </div>
              {/* <button onClick={() => handleAddTask(p.id, p.title, p.price, p.image)}>Add</button> */}
              {/* <But /> */}
              <button
                onClick={() => handleAddTask(p.id, p.title, p.price, p.image)}
                style={{ backgroundColor: state ? "#fca311" : null }}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Alproduct;

// to={`/detailed/${p.id}`}
// onClick={({style:{backgroundColor: state? "red" : null}})}
// style={{color: tap }} onClick={Heart}
// style={{ backgroundColor: tap === p.id ? "red" : null }}
                    //   onClick={() => Heart(p.id)}