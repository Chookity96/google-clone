import React from 'react'

function HeaderOption( { title, Icon, selected } ) {
  return (
    <div className={`flex space-x-2 items-center border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${selected && "text-blue-500 border-blue-500"}`}>
        <Icon className="h-4" />
        <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOption