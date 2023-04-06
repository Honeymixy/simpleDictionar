import {createContext, useState } from 'react';
import './App.css';
// import Fetched from './Component/Fetched';
import Result from './Component/Result';
import Search from './Component/Search'

//  create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  // console.log(inputValue);
  const value = {
    inputValue, setInputValue
  }

  return (
    <InputContext.Provider value={value}>
      <div className="App">
        <Search />
        <Result/>
        {/* <Fetched/> */}
      </div>
    </InputContext.Provider>
  );
}

export default App;
