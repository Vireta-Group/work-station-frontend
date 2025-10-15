import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

// Assume this is the file we created in the previous step,
// where all icon paths are exported as an object.
import icons from "../icons/main.js";

import { useSidebar } from "../context/SidebarContext";
// import SidebarWidget from "./SidebarWidget";
import viretaLogo from "../assets/logo/vireta-logo.png";
import viretaLogoDark from "../assets/logo/vireta-logo-dark.png";
import viretaLogoSmall from "../assets/logo/vireta-small-logo.png";
import viretaLogoSmallDark from "../assets/logo/vireta-small-logo-dark.png";
import { useSelector } from "react-redux";

const hr = [
  {
    icon: <img src={icons.UserCircleIcon} alt="User Profile Icon" />,
    name: "Employee Status",
    path: "/employeeStatus",
  },
  {
    icon: <img src={icons.UserCircleIcon} alt="Employee Attendence" />,
    name: "Employee attendence",
    path: "/employeeAttendence",
  },

  {
    icon: <img src={icons.GridIcon} alt="Add New Employee" />,
    name: "Add Employee",
    path: "/add-employee",
  },
  {
    icon: <img src={icons.GridIcon} alt="Task History" />,
    name: "Task History",
    path: "/taskhistory",
  },
];

const onlyHr = [
  {
    icon: <img src={icons.GridIcon} alt="Dashboard Icon" />,
    name: "Dashboard",
    path: "/",
  },
];

const teamLeader = [
  {
    icon: <img src={icons.GridIcon} alt="Dashboard Icon" />,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: <img src={icons.UserCircleIcon} alt="work distrubution" />,
    name: "Work Distrubition",
    path: "/workDistribution",
  },
];

const emp = [
  {
    icon: <img src={icons.GridIcon} alt="Dashboard Icon" />,
    name: "Dashboard",
    path: "/",
  },
];

const submiteWork = [
  {
    icon: <img src={icons.GridIcon} alt="Submit Icon" />,
    name: "Work Submission",
    path: "/workSubmission",
  },
];

const admin = [
  {
    icon: <img src={icons.GridIcon} alt="Dashboard Icon" />,
    name: "Dashbord",
    path: "/",
  },
  {
    icon: <img src={icons.GridIcon} alt="Edit Employee" />,
    name: "Employees",
    subItems: [
      { name: "Edit Employee", path: "/editemployee", pro: false },
      { name: "Accept Employee", path: "/accept-employee", pro: false },
      { name: "Employees List", path: "/employeeList", pro: false },
    ],
  },

  {
    icon: <img src={icons.BoxCubeIcon} alt="UI Elements Icon" />,
    name: "Income Expenses",
    subItems: [
      { name: "Add Income", path: "/add-expenses", pro: false },
      { name: "Add Expenses", path: "/add-income", pro: false },
      { name: "Report", path: "/report", pro: false },
    ],
  },
];

const othersItems = [
  {
    icon: <img src={icons.UserCircleIcon} alt="User Profile Icon" />,
    name: "User Profile",
    path: "/profile",
  },
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  const [navItems, setNavItems] = useState([]);
  const user = useSelector((data) => data.user).user;
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [subMenuHeight, setSubMenuHeight] = useState({});
  const subMenuRefs = useRef({});

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    if (user?.department === "management") {
      setNavItems([...admin, ...hr, ...submiteWork]);
    } else if (user?.department === "hr") {
      setNavItems([...hr, ...onlyHr, ...submiteWork]);
    } else if (user?.department === "frontend") {
      if (user?.role === "teamleader")
        setNavItems([...teamLeader, ...submiteWork]);
    } else {
      setNavItems([...emp, ...submiteWork]);
    }
  }, [user]);

  useEffect(() => {
    let submenuMatched = false;

    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType,
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [location, isActive, navItems]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index, menuType) => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  const renderMenuItems = (items, menuType) => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={`menu-item-icon-size ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="menu-item-text">{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <img
                  src={icons.ChevronDownIcon}
                  alt="Chevron down"
                  className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`menu-item-icon-size ${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img
                className="dark:hidden"
                src={viretaLogo}
                alt="Logo"
                width={150}
                height={40}
              />
              <img
                className="hidden dark:block"
                src={viretaLogoDark}
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <>
              <img src={viretaLogoSmall} alt="Logo" width={32} height={32} />
            </>
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <img
                    src={icons.HorizontaLDots}
                    alt="Menu Dots"
                    className="size-6"
                  />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
            <div className="">
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Others"
                ) : (
                  <img src={icons.HorizontaLDots} alt="Other Dots" />
                )}
              </h2>
              {renderMenuItems(othersItems, "other")}
            </div>
          </div>
        </nav>
        {/* {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null} */}
      </div>
    </aside>
  );
};

export default AppSidebar;
