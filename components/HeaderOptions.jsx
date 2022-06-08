import React from 'react'
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon, } from '@heroicons/react/outline'
import HeaderOption from './HeaderOption'

function HeaderOptions() {
	return (
		<div className="flex w-full pl-6 pr-24 text-gray-700 justify-between text-sm lg:text-base border-b sm:pl-[5%] md:pl-[10%] lg:pr-52 xl:pr-[430px]">
			<div className="flex space-x-6">
				<HeaderOption title="All" Icon={SearchIcon} selected/>
				<HeaderOption title="Images" Icon={PhotographIcon} />
				<HeaderOption title="Videos" Icon={PlayIcon} />
				<HeaderOption title="News" Icon={NewspaperIcon} />
				<HeaderOption title="Maps" Icon={MapIcon} />
				<HeaderOption title="More" Icon={DotsVerticalIcon} />
			</div>

			<div className=''>
				<p className='link' >Tools</p>
			</div>
		</div>
	)
}

export default HeaderOptions