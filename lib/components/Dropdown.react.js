import React, {PropTypes} from 'react';
import List from 'List.react';
import ResultText from 'ResultText.react';
import SearchInput from 'SearchInput.react';

export default class Dropdown extends React.Component {
  constructor() {
    super();
  }

  render() {
    <div>
      <ResultText />
      <SearchInput />
      <List />
    </div>
  }
}