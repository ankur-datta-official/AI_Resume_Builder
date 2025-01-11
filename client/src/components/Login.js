import React,{useState} from 'react';
import "./Login.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';

const styles={
  backButtonContainer: {
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  backButton: {
    background: "none",
    border: "none",
    color: "#333",
    fontSize: "30px",
    cursor: "pointer",
  },
};

export default function Login() {
const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });
    const [errors, setErrors] = useState({
      name: "",
      email: "",
      password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState("");
    const [resetEmailError, setResetEmailError] = useState("");
  
    const toggleForm = () => {
      setIsLogin(!isLogin);
      setFormData({ name: "", email: "", password: "" });
      setErrors({ name: "", email: "", password: "" });
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = () => {
      alert(isLogin ? "Logged in successfully!" : "Signed up successfully!");
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const handleGoogleLogin = () => {
      alert("Google Login Triggered");
    };
  
    const handleLinkedInLogin = () => {
      alert("LinkedIn Login Triggered");
    };
  
    // const navigate = useNavigate();
    // const handleBackClick = () => {
    //   navigate('/');
    // };
  
  
    return (
      <>
      <Navbar/>
      <div className="app">
        <div className="form-container">
        {/* <div style={styles.backButtonContainer}>
        <button style={styles.backButton} onClick={handleBackClick}>
          <span>&#8249;</span>
        </button>
      </div> */}
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
  
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group password-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleInputChange}
              required
            />
            {formData.password && (
              <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            )}
          </div>
          <button type="button" onClick={handleSubmit}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
  
          <div className="social-login">
            <button className="google-login-btn" onClick={handleGoogleLogin}>
              Continue with Google
            </button>
            <button className="linkedin-login-btn" onClick={handleLinkedInLogin}>
              Continue with LinkedIn
            </button>
          </div>
  
          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={toggleForm} className="toggle-link">
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
      </>
    );
  
}


