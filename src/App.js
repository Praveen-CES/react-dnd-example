import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import Target from './Target';

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'


class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
    ],
    itemObj : {},
    droppedItems : [],
    elementID : 0
    
  }
  
  }
   deleteItem(id) {
    console.log("deleteItems", id)
     this.setState({elementID : id})    
    console.log("elementID", this.state.elementID)
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      }
    })
  }

  showDroppedItems(id) {
    console.log("droppedItems", id)
 }

 checkData=(value) => {
   console.log('value', value);
   this.setState({ itemObj: value});
 }

  render() {
    return (
     
        <div className="App-intro">
          <div className="app-container">
            <div className="item-container">
              {this.state.items.map((item, index) => (
                
                <Item key={item.id} item={item} handleDrop={(id) => this.deleteItem(id)} />
              ))}
            </div>
              {/* {this.state.items.map((item, index) => ( */}
               
                  <Target  handleDrop = {this.checkData.bind(this)} dataValue={this.state.itemObj} />
                
                
                
                {/* ))} */}

          </div>
          
        </div>
      
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
