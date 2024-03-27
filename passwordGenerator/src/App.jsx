import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword]  = useState("");
  // using useRef hook
  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbersAllowed){
      str += "0123456789";
    }
    if(charsAllowed){
      str += "~!@#$%&*?/";
    }
    const len = str.length;

    for(let i = 1; i <= length; i++){
      const index = Math.floor((Math.random()*len) + 1 );
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [numbersAllowed,charsAllowed,setPassword,length]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charsAllowed, passwordGenerator]);

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg 
    px-4 my-8 text-orange-500 bg-gray-700 ">
      <h1 className="text-white text-center mb-2">Password generator</h1>
        <div className="flex shadow overflow-hidden rounded-lg mb-4">
        <input 
          type ="text"
          value = {password}
          placeholder = "password"
          className = "w-full outline-none p-3 mb-2 "
          ref = {passwordRef}
          readOnly
          />
          <button
           className="outline-none
            bg-blue-500
             text-white px-1
              py-0.5 mb-2"
              onClick = {copyPassword}
           >copy
           </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" 
              min="0"
              max="50"
              value={length}
              className = "cursor-pointer"
              onChange = {(event) =>{setLength(event.target.value)}}
            />
            <label>Length:{length}</label>

          </div>
         <div className='flex item-center gap-x-1'>
            <input
             type="checkbox"
               id="numberInput"
               defaultChecked = {numbersAllowed}
               onChange = {() =>{setNumbersAllowed(prev => !prev)}}
              /> 
              <label htmlFor="numberInput">Number</label>

          </div>
          <div className='flex item-center gap-x-1'>
            <input
             type="checkbox"
               id="charInput"
               defaultChecked = {charsAllowed}
               onChange = {() =>{setCharsAllowed(prev => !prev)}}
              /> 
              <label htmlFor="charInput">Charactors</label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App;
