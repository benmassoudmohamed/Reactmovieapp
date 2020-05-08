import React, { Component } from 'react';

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            BoxTab:[{name:'Extraction',rate:4, link:"https://media.senscritique.com/media/000018476719/325/Avengers_Endgame.jpg"},
            {name:'the call of the wild',rate:2, link:"https://media.senscritique.com/media/000017617001/325/Annihilation.jpg"}],
            star:"",
            show:false,
            titre:"",
            link:"",
            rate:""

           
         }
    }
    showMovive=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    AddMovie=()=>{
        this.setState({
            BoxTab:[...this.state.BoxTab,{name:this.state.titre,rate:this.state.rate,link:this.state.link}],
            show:false,
            titre:"",
            link:"",
            rate:"",
            iscolored:"",

        })
    }
    showBox=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    render() { 
        return ( <div style={{display:"flex"}}>
            {this.state.BoxTab.filter(el=>el.name.toUpperCase().includes(this.props.titre.toUpperCase())).filter(el=>el.rate>=this.props.rate).map(el=><div style={{border:"2px solid black",width:"250px",heigth:"300px"}}>
            <span>{this.state.star.padEnd(el.rate,"⭐")}</span>
         
           
            <img style={{width:"250px",height:"200px"}} src={el.link} alt="img"/>
            <span>{el.name}</span>


        </div>)}
        <div style={{border:"2px solid black",width:"300px",heigth:"300px",textAlign:"center"}} onClick={this.showBox}>
            Add movie

        </div> 
        <div style={{display:(this.state.show)?"block":"none"}} >
            <input type='text' placeholder='titre' value={this.state.titre} onChange={(e)=>this.setState({titre:e.target.value})}/>
            <input type='text' placeholder='link' value={this.state.link} onChange={(e)=>this.setState({link:e.target.value})}/>
            <input type='text' placeholder='rate' value={this.state.rate}onChange={(e)=>this.setState({rate:e.target.value})}/>
            <button onClick={this.AddMovie}>Add</button>
        </div>
        </div>

        );
        }
    }
 
export default App2 ;