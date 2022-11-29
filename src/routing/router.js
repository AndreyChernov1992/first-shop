import {
    Routes,
    Route,
} from "react-router-dom";
import Products from "../components/products";

function Routing() {
    return (
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
    )
  }

export default Routing