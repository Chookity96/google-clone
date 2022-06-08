import React from 'react'
import Image from 'next/image'
import { MicrophoneIcon, XIcon, ViewGridIcon } from '@heroicons/react/solid'
import { CogIcon, SearchIcon } from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'


function Header() {
	const searchInputRef = useRef()
	const [showCross, setShowCross] = useState(true)
	const router = useRouter()
	const search = (e) => {
		e.preventDefault()
		const term = searchInputRef.current.value
		if (!term) {
			return
		}
		router.push(`/search?term=${term}`)
	}
	return (
		<header className="sticky top-0 bg-white">
			<div className="flex p-5 items-center w-full sm:pl-[5%] md:pl-[10%]">
				<Image
					src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
					width={120} height={40}
					className="cursor-pointer"
					onClick={() => { router.push('/') }}
				/>
				<form className='flex w-full max-w-xl items-center ml-5 mr-5 border border-gray-300 px-5 py-3 rounded-full shadow-md hover:shadow-lg focus-within:shadow-lg'>
					<input
						type="text"
						className='focus:outline-none flex-grow'
						onChange={() => { setShowCross(true) }}
						ref={searchInputRef}
						defaultValue={router.query.term}
					/>
					<XIcon
						className={`${showCross ? "inline-flex" : "hidden"} cursor-pointer h-5 text-gray-500 pr-2 border-r border-gray-400`} onClick={() => { searchInputRef.current.value = ""; setShowCross(false) }}
					/>
					<button type="submit" onClick={search} className='cursor-pointer'>
						<SearchIcon className='h-5 text-blue-600 pl-2' />
					</button>
				</form>
				<div className='ml-auto flex items-center max-w-sm'>
					<CogIcon className='h-10 rounded-full transition-all duration-300 ease-linear hover:bg-gray-200 cursor-pointer p-2 text-gray-500 hidden lg:inline-flex'  />
					<ViewGridIcon className=' h-10 rounded-full transition-all duration-300 ease-linear hover:bg-gray-200 cursor-pointer p-2 text-gray-500 hidden lg:inline-flex' />
					<Avatar className="w-14 md:w-10" url="https://lh3.googleusercontent.com/ogw/ADea4I4zUFn_m3z7aBUo3Jw7TNIo--g0xvl8hLmahKcS=s64-c-mo" />
				</div>

			</div>

			<HeaderOptions />
		</header>

	)
}

export default Header