import React from 'react'

function Footer() {
  return (
    <footer className="divide-y-[1px] w-full divide-gray-300 bg-[#f2f2f2] text-gray-500">
        <div className='py-3 px-6'>
            <p>Singapore</p>
        </div>

        <div className="grid grid-cols-1 space-y-4 py-2 px-6 sm:grid-cols-2 sm:space-y-0 text-sm">
            <div className='flex space-x-6 p-2 justify-center items-center lg:justify-start whitespace-nowrap'>
                <p className='link'>Advertising</p>
                <p className='link'>Business</p>
                <p className='link'>How Search Works</p>
            </div>

            <div className='flex space-x-6 p-2 justify-center items-center lg:justify-end'>
                <p className='link'>Privacy</p>
                <p className='link'>Terms</p>
                <p className='link'>Settings</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer