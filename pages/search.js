import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import HeaderOptions from '../components/HeaderOptions'
import Response from '../Response'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults'

function Search({results}) {
	const router = useRouter()
	console.log(results)
	return (
		<div>
			<Head>
				<title>{router.query.term}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<SearchResults results={results} />

			
			

		</div>
	)
}

export default Search

export async function getServerSideProps(context) {
	const useDummyData = true
	const startIndex = context.query.start || "0";

	const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json())

	return {
		props: {
			results: data,
		}
	}
}