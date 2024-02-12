import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {

  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard productId="nswdjksd" name="Mackbook" price={7372} stock={78} handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/51KhexN7YkL._AC_SL1200_.jpg"/>
      </main>
    </div>
  )
}

export default Home;