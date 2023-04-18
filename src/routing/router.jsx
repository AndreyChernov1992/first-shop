import {
    Routes,
    Route,
} from "react-router-dom";
import ProductsList from "../components/products";

function Routing() {
    return (
        <Routes>
          <Route exact path="/" element={<ProductsList />} />
        </Routes>
    )
  }

export default Routing