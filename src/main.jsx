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

// fetch("https://work.vireta.com/api/work/addProfile", {
//   method: "POST",
//   headers: {
//     "Content-Type": null,
//     Authorization: `Bearer ${Cookies.get("token")}`,
//   },
//   body: JSON.stringify({
//     name: "string",
//     father: "string",
//     mother: "string",
//     full_address: "string",
//     nid: "string",
//     mobile: "string",
//     email: "string",
//     pic: "string",
//     last_edu: "string",
//     bkash: "string",
//     dob: "2019-08-24",
//     bank_account: "string",
//     bank_routing: "string",
//     bank_name: "string",
//     bank_branch: "string",
//     username: "string",
//     password: "string",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     if (data.error) {
//       console.error(data.error);
//       return;
//     }
//     console.log(data);
//   });

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
