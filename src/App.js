import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFound from "./components/pages/customer/NotFound";
import Home from "./components/pages/customer/Home";
import Search from "./components/pages/customer/Search";
import Cart from "./components/pages/customer/Cart";
import Favorites from "./components/pages/customer/Favorites";
import LoginFormCustomer from "./components/pages/customer/LoginCustomer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/favorite" element={<Favorites />} />
        <Route exact path="/customer-login" element={<LoginFormCustomer />} />
        <Route path="/not-found" element={<NotFound />} />
        {/* Redirect all unknown routes to /not-found */}
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
