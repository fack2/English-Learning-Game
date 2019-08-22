import React , {Component}from 'react';
import Game from '../Game'
import FirstPage from '../FirstPage'
class App extends Component  {

    state = {
        gameStarted : false
      };

       startGame = ( ) => {
           
        this.setState({gameStarted: true})}
       render() {
      return (
        <div>
            
        { (!this.state.gameStarted  )? (<FirstPage startGame={this.startGame} />) : (<Game />)}
        </div>
  
       ) 
      }
      
}

export default App
