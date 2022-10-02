import "./App.scss";
import { BrowserRouter as Router1, Router2, Router3 } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Product from "./Components/Products/Products";
// import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router1>
        <Header />
        <Router2>
          <Router3 path="/" element={<Home />} />
        </Router2>
      </Router1>
      <Product />

      <Footer />
    </>
  );
}

export default App;
