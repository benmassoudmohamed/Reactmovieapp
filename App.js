import React, { Component } from 'react';
import App2 from './App2';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      star:[{id:1,icon:"✰",isColored:false},{id:2,icon:"✰",isColored:false},{id:3,icon:"✰",isColored:false},
      {id:4,icon:"✰",isColored:false},{id:5,icon:"✰",isColored:false}],
      titre:'',
     }
  }
  hadechange=(e)=>{
   this.setState({
     titre:e.target.value,
   }) 
  }
  SetColor=(id)=>{
    this.setState({
      star:this.state.star.map(el=>(el.id===id)?{id:el.id,icon:el.icon,isColored:!el.isColored}:el)
    })
    

  }
  render() { 
    return (  <div>
        <input type="text" placeholder="search"  onChange={this.hadechange}></input>
    
    <div>
      {this.state.star.map(el=><span  onClick={()=>this.SetColor(el.id)}>{(el.isColored)?"⭐" :el.icon}</span>)}

    </div>
<App2  titre={this.state.titre}rate={this.state.star.filter(el=>el.isColored===true).length} />
     </div>);
  }
}
 
export default App ;