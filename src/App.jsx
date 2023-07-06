import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Shop from "./Shop.jsx"
import Blog from './Pages/Blog'
import About from './Pages/About'
import Contact from './Pages/Contact'
// import Element from "./Element.jsx"
import Header from "./Header.jsx"
import But from './Pages/But'
import Detailed from "./Pages/Detailed"
import Cpage from "./Pages/Cpage"

const App = () => {
  return(
   <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cpage" element={<Cpage/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/element" element={<Element/>}/>
        <Route path="/element" element={<But/>}/>
        <Route path="/detailed/:id" element={<Detailed/>}/>
        {/* <Route path="/detailed/:id" element={<Detailed/>}/> */}
        {/* <Route/> */}
      </Routes>
   </Router>
  )
}

export default App