import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./component/Home";
import ProductAdd from "./component/ProductAdd";
import Products from "./component/Products";
import About from "./component/About";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<ProductAdd />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;