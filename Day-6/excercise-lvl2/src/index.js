import React from 'react';
import ReactDOM from "react-dom";
import "./styles.css";

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}




const Grid = () => {
  const arr = [0,1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21,22,23,24,25,26,27,28,29,30,31];
  
  return (
    <div className='grid'>
      {arr.map(number=><span key={number}
        style={ 
          isPrime(number) ? {backgroundColor: '#DF573C',fontSize: '20px'} :
         number% 2 ===0 ? {backgroundColor:'#1A880B',fontSize: '20px'}   :
        (number% 2 !==0 ? {backgroundColor: '#DFD83C',fontSize: '20px'} : {backgroundColor:'white'}) 
         
       }>{number}</span>)}
  </div>
  );
}

ReactDOM.render(<Grid />, document.getElementById("root"));
