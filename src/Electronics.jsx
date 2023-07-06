import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import But from "../src/Pages/But";

const Electronics = () => {
  const [item, setItem] = useState([]);
  const url = "https://fakestoreapi.com/products";

  const getallData = () => {
    axios.get(url).then((res) => setItem(res.data));
  };

  const electronicsdata = item.filter((e) => e.category === "electronics");

  console.log("Item", electronicsdata);
  console.log(item);

  useEffect(() => {
    getallData();
  }, []);

  return (
    <>
      <div className="Aproduct">
        {electronicsdata?.map((p) => (
          <div className="aprodcard">
            <div className="cardimg">
              <div className="showicon">
                <div className="showcircle">
                  <div className="cir1"></div>
                  <div className="cir1"></div>
                  <div className="cir1"></div>
                </div>
              </div>

              <img src={p.image} alt="" />
            </div>

            <div className="txt">
              <div className="tet">
                <h5>{p.title}</h5>
                <p>${p.price}</p>
              </div>

              <But />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Electronics;
