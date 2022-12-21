import React from 'react';
import { useState } from 'react';



class Namaste extends React.Component{
    
    constructor(props){
        console.log("I'm inside constructor");
        super(props);
        this.state = {
            name: this.props.name,
            age: this.props.age,
            phno: this.props.phno,
            add:this.props.add
        }


    }
    componentDidMount =()=>{
        console.log("I'm inside componentdidmount");
        this.setState({
            name: "Divya",
            age: 25,
            phno:"9880678644",
            add:"Murghespalya"
        })

    }
    componentDidUpdate =()=>{
        console.log("I'm inside componentDidUpdate");

    }
    componentWillUnmount = ()=>{
        console.log("I'm inside componentWillUnmount");

    }

     handleChange=()=>{
        this.setState({
            name: "Navya",
            age: 25,
            phno:"9880678644",
            add:"Murghespalya"
        })
    }
   render(){
    console.log("I'm inside render");
    return(
        <> 
       <div className="name">
      <p><b>Name : </b>{this.state.name}</p>
      <p><b>Age : </b>{this.state.age}</p>
      <p><b>Phone Number : </b>{this.state.phno}</p>
      <p><b>Address : </b>{this.state.add}</p>  
      <button onClick={this.handleChange}>Change</button>
      </div>
       
       
        </>

    )

   } 
}
export default Namaste;