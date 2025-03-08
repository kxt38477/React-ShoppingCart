import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./pages/home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"




function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkOut" element={<CheckOut />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
