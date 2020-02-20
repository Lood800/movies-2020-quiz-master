import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Score extends Component {
  render() {
    return (
      <div>
        <p>Score: {this.props.score}</p>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { score: state.score };
}

export default connect(mapStateToProps)(Score);
