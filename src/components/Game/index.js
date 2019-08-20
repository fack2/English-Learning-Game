import React, {Component} from "./node_modules/react"; 
import vocabularies from "../../data"

class game extends Component{
    state = {
        name: "Cherry", 
        score: 0
    };

    const vocabulariesItems = vocabularies.map(vocabulary =>{
      
        <h3>{vocabulary.name}</h3>
    })
    render(){
        
        return(
            <div><p>working</p></div>
        )
    }
}

export default game; 