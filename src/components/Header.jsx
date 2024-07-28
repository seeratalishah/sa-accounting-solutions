import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  SquaresPlusIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import logo from "../assets/Accountingg.png";
import { NavLink, useNavigate } from "react-router-dom";
import { primaryButton } from "../utilities/cssHelper";

const navListMenuItems = [
  {
    title: "Cloud Bookkeeping",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    link: "/cloud-bookkeeping",
  },
  {
    title: "Payroll Services",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    link: "/payroll-services",
  },
  {
    title: "Corporate Returns",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    link: "/corporate-returns",
  },
  {
    title: "CFO Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
    link: "/CFO-services",
  },
  {
    title: "Personal Returns",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
    link: "/personal-returns",
  },
];

function NavListMenu({ setActiveItem }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    navigate("/solutions");
    setActiveItem("solutions");
    setIsMobileMenuOpen(false);
  };

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <NavLink to={link} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold font-headingFont"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500 font-paraFont"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </NavLink>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-medium font-paraFont"
            ref={menuRef}
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 text-xl"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={handleMenuClick}
              onMouseEnter={() => setIsMenuOpen(true)}
            >
              Solutions
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-4 w-4 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-4 w-4 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className="hidden max-w-screen-xl rounded-xl lg:block"
          onMouseEnter={() => setIsMenuOpen(true)}
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ activeItem, setActiveItem }) {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="div"
        variant="small"
        color="blue-gray"
        className="font-medium font-paraFont"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl ">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive || activeItem === "about"
                ? "text-blue-600"
                : "text-gray-900"
            }
            onClick={() => setActiveItem("about")}
          >
            About
          </NavLink>
        </ListItem>
      </Typography>
      <Typography
        as="div"
        variant="small"
        color="blue-gray"
        className="font-medium font-paraFont"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">
          <NavLink
            to="/our-approach"
            className={({ isActive }) =>
              isActive || activeItem === "our-approach"
                ? "text-blue-600"
                : "text-gray-900"
            }
            onClick={() => setActiveItem("our-approach")}
          >
            Our Approach
          </NavLink>
        </ListItem>
      </Typography>
      <NavListMenu setActiveItem={setActiveItem} />
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="w-full max-w-full px-0 border-none rounded-none shadow-b-sm fixed top-0 bg-white z-10 px-8">
      <div className="w-full max-w-[1300px] mx-auto flex items-center justify-between">
        <NavLink to="/">
          <img src={logo} alt="logo" className="h-[70px]" />
        </NavLink>
        <div className="hidden lg:block">
          <NavList activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button
            size="md"
            className={primaryButton}
            onClick={() => {
              navigate("/contact");
              setActiveItem("contact");
            }}
          >
            Contact
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList activeItem={activeItem} setActiveItem={setActiveItem} />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button
            size="md"
            fullWidth
            className="bg-blue-600 text-sm font-paraFont"
            onClick={() => {
              navigate("/contact");
              setActiveItem("contact");
            }}
          >
            Contact
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
