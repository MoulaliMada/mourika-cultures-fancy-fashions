import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFound from "./components/pages/customer/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/not-found" element={<NotFound />} />
        {/* Redirect all unknown routes to /not-found */}
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
