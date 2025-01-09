import React,{useState} from 'react'

function AddQcChecks() {


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

    //   img==============

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(file);
        setPreview(URL.createObjectURL(file)); // Create a preview URL
      }
    };
  
    const handleRemoveImage = () => {
      setImage(null);
      setPreview(null);
    };
    // ======img===========
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-green-800 mb-4'>
        ----------------------------------------------------------------------<span className='text-black bg-gray-400 text-xl font-bold p-2 rounded-sm  '>Add QC Checks</span>----------------------------------------------------------------
      </h1>
      <div className="w-2/3   h-min   bg-gray-400 border-2 rounded  pt-10 pb-4">

       <div className='flex flex-row justify-center items-center p-2 ml-8'>
        <p>Name : </p>
        <input
            type="text"
            className="text-black w-[380px] h-[40px] border border-gray-300 rounded  focus:outline-none focus:ring focus:ring-blue-300 "
        />

       </div>
       <div className='flex flex-row justify-center items-center p-2 '>
        <p>Discription : </p>
        <input
            type="text"
            className="text-black w-[380px] h-[110px] border border-gray-300 rounded  focus:outline-none focus:ring focus:ring-blue-300 "
        />

       </div>
       {/* ======================img */}
       <div className="flex flex-row items-center p-4 pl-44  ">
       <p>Image : </p>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />
      {preview ? (
        <div className="relative">
          <img
            src={preview}
            alt="Uploaded Preview"
            className="w-28   h-32  object-cover rounded-lg"
          />
          <button
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 text-sm"
          >
            ✕
          </button>
        </div>
      ) : (
        <p className="text-gray-500">No image uploaded yet</p>
      )}
    </div>

       {/* img ----------------- */}
       <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Next ➔ </button>
       </div>
      </div>
    </div>
  )
}

export default AddQcChecks
