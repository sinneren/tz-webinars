import React from "react";
import { connect } from "react-redux";
import { loadNews } from "../actions/NewsActions";
import News from "../components/News";

class NewsContainer extends React.Component {
  getData() {
    this.props.loadNews();
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    return <News data={this.props.data.data} />;
  }
}

const mapStateToProps = state => ({
  data: state.news
});
const mapDispatchToProps = dispatch => ({
  loadNews: () => dispatch(loadNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
