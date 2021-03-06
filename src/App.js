import React, { Component } from 'react';
import TodoList from './comphonent/TodoList';
import TodoInput from './comphonent/TodoInput';
import "bootstrap/dist/css/bootstrap.min.css";
import {v1 as uuid} from "uuid";

class App extends Component {
  state = {
    items:[],
    id:uuid(),
    item:'',
    editItems:false
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
   e.preventDefault();
  const newItem = {
    id:this.state.id,
    title:this.state.item
  }
  const updatedItem = [...this.state.items, newItem]
  this.setState({
    items:updatedItem,
    item:'',
    id:uuid(),
    editItems:false
  })
  }

  clearList = () => {
   this.setState({
     items:[]
   })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => 
      item.id != id)
     this.setState({
       items:filteredItems
     }) 
  }

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => 
      item.id != id)
      
    const selectedItems = this.state.items.find(item => item.id == id);
    console.log(selectedItems)
      this.setState({
        items:filteredItems,
        item:selectedItems.title,
        editItems:true,
        id:id
      }) 
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo input</h3>
        
            <TodoInput 
            item={this.state.item} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
            editItems={this.state.editItems}/>

            <TodoList 
            items={this.state.items} 
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}/>
         </div>
        </div>
      </div>
    );
  }
}

export default App;