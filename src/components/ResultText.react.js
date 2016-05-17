import React, {PropTypes} from 'react';

export default class ResultText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <span>{this.props.label}</span>
      <i title="dropdown-arrow"></i>
      </div>
    );
  }
}
