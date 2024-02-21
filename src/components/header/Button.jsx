import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#003249] text-white font-custom py-2 px-20 lg:px-6 rounded-[4px] hover:bg-[#6ADB84] duration-500'>
      {props.children}
    </button>
  )
}

export default Button