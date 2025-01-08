import { useState } from 'react'
import { Link } from 'react-router-dom';

import './App.css'
import PartMaster from './components/PartMaster/PartMaster';
import Inspection from './components/Inspection/Inspection';

function App() {
  const [count, setCount] = useState(0)
  const [bgColor1, setBgColor1] = useState('bg-green-500');
  const [bgColor2, setBgColor2] = useState('bg-gray-600');
  const [flage, setFlage] = useState(true);
  const handleClick1 = (num) => {
    // Toggle between two colors on click
    setBgColor1('bg-green-500');
    setBgColor2('bg-gray-600');
    setFlage(true)
  };
  const handleClick2 = (num) => {
    // Toggle between two colors on click
    setBgColor2('bg-green-500');
    setBgColor1('bg-gray-600');
    setFlage(false)
    }

  return (
    <>
      <div className='flex flex-col'>
        <div className='bg-black  rounded-2xl border-b'>
          <h1 className='text-center p-3 '>Part master management System</h1>
        </div>
      <div className='flex flex-row'>
      <div className='flex flex-col p-4'>
        <Link className={`${bgColor1} rounded m-2 hover:bg-blue-600 `} onClick={handleClick1}>
          
          <p className='p-2'>Part master</p>
        </Link>
        <Link className={`${bgColor2} rounded m-2 hover:bg-blue-600 `} onClick={handleClick2}>

          <p  className='p-2 '>Inspection page</p>
        </Link>
      </div>
      </div>
      {
        flage ?
      <PartMaster></PartMaster>
      :
      <Inspection></Inspection>
      }
      </div>
    </>
  )
}

export default App
