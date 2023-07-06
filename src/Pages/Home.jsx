import React, { useState } from "react"
import '../App.css'
import { useEffect } from "react"
import {AiOutlineSearch, AiOutlineHeart} from 'react-icons/ai'
import {BsFillHandbagFill} from 'react-icons/bs'
import {FaGreaterThan, FaLessThan} from 'react-icons/fa'
import axios from 'axios'
import Cart from "./cart.jsx"
import Product from "../Product"
import { Link } from "react-router-dom"
import { ThemeContext } from "./ContextApi/Context"
import { useContext } from "react"
// import Theme from "./Theme/Theme"
// import Header from "./Header"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

 


const Home =  () => {
  const { state } = useContext(ThemeContext);
  // console.log('From Home', carts)

    const [change, setChange] = useState(0)
    const [apidata, setApidata] = useState([])

    

    const url = 'https://fakestoreapi.com/products'

    const getallData = () => {
      axios.get(url)
      .then(res => setApidata(res.data))
    }

    console.log(apidata);

    useEffect(() => {
      getallData()
    }, [])

    const newdata = apidata.slice(0,3)
    console.log(newdata);

    const addNum = () => {
      setChange(change +1)
    }

    const Subnum = () => {
      if(change <= 0){
        setChange(0)
      }else{
        setChange(change -1)
      }
    }

    console.log(change);

  return(
  
      <>
      <main>
    <div className="wrap" style={{backgroundColor: state? "Black": null}}>

      {/* <Header/> */}

      <div className="Homesect" style={{backgroundColor: state? "Black": null}}>
        <div className="Homesectwrap">
          <div className="HomesectLeft" style={{backgroundColor: state? "Black": null}}>
            <h1 style={{color: state? "white": null}}>{newdata[change % newdata.length]?.title}</h1>
            <span style={{color: state? "white": null}}>{newdata[change % newdata.length]?.description}</span>
            <button className="Homesectbtn" style={{backgroundColor: state? "#fca311": null}}>Shop Now</button>
          </div>

          <div className="HomesectRight"><img src={newdata[change % newdata.length]?.image} alt="" /></div>

          <div className="Move">
            <div className="MoveCove" onClick={Subnum} style={{color: state? "white": null, backgroundColor: state? "black": null}}><FaLessThan/></div>
            <div className="MoveCove" onClick={addNum} style={{color: state? "white": null, backgroundColor: state? "black": null}}><FaGreaterThan/></div>
          </div>
        </div>
      </div>

      <div className="Topcart">
        <Cart/>
      </div>

      <div className="Product">
        <Product/>
      </div>

    </div>
      </main>
    </>
  )
}

export default Home