import React from "react"
import { useContext } from "react"
import { ThemeContext } from "./ContextApi/Context"

const Cart = () => {
  const { state } = useContext(ThemeContext);
    return(
        <>
            <div className="TopcartWrap">
          <div className="TopcartHeader">
              <h1 style={{color: state? "white": null}}>Top Category</h1>
              <div className="Line" style={{backgroundColor: state? "orange": null}}></div>
          </div>

          <div className="TopcartItem">
            <div className="TopcartItemCard">
              <div className="Cardcont">
                <img src="https://cdn.edenrobe.com/media/catalog/product/images/Men/Men_Blazer/2022/22_M_MenBlazer_EMTB22-6772_1.jpg" alt="" />
                <div className="cardname">
                  <h4>Men's Clothing</h4>
                </div>
              </div>
              <div className="Cardcont">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZUNWevu5JCWTVxrWUx0qcDovppVG1UUrhU1_3ozsXacmpAKBDPlaITxYnT7zntoftUQ&usqp=CAU" alt="" />
                <div className="cardname">
                  <h4>Women's Clothing</h4>
                </div>
              </div>
              <div className="Cardcont">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL30eL60nDcCJOE8vS25fZnzP6HmPFX1wOwg&usqp=CAU" alt="" />
                <div className="cardname">
                  <h4>Jewelry</h4>
                </div>
              </div>
              <div className="Cardcont">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8eTrxjRyNXGn5j__e4AqzGorjAZK4Bs86g&usqp=CAU" alt="" />
                <div className="cardname">
                  <h4>Electronics</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Cart