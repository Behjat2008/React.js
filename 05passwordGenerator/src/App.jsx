import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`!@#$%^&*()_+{}|:?><?/.,;'[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-800">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url('https://wallpapercave.com/wp/wp1991167.jpg')` }}
      ></div>
      <div className="relative w-full max-w-lg mx-auto shadow-xl rounded-lg px-6 py-10 bg-opacity-80 text-gray-200 bg-gray-900 backdrop-blur-md">
        <h1 className='text-teal-300 text-center text-2xl font-semibold mb-5'>Password Generator</h1>
        <div className="flex shadow-inner rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 bg-gray-700 text-teal-300"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className='outline-none bg-teal-500 hover:bg-teal-600 transition-colors text-white px-4 py-2'
          >
            Copy
          </button>
        </div>
        <div className='flex flex-col text-sm gap-y-5'>
          <div className='flex items-center justify-between'>
            <label className="text-gray-300">Length: {length}</label>
            <input
              type="range"
              min={1}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="numberInput" className="text-gray-300">Include Numbers</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="characterInput" className="text-gray-300">Include Characters</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
