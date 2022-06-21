import React from 'react'
import PaginationBtn from './PaginationBtn'

function SearchResults({ results }) {
	return (
		<div className={`mx-auto w-full px-3 sm:pl-[5%] md:pl-[10%] ${(results.items?.length < 3 || !results.items) && "h-screen"}`}>
			<p className='text-gray-600 text-md mb-5 mt-3 dark:text-white'>
				About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
			</p>

			{
				results.items?.map((result) => (
					<div key={result.link} className="max-w-xl mb-8">
						<div className="group">
							<a href={result.link} className="text-sm dark:text-white">{result.formattedUrl}</a>
							<a href={result.link}><h2 className='truncate text-xl text-blue-800 font-medium group-hover:underline dark:text-blue-500'>{result.title}</h2></a>

						</div>

						<p className='line-clamp-2 dark:text-white'>{result.snippet}</p>
					</div>
				))
			}
			<PaginationBtn results={results} />
		</div>
	)
}

export default SearchResults