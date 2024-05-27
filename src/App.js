import "./App.css";
import { useState } from "react";

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
};

const Border = () => {
  const intialsquares = Array(9).fill(null);
  const [squares, setSquare] = useState(intialsquares);
  const [xisnext, Setxisnext] = useState(true);

  const handleclick = (i) => {
    const newSquares = [...squares];
const winnerd = Boolean(calculates(newSquares));
const squareFilled = Boolean(newSquares[i]);
if (winnerd || squareFilled) {
  return;
}

    newSquares[i] = xisnext ? "X" : "O";
    Setxisnext(!xisnext);

     console.log(newSquares)
    setSquare(newSquares);
  };

  const rendersquare = (i) => {
    return <Square value={squares[i]} onClickEvent={() => handleclick(i)} />;
  };

const winner = calculates(squares)



const states = winner ?
`winner:${winner}` :
 `New player is ${xisnext ? "X" : "O"}`;
  return (
    <div>
      <div>{states}</div>
      <div className="box-row">
        {rendersquare(0)} {rendersquare(1)} {rendersquare(2)}
      </div>
      <div className="box-row">
        {rendersquare(3)} {rendersquare(4)} {rendersquare(5)}
      </div>
      <div className="box-row">
        {rendersquare(6)} {rendersquare(7)} {rendersquare(8)}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Border />
    </div>
  );
}

function calculates(squares){
const lines = [

[0,1,2] , [3,4,5], [6,7,8],
[0,3,6], [1,4,7] , [2,5,8],
[0,4,8], [2,4,6],


];
for(let line of lines ){

const[a,b,c] = line;
if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  return squares[a];
}

} 

return null;
}
 
export default App;
