import React, {PropTypes} from 'react';

export default class DdList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        <DdListItem id="1" label="Testing"/>
      </ul>
    );
  }
}
