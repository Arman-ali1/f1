import React ,{useState}from 'react'

function Inspection() {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
    
        if (selectedValue === "1") {
          document
            .scrollIntoView({ behavior: "smooth" });
        }
        else if (selectedValue === "2") {
          document
            .scrollIntoView({ behavior: "smooth" });
        }
      };


      const [selectedOption, setSelectedOption] = useState('');

      const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
  return (
    <div className='flex flex-col justify-center items-center mb-40'>
      <h1 className='text-green-800 mb-4'>
        ----------------------------------------------------------------------<span className='text-black bg-gray-400 text-xl font-bold p-2 rounded-sm  '>Inspection</span>----------------------------------------------------------------
      </h1>
      <div className="w-2/3   h-96  bg-gray-100 text-black border-2 rounded  pt-10 ">
       <div className='flex flex-row justify-center items-center p-2'>
        <p className=' ml-[70px]  '>Select part  : </p>
        <select
            className="w-full max-w-sm px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900 transition duration-300 ease-in-out hover:bg-blue-50"
            onChange={handleSelectChange}
            defaultValue=""
          >
            {/* <option value="" disabled selected>
              Select a course
            </option> */}
            <option value="1">Select a Part</option>
            <option value="1">Part A</option>
            <option value="2">Part B</option>
            <option value="2">Part C</option>
            <option value="2">Part D</option>
            <option value="2">Part E</option>
            <option value="2">Part F</option>
          </select>
       </div>
       {/* =========== */}
       <div className="flex flex-row justify-center items-center p-2 ">
         <h3 className="">Start a lot:</h3>
      
      <div className="flex items-center space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            value="Option 1"
            checked={selectedOption === 'Option 1'}
            onChange={handleChange}
            className="h-5 w-5 text-blue-500 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-300"
          />
          <span className="ml-2">Option 1</span>
        </label>
        
        <label className="flex items-center">
          <input
            type="radio"
            value="Option 2"
            checked={selectedOption === 'Option 2'}
            onChange={handleChange}
            className="h-5 w-5 text-blue-500 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-300"
          />
          <span className="ml-2">Option 2</span>
        </label>
        
        <label className="flex items-center">
          <input
            type="radio"
            value="Option 3"
            checked={selectedOption === 'Option 3'}
            onChange={handleChange}
            className="h-5 w-5 text-blue-500 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-300"
          />
          <span className="ml-2">Option 3</span>
        </label>
      </div>
    </div>
       <div className='flex flex-row justify-center items-center ml-[40px]'>
        <p>Start Inspection : </p>
        <select
            className="w-full max-w-sm px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900 transition duration-300 ease-in-out hover:bg-blue-50"
            onChange={handleSelectChange}
            defaultValue=""
          >
            {/* <option value="" disabled selected>
              Select a course
            </option> */}
            <option value="1">Select Response</option>
            <option value="2">Yes</option>
            <option value="3">No</option>
          </select>
       </div>
       
       <div className='pt-4'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Next ➔ </button>
       </div>
      </div>
    </div>
  )
}

export default Inspection
