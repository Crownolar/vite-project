import { NavLink, Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { ThemeContext } from "./Pages/ContextApi/Context";
import { useContext } from "react";
import Theme from './Pages/Theme/Theme'
// import { useCart } from "./Element";

const Header = () => {
  // const cartItems = useCart();
  const { state, carts } = useContext(ThemeContext);
  console.log('From Header', carts);
  

  return (
    <>
      <header style={{backgroundColor: state? "black":null}}>
        <div className="headwrap">
          <h2 style={{color: state? "white": null}}>Crown</h2>
          {/* <div><Theme/></div> */}
          <nav>
            <ul>
              <NavLink to={"/"} style={{color: state? "white": null}}>Home</NavLink>
              <NavLink to={"Shop"} style={{color: state? "white": null}}>Shop</NavLink>
              <NavLink to={"About"} style={{color: state? "white": null}}>About</NavLink>
              <NavLink to={"Blog"} style={{color: state? "white": null}}>Blog</NavLink>
              <NavLink to={"Contact"} style={{color: state? "white": null}}>contact</NavLink>
              <Link to={"/element"} style={{color: state? "white": null}}>News </Link>
              <Link to="/cpage" style={{color: state? 'orange': null}}><GiShoppingCart/> ({carts.length})</Link>
            </ul>
          </nav>

          <div className="Icons">
            <ul>
              <li>
                <Theme/>
              </li>
              <li>
              {/* <NavLink to={"Element"} style={{color: state? "white": null}}><GiShoppingCart/></NavLink> */}
              <NavLink to={`/detailed/:id`} style={{color: state? "white": null}}><span>Sign up</span></NavLink>
              </li>
              {/* <li>
                <AiOutlineSearch style={{color: state? "white": null}}/>
              </li> */}
              {/* <li>
                <BsFillHandbagFill style={{color: state? "white": null}}/>
              </li> */}
              {/* <li>
                <AiOutlineHeart style={{color: state? "white": null}}/>
              </li> */}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
