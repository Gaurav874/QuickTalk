// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
// import { Link } from "react-router-dom";
// import AuthImagePattern from "../components/AuthImagePattern.jsx";
// import toast from "react-hot-toast";

// // CSS file wahi use kar sakte ho ya login ki alag bana lo
// import "./LoginPage.css"; 

// const LoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const { login, isLoggingIn } = useAuthStore();

//   // Login Validation logic
//   const validateForm = () => {
//     if (!formData.email.trim()) {
//       toast.error("Email is required");
//       return false;
//     }
//     if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       toast.error("Invalid email format");
//       return false;
//     }
//     if (!formData.password) {
//       toast.error("Password is required");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const success = validateForm();
//     if (success === true) login(formData);
//   };

//   return (
//     <div className="login-container"> {/* Same class as login for consistency */}
      
//       {/* LEFT SIDE */}
//       <div className="left-side">
//         <div className="form-wrapper">
          
//           {/* LOGO SECTION */}
//           <div className="logo-section">
//             <div className="logo-box">
//               <MessageSquare size={24} />
//             </div>
//             <h1>Welcome Back</h1>
//             <p className="subtitle">Sign in to your account</p>
//           </div>

//           {/* FORM */}
//           <form onSubmit={handleSubmit} className="login-form">
            
//             {/* EMAIL */}
//             <div className="input-group">
//               <label>Email</label>
//               <div className="relative-container">
//                 <Mail size={20} className="field-icon" />
//                 <input
//                   type="email"
//                   className="input-bordered"
//                   placeholder="you@example.com"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 />
//               </div>
//             </div>

//             {/* PASSWORD */}
//             <div className="input-group">
//               <label>Password</label>
//               <div className="relative-container">
//                 <Lock size={20} className="field-icon" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="input-bordered"
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 />
//                 <button
//                   type="button"
//                   className="eye-icon-btn"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>

//             {/* SUBMIT BUTTON */}
//             <button type="submit" className="login-btn" disabled={isLoggingIn}>
//               {isLoggingIn ? (
//                 <div className="loader-box">
//                   <Loader2 className="animate-spin" size={20} />
//                   <span>Loading...</span>
//                 </div>
//               ) : (
//                 "Sign In"
//               )}
//             </button>
//           </form>

//           {/* FOOTER */}
//           <div className="footer-text">
//             <p>
//               Don&apos;t have an account?{" "}
//               <Link to="/signup" className="orange-link">
//                 Create account
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="right-side">
//         <AuthImagePattern
//           title="Welcome back!"
//           subtitle="Sign in to continue your conversations and catch up with your messages."
//         />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern.jsx";
import toast from "react-hot-toast";

// CSS file wahi use kar sakte ho ya login ki alag bana lo
import "./LoginPage.css"; 

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  // Login Validation logic
  const validateForm = () => {
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!formData.password) {
      toast.error("Password is required");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) login(formData);
  };

  // ✅ One-Click Demo Login ka logic (Bina kisi extra state change ke)
  const handleDemoLogin = () => {
    const demoCredentials = {
      email: "z@gmail.com",
      password: "zzzzzz",
    };
    setFormData(demoCredentials);
    login(demoCredentials);
  };

  return (
    <div className="login-container"> {/* Same class as login for consistency */}
      
      {/* LEFT SIDE */}
      <div className="left-side">
        <div className="form-wrapper">
          
          {/* LOGO SECTION */}
          <div className="logo-section">
            <div className="logo-box">
              <MessageSquare size={24} />
            </div>
            <h1>Welcome Back</h1>
            <p className="subtitle">Sign in to your account</p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="login-form">
            
            {/* EMAIL */}
            <div className="input-group">
              <label>Email</label>
              <div className="relative-container">
                <Mail size={20} className="field-icon" />
                <input
                  type="email"
                  className="input-bordered"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="input-group">
              <label>Password</label>
              <div className="relative-container">
                <Lock size={20} className="field-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="input-bordered"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="eye-icon-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* 🌟 DEMO ACCOUNT CREDENTIALS BOX (Password ke thik niche aur Sign In button ke upar) */}
            <div style={{
              marginTop: "5px",
              padding: "12px",
              backgroundColor: "rgba(99, 102, 241, 0.08)",
              border: "1px dashed #6366f1",
              borderRadius: "8px",
              fontSize: "13px"
            }}>
              <p style={{ margin: "0 0 4px 0", fontWeight: "bold", color: "#6366f1" }}>
                ✨ Test Account for Recruiters:
              </p>
              <p style={{ margin: "0", color: "#a1a1aa", fontSize: "12px", lineHeight: "1.5" }}>
                <strong>Email:</strong> z@gmail.com <br />
                <strong>Password:</strong> zzzzzz
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="login-btn" disabled={isLoggingIn} style={{ marginTop: "15px" }}>
              {isLoggingIn ? (
                <div className="loader-box">
                  <Loader2 className="animate-spin" size={20} />
                  <span>Loading...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>

            {/* ⚡ ONE-CLICK QUICK DEMO LOGIN BUTTON */}
            <button
              type="button"
              onClick={handleDemoLogin}
              disabled={isLoggingIn}
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "12px",
                backgroundColor: "#10b981",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.2s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#059669"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#10b981"}
            >
              ⚡ Quick Demo Login
            </button>
          </form>

          {/* FOOTER */}
          <div className="footer-text">
            <p>
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="orange-link">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-side">
        <AuthImagePattern
          title="Welcome back!"
          subtitle="Sign in to continue your conversations and catch up with your messages."
        />
      </div>
    </div>
  );
};

export default LoginPage;