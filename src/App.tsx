import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Product from "./components/Product";
import "@smastrom/react-rating/style.css";
import RelatedItem from "./components/RelatedItem";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Product />
      <RelatedItem />
      <Footer />
    </>
  );
}

export default App;
