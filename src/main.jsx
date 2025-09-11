import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";
// import Cookies from "js-cookie";

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

// axios
//   .post(
//     "https://work.vireta.com/api/work/change_password",
//     {
//       old_password: "string",
//       new_password: "string",
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${Cookies.get("token")}`,
//         "Content-Type": null,
//         Origin: "https://work.vireta.com",
//       },
//     }
//   )
//   .then((response) => {
//     const data = response.data;
//     if (data.error) {
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
