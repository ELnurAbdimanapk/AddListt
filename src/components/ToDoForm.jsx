import React, { Component } from "react";
import List from "./List";

import './ToDoForm.css'

// const ToDoForm = ({addList}) => {
//     const [list,setList] =useState('')

//     const handleChange = (e) => {
//         setList(e.target.value)

//     }
//    const  submitHandler = (e) => {
//         e.preventDefault()
//         addList(list)
//         setList("")

//     }
//   return (
//     <form onSubmit={submitHandler}>
//         <input type='text' value = {list} onChange={handleChange}/>
//             <button>Add</button>

//     </form>
//   )
// }

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      term: "",
      items: [],
    };
  }
  handleChange =(e) => {
    this.setState({
        term:e.target.value
    });
  }
  submitHandler= (e) => {
    e.preventDefault ()
    this.setState({
        term:"",
        items:[...this.state.items,this.state.term]
    })
    console.log(this.state);
  }

  render() {
    return (
        <div >
      <form onSubmit={this.submitHandler.bind(this)}>
        <input
          type="text"
          value={this.state.term}
          placeholder="enter"
          onChange={this.handleChange.bind(this)}
        />
        <button>Add Item</button>
      </form>
      <List items = {this.state.items}/>
      </div>
    );
  }
}
