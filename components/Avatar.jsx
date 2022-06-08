import React from 'react'

function Avatar( { url, className } ) {
  return (
    <img
    loading='lazy'
    className={`rounded-full w-10 p-1  cursor-pointer transition duration-300 ease-linear transform hover:scale-110 hover:bg-gray-200 ${className}`}
    src={url}
    alt="Profile Pic"
    />
  )
}

export default Avatar