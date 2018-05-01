import React from "react";
import LinkBtn from "./LinkBtn";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  user: state.session.user
});

class Menu extends React.Component {
  render() {
    const labelBtn = this.props.user != null ? "Выйти" : "Войти";
    return (
      <div className="top-menu">
        <LinkBtn to="/" label={"Главная"} />
        <LinkBtn to="/profile" label={"Профиль"} />
        <LinkBtn to="/news" label={"Новости"} />
        <LinkBtn to="/abra-kadabra" label={"404"} />
        <LinkBtn to="/login" label={labelBtn} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Menu);
