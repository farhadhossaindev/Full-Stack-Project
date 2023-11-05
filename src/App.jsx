import {  Route, Routes,} from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Productdetailes from "./Pages/Productdetailes";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/home" element={< Home />} />
        <Route path="/shop" element={< Shop />} />
        <Route path="/productinfo/:id" element={< Productdetailes />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="*" element={< NotFound />} />

      </Routes>
    </div>
  )
}

export default App