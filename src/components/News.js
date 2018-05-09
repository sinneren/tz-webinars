import React from "react";
import PropTypes from "prop-types";

class News extends React.Component {
  render() {
    const errMsg = <div className="err">{this.props.error}</div>;
    return (
      <div className={"news-list"}>
        {this.props.error.length > 0 ? errMsg : ""}
        {this.props.data.length ? (
          this.props.data.map(item => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <article>{item.text}</article>
            </div>
          ))
        ) : (
          <div className="loading-spinner" />
        )}
      </div>
    );
  }
}

News.proptypes = {
  data: PropTypes.array.isRequired
};

export default News;
