import React from "react";
import LinkBtn from "./LinkBtn";

export default class Menu extends React.Component {
  render() {
    return (
      <div className="top-menu">
        <LinkBtn to="/" label={"Главная"} />
        <LinkBtn to="/profile" label={"Профиль"} />
        <LinkBtn to="/news" label={"Новости"} />
        <LinkBtn to="/abra-kadabra" label={"404"} />
        <LinkBtn to="/login" label={"Логин"} />
      </div>
    );
  }
}
