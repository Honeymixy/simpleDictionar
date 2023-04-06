import { useContext, useState } from "react";
import { InputContext } from "../App";

const Search = () => {
  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputChange = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value);
      setValue("");
    }
  };

  return (
    <div className="bg-cyan-700">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-white">
          <span className="font-bold drop-shadow-xl"> Damso</span> Dictionary
        </h1>
        <p className="text-center mt-1 mb-10 text-sky-100 text-lg">
          Find definisions ,Synonyms and Antonym for word
          
        </p>

        <div className="flex items-center justify-center py-4 mt-5">
          <div className="flex border-2 border-gray-200 p-3 rounded">
            <input
              className="px-4 py-2 md:w-80"
              type="text"
              placeholder="Search the dictionary"
              onChange={handleInputChange}
              value={value}
              onKeyDown={handleInputKeyDown}
            />
            <button
              className="bg-blue-500 border-l px-4 py-2 text-white"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>

        {inputValue && (
          <h3 className="text-gray-200 text-center text-4xl	 mt-4">
            Result for : {" "}
            <span className="text-white font-bold">{inputValue.toUpperCase()}</span>
          </h3>
        )}
      </div>
    </div>
  );
};
export default Search;


