import api from "./api";
import { MenuItemI } from "../interfaces/MenuI";

export const fetchMenu = async (): Promise<MenuItemI[]> => {
  const menuList: MenuItemI[] = [
    { id: "0", icon: "food", name: "Drinki", products: ["1", "2", "3"] },
    {
      id: "1",
      icon: "glass martini",
      name: "Jędzenie",
      products: ["1", "2", "3", "3", "3", "3"]
    },
    {
      id: "2",
      icon: "glass martini",
      name: "Słodkie",
      products: ["1", "2", "3", "3", "3", "3"]
    },
    {
      id: "3",
      icon: "glass martini",
      name: "Alkohole",
      products: ["1", "2", "3", "3", "3", "3", "3", "3", "3"]
    }
  ];

  return menuList;
};
