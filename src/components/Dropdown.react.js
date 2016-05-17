import React, {PropTypes} from 'react';
import ResultText from './ResultText.react';
import SearchInput from './SearchInput.react';
import List from './List.react';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    label: "Select an item"
  }

  static propTypes = {
    label: React.PropTypes.string
  }

  render() {
    return (
      <div>
        <ResultText label={this.props.label}/>
        <SearchInput />
        <List />
      </div>
    );
  }
}