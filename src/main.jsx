import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";

// console.log(Cookies.get("token"));

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   </StrictMode>
// );

// import axios from "axios";
// import Cookies from "js-cookie";

// fetch("https://work.viretadev.com/api/work/myTeamWordDistribute", {
//   method: "POST",
//   headers: {
//     Authorization: `Bearer ${Cookies.get("token")}`,
//     "Content-Type": null,
//   },
//   // body: JSON.stringify({
//   //   work_id: 13,
//   //   work_title: "hi world",
//   //   work_discription: "hi world",
//   //   work_expire_date: "2024-12-31",
//   // }),
// })
//   .then(async (res) => {
//     const data = await res.json().catch(() => null);
//     if (!res.ok) {
//       console.error("Server error:", data || res.statusText);
//       return;
//     }
//     if (data?.error) {
//       console.error(data.error);
//       return;
//     }
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Request failed:", error);
//   });

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
