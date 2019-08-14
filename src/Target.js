import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const itemTarget={
   
    drop(props, monitor, component){
     
       console.log("getItem",monitor.getItem())
       let a = monitor.getItem()
       
   
      return props.handleDrop(monitor.getItem());
    }
}
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class Target extends Component {
  constructor(props){
    super(props);
    this.state = { dataArray : ''}
  }
  
  render() {
    const { connectDropTarget, hovered } = this.props;
    console.log('dsadsad', this.props.dataValue.id)
    
    const backgroundColor = hovered ? 'lightgreen' : 'white';

    return connectDropTarget(
       <div className="target" style={{ background: backgroundColor }}>
        {this.props.dataValue.id}
        {this.state.dataArray}
      </div>
    );
  }
}

export default DropTarget('item', itemTarget, collect)(Target);
