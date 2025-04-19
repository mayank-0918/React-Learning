import React from 'react'

function Card(props) {
  return (
    <>
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Image */}
      <img
        className="w-full h-60 object-cover"
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="Person"
      />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{props.naam}</h2>
        <p className="text-sm text-gray-500 mb-4">Web Developer at XYZ Corp</p>

        <p className="text-gray-600 mb-6">
          Passionate about building user-friendly web experiences. Loves React,
          Tailwind, and coffee ☕.
        </p>

        {/* Button */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          {props.btn}
        </button>
      </div>
    </div>
    </>
  )
}

export default Card