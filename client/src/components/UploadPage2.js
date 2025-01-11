// import { useState } from 'react';
// import './Fpage.css';
// import a from './profile.jpeg';
// import { useNavigate ,Link} from 'react-router-dom';

// function Firstpage() {
//   const [currentStep, setStep] = useState(2)
//   const navigate = useNavigate();
//   const handleButton=()=>{
//     navigate('/login');
//   }
//   return (
//     <>
//       <div className=''>
//         <div>
//         <Link to='/'><img className='back_btn'src="https://cdn-icons-png.flaticon.com/128/271/271220.png" alt=""/></Link>
//         <button className='login_button' onClick={handleButton}>Login</button>
//         </div>
//         <div className='progressbar'>
//           {[1, 2, 3].map((step) => {
//             return (
//               <div key={`step-${step}`}>
//                 {step < currentStep ? (
//                   <div className='inner'>
//                     <div className='completedSteps'><svg className="tick-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
//         <path fill="white" d="M9 19l-7-7 1.41-1.41L9 16.17l11.59-11.59L22 6l-13 13z"/>
//     </svg></div>
//                     <div className='linecomplete'></div>
//                   </div>
//                 ) : step === currentStep ? (
//                   <>
//                     <div className='currentSteps'>{step}</div>
//                   </>
//                 ) : (
//                   <div className='inner'>
//                     <div className='lineincomplete'></div>
//                     <div className='incompletedSteps'>{step}</div>
//                   </div>
//                 )}
//               </div>
//             )
//           })}
//         </div>
//         <img src={a} alt='profile' className='profile'></img>
//         <h3 className='context'>Great,
//           Please upload it for a quick start</h3>
//         <div className='info'>your resume is uploading...</div>
//       </div>
//     </>
//   )
// }

// export default Firstpage;

import React, { useState, useRef } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import profile from './profile.jpeg';

function UploadPage2() {
  const [selectedFile, setSelectedFile] = useState(null);

const handleBackClick = () => {
    window.history.back();
  };

  const steps = ["Step 1", "Step 2", "Step 3"];
  const activeStep = 1;

  return (
    <div style={styles.container}>
      <div style={styles.backButtonContainer}>
        <button style={styles.backButton} onClick={handleBackClick}>
          <span>&#8249;</span>
        </button>
      </div>
      <button style={styles.loginButton}>Login</button>
      <div style={styles.header}>
        <Stepper activeStep={activeStep} alternativeLabel style={styles.stepper}>
          {steps.map((label, index) => (
            <Step key={index} style={styles.step}>
              <StepLabel
                sx={{
                  "& .MuiStepIcon-root": {
                    color: index <= activeStep ? "#4CAF50" : "#ccc",
                    fontSize: "30px",
                    "&.Mui-active": { color: "#4CAF50" },
                    "&.Mui-completed": { color: "#4CAF50" },
                  },
                }}
              >
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div style={styles.content}>
        <div style={styles.avatarContainer}>
          <img
            src={profile}
            alt="User Avatar"
            style={styles.avatar}
          />
        </div>
        <div style={styles.up}>
          <h2 style={styles.heading}>Great. Please upload it for a quick start.</h2>
          <div style={styles.uploadBox}>
            <input
              type="file"
              id="fileUpload"
              style={styles.fileInput}
            />
            <label htmlFor="fileUpload" style={styles.fileLabel}>
              { "Your resume is uploading"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    padding: "20px",
    backgroundColor: "#ffffff",
    overflow: "hidden",
    position: "fixed",
    top: "0",
    left: "0",
  },
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
  loginButton: {
    position: "absolute",
    top: "20px",
    right: "50px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  header: {
    width: "100%",
    marginBottom: "30px",
    textAlign: "center",
  },
  stepper: {
    backgroundColor: "transparent",
    padding: "10px 0",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    position: "relative",
  },
  step: {
    flex: 1,
    position: "relative",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "400px",
  },
  avatarContainer: {
    marginTop: "30px",
    marginBottom: "10px",
    width: "200px",
    height: "200px",
    backgroundImage:
      'url("/images/bg2.png"), url("/images/bg1.png"), url("/images/bg3.png")',
    backgroundPosition: "top left, top right, bottom",
    backgroundSize: "100px 100px, 150px 115px, 125px 200px",
    backgroundRepeat: "no-repeat",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  up: {
    width: "60vw",
    maxWidth: "700px",
    margin: "4vh",
  },
  heading: {
    fontSize: "30px",
    color: "#333",
  },
  uploadBox: {
    backgroundColor: "#f5f6f7",
    borderRadius: "10px",
    padding: "20px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  fileInput: {
    display: "none",
  },
  fileLabel: {
    display: "block",
    fontSize: "18px",
    color: "gray",
    cursor: "pointer",
    marginBottom: "10px",
  },
};

export default UploadPage2;
