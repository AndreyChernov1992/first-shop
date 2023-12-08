import {
    Routes,
    Route,
} from "react-router-dom";
import ProductsList from "../components/products";

function Routing() {
    return (
        <Routes>
<<<<<<<< HEAD:src/routing/router.jsx
          <Route exact path="/" element={<ProductsList />} />
========
          <Route path="/" element={<ProductsList />} />
>>>>>>>> ts-hooks:src/routing/router.tsx
        </Routes>
    )
  }

export default Routing