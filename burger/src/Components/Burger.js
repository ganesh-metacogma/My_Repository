import React from "react";
import { bubble as Menu } from "react-burger-menu";

class Burger extends React.Component {
  render() {
    return (
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>

        <a className="menu-item" href="/burgers">
          Burgers
        </a>

        <a className="menu-item" href="/pizzas">
          Pizzas
        </a>

        <a className="menu-item" href="/desserts">
          Desserts
        </a>
      </Menu>
    );
  }
}

export default Burger;
