import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./pages/home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"
import { useState } from "react"
import Order from "./pages/Order"
import FilterData from "./pages/FilterData"
import ProductDetail from "./pages/ProductDetail"


function App() {
  const [order, setOrder] = useState(null)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkOut" element={<CheckOut setOrder={setOrder} />}></Route>
        <Route path="/order-confirmation" element={<Order order={order} />}></Route>
        <Route path="/filterData" element={<FilterData />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
      <Footer />
    </>

  )
}

export default App
