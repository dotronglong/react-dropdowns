import React, {PropTypes} from 'react';
import ResultText from './ResultText.react';
import SearchInput from './SearchInput.react';
import List from './List.react';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    resultText: {
      label: "Select an item"
    },
    searchInput: {
      class: ""
    }
  }

  static propTypes = {
    resultInput: React.PropTypes.object
  }

  render() {
    return (
      <div>
        <ResultText {...this.props.resultText}/>
        <SearchInput />
        <List />
      </div>
    );
  }
}