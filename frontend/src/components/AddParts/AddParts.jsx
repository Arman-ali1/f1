import React ,{useState} from 'react'

function AddParts() {


    const [rating, setRating] = useState(0);

    const handleStarClick = (starIndex) => {
      setRating(starIndex);
    };

    const [formData, setFormData] = useState({
        checkbox: false,
        radio: 'option1',
        input: '',
        select: 'option1',
        treeSelect: null,
        cascader: null,
        datePicker: null,
        rangePicker: [null, null],
        inputNumber: 1,
        textArea: '',
        switch: false,
        file: null,
        button: false,
        slider: 50,
        color: '#000000',
        rate: 3,
      });
    
      // Handle change for different types of inputs
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
      };
    
      const handleRangeChange = (value) => {
        setFormData({ ...formData, slider: value });
      };

  return (
    <div className="p-8 space-y-6 text-slate-950 w-full  ">
    <h1 className='text-green-800 mb-4'>
        -----------------------------------------------------<span className='text-black bg-gray-400 text-xl font-bold p-2 rounded-sm  '>Add QC Checks</span>--------------------------------------------------
      </h1>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleChange}
          className="w-5 h-5"
        />
        <label>Checkbox:</label>
      </div>

      <div className="space-x-2 flex flex-row">
      <p>Radio:</p>
        <input
          type="radio"
          name="radio"
          value="option1"
          checked={formData.radio === 'option1'}
          onChange={handleChange}
        />
        <label>Radio 1</label>
        <input
          type="radio"
          name="radio"
          value="option2"
          checked={formData.radio === 'option2'}
          onChange={handleChange}
        />
        <label>Radio 2</label>
      </div>

      <div className='flex flex-row'>
      <p>Input:</p>
        <input
          type="text"
          name="input"
          value={formData.input}
          onChange={handleChange}
          className="w-80  p-2 border rounded"
          placeholder="Text Input"
        />
      </div>

      <div className='flex flex-row'>
      <p>Select:</p>
        <select
          name="select"
          value={formData.select}
          onChange={handleChange}
          className="w-80   p-2 border rounded"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>

      <div className='flex flex-row'>
      <p>TreeSelect:</p>
        <select
          name="select"
          value={formData.select}
          onChange={handleChange}
          className="w-80   p-2 border rounded"
        >
          <option value="option1">TreeSelect 1</option>
          <option value="option2">TreeSelect 2</option>
        </select>
      </div>

      <div className='flex flex-row'>
      <p>Cascader:</p>
        <select
          name="select"
          value={formData.select}
          onChange={handleChange}
          className="w-80   p-2 border rounded"
        >
          <option value="option1">Cascader 1</option>
          <option value="option2">Cascader 2</option>
        </select>
      </div>

      <div className='flex flex-row'>
      <p>DatePicker:</p>
        <input
          type="date"
          name="datePicker"
          value={formData.datePicker}
          onChange={handleChange}
          className="w-80 p-2 border rounded"
        />
      </div>

      {/* <div>
        <input
          type="text"
          name="rangePicker"
          value={formData.rangePicker.join(' - ')}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Range Picker"
        />
      </div> */}

      <div className='flex flex-row'>
      <p>InputNumber:</p>
        <input
          type="number"
          name="inputNumber"
          value={formData.inputNumber}
          onChange={handleChange}
          className="w-80 p-2 border rounded"
          min="1"
        />
      </div>

      <div className='flex flex-row'>
      <p>TextArea:</p>
        <textarea
          name="textArea"
          value={formData.textArea}
          onChange={handleChange}
          className="w-80 p-2 border rounded"
          rows="4"
          placeholder="Text Area"
        ></textarea>
      </div>

      <div className="flex items-center space-x-2">
        <label>Switch:</label>
        <input
          type="checkbox"
          name="switch"
          checked={formData.switch}
          onChange={handleChange}
          className="w-6 h-6"
        />
      </div>

      <div className='flex flex-row'>
      <p>Upload:</p>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className='flex flex-row'>
      <p>Button:</p>
        <button
          onClick={() => alert('Button clicked!')}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Button
        </button>
      </div>

      <div className='flex flex-row'>
      <p>Slider:</p>
        <input
          type="range"
          name="slider"
          min="0"
          max="100"
          value={formData.slider}
          onChange={(e) => handleRangeChange(e.target.value)}
          className="w-96 "
        />
        <p>Slider Value: {formData.slider}</p>
      </div>

      <div className='flex flex-row'>
      <p>ColorPicker:</p>
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="w-10 h-10 rounded-full"
        />
      </div>

{/* star rating */}
<div className='flex flex-row'>
    <p>Rating:</p>

<div className="flex flex-col  space-y-2">
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            onClick={() => handleStarClick(star)}
            xmlns="http://www.w3.org/2000/svg"
            fill={star <= rating ? 'yellow' : 'none'}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        ))}
      </div>
      <p>Rate: {rating} / 5</p>
    </div>
</div>
{/* star */}
    </div>
  )
}

export default AddParts
