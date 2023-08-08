import './App.css';
import React ,{Component} from 'react';
import Elem from './Elem';
import What from './what';
var i=0;
class App extends Component{
  state={
    items:[{id:''  
      , name:''}]
  }
  handlechange=(e)=>
  {
  this.setState({
    [e.target.id]:e.target.value
  
  })
  }

handleSubmit=(e)=>{
  e.preventDefault();
this.add(this.state);
}
 add =(item)=>{
  i++;
  item.id=i;
let items = this.state.items;
items.push(item);
this.setState({
  items
})
 }
  render(){

  return(
<div className='App'>
<Elem handlechange={this.handlechange} handleSubmit={this.handleSubmit} items={this.state.items}/>
<What />


</div>
  );
  }
}
export default App;
