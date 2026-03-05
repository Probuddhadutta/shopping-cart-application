import { useNavigate } from "react-router-dom";
import "./App.css";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>
        Welcome to Paradise Nursery — your one-stop destination 
        for aromatic, medicinal and decorative indoor plants.
      </p>
      <button onClick={() => navigate("/products")}>
        Get Started
      </button>
    </div>
  );
}

export default AboutUs;
