import React from 'react'
//useState
import { useState } from 'react'

function PartMaster() {


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
  return (
    <div className='flex flex-col justify-center items-center mb-40'>
      <h1 className='text-green-800 mb-4'>
        ----------------------------------------------------------------------<span className='text-black bg-gray-400  text-xl font-bold p-2 rounded-sm  '>Part Master</span>----------------------------------------------------------------
      </h1>
      <div className="w-2/3   h-96  bg-gray-100 text-black border-2 rounded  pt-10 ">
       <div className='flex flex-row justify-center items-center p-2'>
        <p className=' ml-[70px]  '>Series : </p>
        <select
            className="w-full max-w-sm px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900 transition duration-300 ease-in-out hover:bg-blue-50"
            onChange={handleSelectChange}
            defaultValue=""
          >
            {/* <option value="" disabled selected>
              Select a course
            </option> */}
            <option value="1">Select a Series</option>
            <option value="1">Series A</option>
            <option value="2">Series B</option>
            <option value="2">Series C</option>
            <option value="2">Series D</option>
            <option value="2">Series E</option>
            <option value="2">Series F</option>
          </select>
       </div>
       <div className='flex flex-row justify-center items-center '>
        <p>Select QC check : </p>
        <select
            className="w-full max-w-sm px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900 transition duration-300 ease-in-out hover:bg-blue-50"
            onChange={handleSelectChange}
            defaultValue=""
          >
            {/* <option value="" disabled selected>
              Select a course
            </option> */}
            <option value="1">Select a QR</option>
            <option value="1">QR A</option>
            <option value="2">QR B</option>
            <option value="2">QR C</option>
            <option value="2">QR D</option>
            <option value="2">QR E</option>
            <option value="2">QR F</option>
          </select>
       </div>
       <div className='flex flex-row justify-center items-center p-2 ml-8'>
        <p>Discription : </p>
        <input
            type="text"
            className="text-black w-[380px] h-[110px] border border-gray-300 rounded  focus:outline-none focus:ring focus:ring-blue-300 "
        />

       </div>
       <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
        SUBMIT 
        </button>
       </div>
      </div>
    </div>
  )
}

export default PartMaster
