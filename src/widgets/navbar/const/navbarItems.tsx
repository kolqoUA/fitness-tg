import {
  HouseIcon,
  ChartLineIcon,
  UserIcon,
  GearIcon,
} from "@phosphor-icons/react";
import { type ReactNode } from "react";

type NavbarItem = {
  path: string;
  name: string;
  icon: ReactNode;
};

const navbarItems: (currentPath: string) => NavbarItem[] = () => [
  {
    path: "/",
    name: "Home",
    icon: <HouseIcon size={24} weight="fill" />,
  },
  {
    path: "/statistics",
    name: "Statistics",
    icon: <ChartLineIcon size={24} weight="fill" />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <UserIcon size={24} weight="fill" />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <GearIcon size={24} weight="fill" />,
  },
];

export default navbarItems;
