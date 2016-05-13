import React, {PropTypes} from 'react';

export default class DropDownResultText extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <span placeholder="Select something"></span>
      <i title="dropdown-arrow"></i>
      </div>
    );
  }
}
