// import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const CircularProgress = ({ value, label }) => {
//   return (
//     <div style={{ position: "relative", width: "100px", height: "100px" }}>
//       <CircularProgressbar
//         value={value}
//         styles={buildStyles({
            
//           pathColor: value >= 50 ? "#7195f4" : "red",
//           textColor: value >= 50 ? "green" : "red",
//         })}
//       />
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           textAlign: "center",
//         }}
//       >
//         <div
//           style={{ fontSize: "16px", fontWeight: "bold" }}
//         >{`${value}%`}</div>
//         <div style={{ fontSize: "12px",color:"gray" }}>{label}</div>
//       </div>
//     </div>
//   );
// };

// export default CircularProgress;

import React from "react";
import "./CircularProgressBar.css";

const CircularProgressBar = ({ size, strokeWidth, percentage, color, bgColor }) => {
  // Calculate the circumference of the circle
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <div
      className="circular-progress-bar"
      style={{
        width: size,
        height: size,
        borderWidth: strokeWidth,
        borderColor: bgColor,
      }}
    >
      <div
        className="circular-progress-bar-inner"
        style={{
          width: size,
          height: size,
          borderWidth: strokeWidth,
          borderColor: color,
          clipPath: `inset(0px 0px 0px 0px)`,
          transform: `rotate(${(percentage / 100) * 180}deg)`,
        }}
      />
      <div
        className="circular-progress-bar-inner-right"
        style={{
          width: size,
          height: size,
          borderWidth: strokeWidth,
          borderColor: color,
          clipPath: `inset(0px 0px 0px 0px)`,
          transform: `rotate(${Math.min((percentage / 100) * 180, 180)}deg)`,
        }}
      />
      <div className="circular-progress-bar-inner-left" />
      <div className="circular-progress-bar-text">{`${percentage}%`}</div>
    </div>
  );
};

export default CircularProgressBar;

