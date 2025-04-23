import { useNavigate } from "react-router-dom";
import "./index.css";

const NotFound = () => {
  const navigate = useNavigate();
  const clickGoBack = () => {
    navigate("/");
  };
  return (
    <div className="not_found_container">
      <img
        src="https://res.cloudinary.com/dssaftaaa/image/upload/v1745218216/page_not_found_mkifkj.png"
        alt="not found"
        className="not-found-img"
      />
      <h1>Page Not Found</h1>
      <p>
        we are sorry, the page you requested could not be found,Please go back
        to the homepage.
      </p>
      <button onClick={clickGoBack}>Go Back to Home</button>
    </div>
  );
};

export default NotFound;
