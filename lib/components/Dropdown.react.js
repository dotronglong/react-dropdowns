import React, {PropTypes} from 'react';
import ResultText from './ResultText.react';
import SearchInput from './SearchInput.react';
import List from './List.react';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ResultText />
        <SearchInput />
        <List />
      </div>
    );
  }
}
