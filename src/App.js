import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [buy, setBuy] = useState("")
  // console.log(buy);
  const [borrow, setBorrow] = useState("")
  // console.log(borrow?.length);
  const [maxResult, setMaxResult] = useState("")
  // console.log(maxResult);

  const inputCola = (props) => {
    if (props.target.name === "buy"){
      setBuy(props.target.value)
    } else if (props.target.name === "borrow"){
      setBorrow(props.target.value)
    }
  }

  const calculateMaxCola = () => {
    if (parseInt(buy) > 0 && parseInt(borrow) % 3 !== 0){
      let totalBottle = (parseInt(buy) + parseInt(borrow))
      let max = totalBottle
      for (let i = 3; i < totalBottle;) {
        totalBottle /= i
        max += totalBottle
      }
      setMaxResult(max)
    } else if (parseInt(buy) > 0){
      let totalBottle = (parseInt(buy) + parseInt(borrow))
      let max = totalBottle
      for (let i = 3; i < totalBottle;) {
        totalBottle /= i
        max += totalBottle
      }
      setMaxResult(max)
    }
  }

  return (
    <div className="App">
      <h1>Test Coding ChocoCola</h1>
      <div>
        <div>
          <label>Buy Cola</label>
          <input name='buy' onChange={inputCola} type='number'/>
        </div>
        <div>
          <label>Borrow empty Bottle</label>
          <input name='borrow'onChange={inputCola} type='number'/>
        </div>
        <button onClick={calculateMaxCola}>Total</button>
        <p>{`max cola can enjoy : ${maxResult}`}</p>
      </div>
    </div>
  );
}

export default App;
