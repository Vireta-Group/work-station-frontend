import { NavLink } from "react-router";
import { Home, Settings, Info } from "@mui/icons-material";

const menuItems = [
  { text: "Home", icon: <Home />, path: "/" },
  { text: "Settings", icon: <Settings />, path: "/settings" },
  { text: "About", icon: <Info />, path: "/about" },
];

const Sidebar = () => {
  return (
    <div className="w-[220px] h-screen bg-[#21282e] shadow-md p-4">
      <h2 className="text-xl text-gray-100 font-semibold mb-6 text-shadow-gray-200">
        Dashboard
      </h2>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 text-md font-medium ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-200 hover:text-blue-500"
                }`
              }
            >
              <span className="text-blue-500">{item.icon}</span>
              <span>{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
