import React, {PropTypes} from 'react';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="text" placeholder="Type to search..."/>
    );
  }
}
