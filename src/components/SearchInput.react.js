import React from 'react';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    class: "form-control"
  }

  static propTypes = {
    class: React.PropTypes.string
  }

  render() {
    return (
      <input type="text" class={this.props.class} {...this.props} />
    );
  }
}
