import api from "./api";
import { MenuItemI } from "../interfaces/MenuI";

export const fetchMenu = async (): Promise<MenuItemI[]> => {
  const menuList: MenuItemI[] = [
    { id: "0", icon: "food", name: "food", amount: 30 },
    { id: "1", icon: "glass martini", name: "drinks", amount: 7 }
  ];

  return menuList;
};
