import {Component} from "react";

export default class MyButton extends Component<{ count: any, onClick: any }> {
  render() {
    let {count, onClick} = this.props;
    return (
      <button onClick={onClick}>Clicked {count} times!</button>
    );
  }
}
