import React from "react";
import axios from "axios";
// import PropTypes from 'prop-types'
export default class Profile extends React.Component {
  async getData(id) {
    //В хелпер вынести не получилось, не выходила ассинхронность
    const URL = "https://mysterious-reef-29460.herokuapp.com/api/v1/";
    const res = await axios.get(URL + "user-info/" + id);

    return res;
  }
  constructor(...props) {
    super(...props);
    this.state = {
      user: {
        load: false,
        city: "%city%",
        name: "%username%",
        languages: [],
        links: [],
        err: false
      }
    };
  }
  componentDidMount() {
    if (!this.state.user.load) {
      this.getData(this.props.user.id)
        .then(resp => {
          if (resp.status === 200 && resp.data.status === "ok") {
            // Знаю, не комильфо, но т.к. в моке нету парама имени, а грузить его из другого места тоже не хорошо, то решил "повбивать" значения, чтоб захардкодить имя.
            // Тем более нужно изменить user.load
            this.setState(prevState => ({
              user: {
                ...prevState.user,
                city: resp.data.data.city,
                name: "Admin",
                languages: resp.data.data.languages,
                links: resp.data.data.social,
                load: true
              }
            }));
          } else {
            this.setState(prevState => ({
              user: {
                ...prevState.user,
                load: true,
                err: true,
                errMsg: resp.data.message
              }
            }));
          }
        })
        .catch(err => {
          // handle err
        });
    }
  }
  render() {
    return (
      <div>
        <h2>Профиль</h2>
        <p>Имя: {this.state.user.name}</p>
        <p>Город: {this.state.user.city}</p>
        <p>Знание языков: </p>
        <ul>
          {this.state.user.languages.length > 0
            ? this.state.user.languages.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            : ""}
        </ul>
        <p>Ссылки: </p>
        <ul>
          {this.state.user.links.length > 0
            ? this.state.user.links.map((item, index) => (
                <li key={index}>
                  <i className={"fab fa-" + item.label} />
                  <a href={item.link}>{item.label}</a>
                </li>
              ))
            : ""}
        </ul>
        {this.state.user.err ? <p>Ошибка: {this.state.user.errMsg}</p> : ""}
      </div>
    );
  }
}

// С ID не работает, причину не понял
// Profile.proptypes = {
//   user: PropTypes.shape({
//     id: PropTypes.integer.isRequired,
//   }).isRequired,
// }
