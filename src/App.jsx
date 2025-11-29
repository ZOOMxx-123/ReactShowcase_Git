import { useState } from "react";
import logo from "./assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [val1, setVal1] = useState(true);
  const val2 = "Bonjour 👋";

  const handleButton = () => {
    setVal1(!val1);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 ">
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "20px" }}>
        {/* Logo */}
        <div className="text-center mb-3">
          <img src={logo} alt="logo" style={{ width: "80px" }} />
        </div>

        {/* Title */}
        <h2 className="text-center fw-bold mb-3">React Showcase</h2>

        {/* Dynamic message */}
        <div className="text-center mb-3">
          <h3 className="text-primary" style={{ minHeight: "40px" }}>
            {val1 && (
              <span className="fade-in">{val2}</span>
            )}
          </h3>
        </div>

        {/* Button */}
        <div className="text-center">
          <button 
            onClick={handleButton} 
            className="btn btn-primary px-4 py-2 fw-bold"
            style={{ borderRadius: "10px" }}
          >
            {val1 ? "Cacher" : "Afficher"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
