import React from "react";
import PropTypes from "prop-types";

class News extends React.Component {
  render() {
    return (
      <div className={"news-list"}>
        {this.props.data.length
          ? this.props.data.map(item => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <article>{item.text}</article>
              </div>
            ))
          : "Новостей нет"}
      </div>
    );
  }
}

News.proptypes = {
  data: PropTypes.array.isRequired
};

export default News;
