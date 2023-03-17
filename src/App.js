import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cards from "./routes/Cards";
import Contact from "./routes/Contact";
import Promotions from "./routes/Promotions"

function App() {
  return (
 <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/offer' element={<Promotions />} />
  <Route path='/order' element={<Cards />} />
  <Route path='/contact' element={<Contact />} />
 </Routes>
  );
}

export default App;
