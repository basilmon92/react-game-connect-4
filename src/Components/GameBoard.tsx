import React from "react";
import GameCircle from "./GameCircle";

const GameBoard = () => {
    return <div>
        <GameCircle style={{color: 'red',backgroundColor:'lightBlue'}} id={1}>
            Red
        </GameCircle>
        <GameCircle style={{color: 'blue'}} id={2}>
            Blue
        </GameCircle>
    </div>
}

export default GameBoard;