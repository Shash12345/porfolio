import { Component } from 'react';

class ArrayNodeComponent extends Component {

  // other code ...
  // like your initialisation of your state
  // and other functions

  addEmptyItem() {
    const { values } = this.state;
    this.setState({
      values: [...values, ""]
    });
  }

  render() {
    return (
      <form id="test">
        {
          /* this is your values map routine, shortened */
          this.props.values.map(function(v, i) { /*...*/ })
        }
        <button onClick={() => this.addEmptyItem()}>Add</button>
      </form>
    );
  }

}