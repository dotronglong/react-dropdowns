import React, {PropTypes} from 'react';
import List from 'List.react';
import ResultText from 'ResultText.react';
import SearchInput from 'SearchInput.react';

export default class DdContainer extends React.Component {
  constructor() {
    super();
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
