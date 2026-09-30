import { useState, useRef } from "react";
import "./App.css";

function App() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);
    const[error,setError]=useState('')

    function plus(e) {
        e.preventDefault();
        const inputVal = inputRef.current.value;
        const newResult = result + Number(inputVal);
        setResult(newResult);
    }
/*
NOTE:

1. Use the same approach as the plus() function to implement:
   - minus()
   - times()
   - divide()

2. The following functions work differently:
   - resetInput(): clear the input field using inputRef
   - resetResult(): reset the result state to 0
*/

  function minus(e) { 
    e.preventDefault();
        const inputVal = inputRef.current.value;
        const newResult = result - Number(inputVal);
        setResult(newResult);
    }
  
 
  function times(e) { 
    e.preventDefault();
        const inputVal = inputRef.current.value;
        const newResult = result * Number(inputVal);
        setResult(newResult);
    }
  
 
  function divide(e) { 
    e.preventDefault();
        const inputVal = inputRef.current.value;
    try{
        if(Number(inputVal)===0){
            throw new Error("can't devide by 0");
        }
         var newResult = result / Number(inputVal);
         setResult(newResult);
     }
    catch(err){
     setError(err.message)
    }
}
  
 
  function resetInput() { 
    inputRef.current.value='';
  }
 
  function resetResult() { 
    setResult(0);
 }
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 

      <form> 
        
        <p ref={resultRef}>{result}</p>
        {error&&<p>{error}</p>}
        
        <input
          pattern="[0-9]*" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        
        <button type="button" onClick={plus}>Add</button>
        <button  type="button" onClick={minus}>Subtract</button>
        <button type="button" onClick={times}>Multiply</button>
        <button type="button" onClick={divide}>Devide</button>
        <button type="button" onClick={resetInput}>Reset Input field</button>
        <button type="button" onClick={resetResult}>Reset result</button>
 
      </form> 
    </div> 
  ); 
} 
 
export default App;