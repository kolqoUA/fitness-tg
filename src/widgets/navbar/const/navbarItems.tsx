import { HomeIcon, StatisticsIcon, ProfileIcon, SettingsIcon } from "../assets";
import { type ReactNode } from "react";

type NavbarItem = {
  path: string;
  name: string;
  icon: ReactNode;
};

const navbarItems: (currentPath: string) => NavbarItem[] = (currentPath: string) => [
  {
    path: "/",
    name: "Home",
    icon: <HomeIcon isChosen={currentPath === "/"} />,
  },
  {
    path: "/statistics",
    name: "Statistics",
    icon: <StatisticsIcon isChosen={currentPath === "/statistics"} />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <ProfileIcon isChosen={currentPath === "/profile"} />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <SettingsIcon isChosen={currentPath === "/settings"} />,
  },
];

export default navbarItems;