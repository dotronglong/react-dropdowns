import React, {PropTypes} from 'react';
import ListItem from './ListItem.react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <ListItem id="1" label="Testing"/>
      </ul>
    );
  }
}
