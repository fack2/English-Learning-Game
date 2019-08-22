import React, {component} from 'react'
const FirstPage = ({startGame})=>{

    return(
        <div>
        <h1>English Learning Game</h1>
        <button onClick={() => startGame()
        }>start</button>
        </div>
    )
}
// 
export default FirstPage