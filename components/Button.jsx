import React from 'react'

const Button = (props) => {
  return (
    <button    className="bg-gradient-to-r from-orange-300 to-yellow-300 text-white font-bold 
    uppercase text-sm px-6 py-3 rounded shadow hover:px-10 md:ml-8 outline-none 
    focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
      {props.children}
    </button>
  )
}

export default Button