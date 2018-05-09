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
    console.log(this.props.data);
    return (
      <News data={this.props.data.data} error={this.props.data.errorMsg} />
    );
  }
}

const mapStateToProps = state => ({
  data: state.news
});
const mapDispatchToProps = dispatch => ({
  loadNews: () => dispatch(loadNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
