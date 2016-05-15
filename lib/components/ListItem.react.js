import React, {PropTypes} from 'react';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li data-id={this.props.id}>{this.props.label}</li>
    );
  }
}
