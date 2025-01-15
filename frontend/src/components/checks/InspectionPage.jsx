import React, { useState } from "react";

const checkpoints = [
  {
    id: 1,
    label: "Checkpoint 1: Check A ",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg", // Replace with actual image URLs
  },
  {
    id: 2,
    label: "Checkpoint 2: Check B",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
  {
    id: 3,
    label: "Checkpoint 3: Check C",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
  {
    id: 4,
    label: "Checkpoint 4: Check D",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
  {
    id: 5,
    label: "Checkpoint 5: Check E",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
  {
    id: 6,
    label: "Checkpoint 6: Check F",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
  {
    id: 7,
    label: "Checkpoint 7: Check G",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
  {
    id: 8,
    label: "Checkpoint 8: Check H",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
  {
    id: 9,
    label: "Checkpoint 9: Check I",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
  {
    id: 10,
    label: "Checkpoint 10: Final Approval",
    imgSrc: "https://images.freeimages.com/images/large-previews/690/shaft-1148009.jpg",
  },
];

const InspectionPage = () => {
  const [count, setCount] = useState(0);
  const [checkedState, setCheckedState] = useState(
    Array(checkpoints.length).fill(false) // Initialize all checkpoints as unchecked
  );

  const handleCheck = (id) => {
    const updatedCheckedState = [...checkedState];
    const index = id - 1; // Map id to the zero-based index in the array
    updatedCheckedState[index] = !updatedCheckedState[index]; // Toggle the checkbox state

    setCheckedState(updatedCheckedState);

    if (updatedCheckedState[index]) {
      setCount((prev) => prev + 1); // Increment count if checked
    } else {
      setCount((prev) => prev - 1); // Decrement count if unchecked
    }
  };

  const handleSubmitInspection = () => {
    if (count === checkpoints.length) {
      alert("Part Passes All Checks");
    } else {
      alert("Please complete all checkpoints before submission.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Inspection Page
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {checkpoints.map((checkpoint) => (
          <div
            key={checkpoint.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={checkpoint.imgSrc}
              alt={checkpoint.label}
              className="w-full h-full object-cover p-6"
            />
            <h2 className="text-lg font-semibold text-gray-700 text-center">
              {checkpoint.label}
            </h2>
            <label className="flex items-center mt-4">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={checkedState[checkpoint.id - 1]} // Bind the state
                onChange={() => handleCheck(checkpoint.id)}
              />
              <span className="ml-2 text-sm text-gray-600">
                Mark as completed
              </span>
            </label>
          </div>
        ))}
      </div>
      <button
        type="submit"
        onClick={handleSubmitInspection}
        className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        SUBMIT INSPECTION
      </button>
      <p className="text-center text-gray-600 mt-4">
        Completed: {count} / {checkpoints.length}
      </p>
    </div>
  );
};

export default InspectionPage;
