import React, { Component } from "react";
import "./tuduapp.css";

export default class tuduapp extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });

    console.log(this.state.input);
  };

  storeItems = event => {
      event.preventDefault();
      const {input} = this.state;


      this.setState({
           items : [...this.state.items, input],
           input : " "
      });
  };

  deleteItem=key=>{
    const allItems = this.state.items;

    allItems.splice(key, 1);

    this.setState({
        items : allItems
    })
  };

  render() {
    const { input,items } = this.state;
    console.log(items);
    return (
      <div className="tudu-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Tudu App</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter items..."
          />
        </form>
        <ul>
          {items.map((data,index) => (
              <li key={index}>
                  {data}<h6 onClick={()=> this.deleteItem(index)}>X</h6>

              </li>
          ))}
        </ul>
      </div>
    );
  }
}
