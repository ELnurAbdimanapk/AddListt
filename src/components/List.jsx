import { Component } from "react";

class List extends Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.items.map((el) => (
            <li style={{listStyle:"none"}} key ={el.id} >{el}</li>
          )

          )}
        </ul>
      </div>
    )
  }
}
export default List