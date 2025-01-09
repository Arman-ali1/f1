import { useState } from 'react'
import { Link } from 'react-router-dom';

import './App.css'
import PartMaster from './components/PartMaster/PartMaster';
import Inspection from './components/Inspection/Inspection';
import AddQcChecks from './components/AddQcChecks/AddQcChecks';

function App() {
  const [count, setCount] = useState(0)
  const [bgColor1, setBgColor1] = useState('bg-green-500');
  const [bgColor2, setBgColor2] = useState('bg-gray-600');
  const [bgColor3, setBgColor3] = useState('bg-gray-600');
  const [caseValue, setcaseValue] = useState(1);
  const [flage, setFlage] = useState(true);
  const handleClick1 = (num) => {
    // Toggle between two colors on click
      setBgColor1('bg-green-500');
      setBgColor2('bg-gray-600');
      setBgColor3('bg-gray-600')
      setcaseValue(1)
      // setFlage(true)
  };
  const handleClick2 = (num) => {
    // Toggle between two colors on click
      setBgColor2('bg-green-500');
      setBgColor1('bg-gray-600');
      setBgColor3('bg-gray-600')
      setcaseValue(2)
      // setFlage(false)
    }
    const handleClick3=()=>{
      setBgColor3('bg-green-500')
      setBgColor2('bg-gray-600');
      setBgColor1('bg-gray-600');
      setcaseValue(3)
    }
    
    const renderContent = () => {
      switch (caseValue) {
        case 1:
        return <AddQcChecks></AddQcChecks>;
      case 2:
        return <PartMaster></PartMaster>;
      case 3:
        return <Inspection></Inspection>;
      }
    };


  return (
    <>
      {/* <div className='flex flex-col'>
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
      </div> */}
      <div className="grid grid-cols-5 h-screen w-screen gap-x-6 gap-y-2 rounded-2xl bg-slate-200 mt-10">
        <div className="bg-gray-100  ">
          <p className='text-black font-extrabold border-b-8 border-green-600 '>Parts</p>
          <div className='flex flex-col p-4'>
          <Link className={`${bgColor1} rounded m-2 hover:bg-blue-600 `} onClick={handleClick1}>
            
            <p className='p-2'>Add QC Checks</p>
          </Link>
          <Link className={`${bgColor2} rounded m-2 hover:bg-blue-600 `} onClick={handleClick2}>
            
            <p className='p-2'>Part master</p>
          </Link>
          <Link className={`${bgColor3} rounded m-2 hover:bg-blue-600 `} onClick={handleClick3}>

            <p  className='p-2 '>Inspection page</p>
          </Link>
        </div>
        </div>
        <div className="bg-gray-100  col-span-4 ">
        {renderContent()}
        </div>
      </div>

    </>
  )
}

export default App
