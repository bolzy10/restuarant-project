import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Menu() {
  return (
    
    <div className="menu">
      <Navbar/>
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default Menu;
