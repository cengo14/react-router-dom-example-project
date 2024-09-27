import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Undefined from "./pages/Undefined";
import Category from "./pages/Category";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/details/:id" element={<Detail />} />
          <Route path="categories" element={<Category />}>
            <Route path="hikaye" element={<h1>Hikaye</h1>} />
            <Route path="roman" element={<h1>Roman</h1>} />
          </Route>
          <Route path="*" element={<Undefined />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
