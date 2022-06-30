import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import HeaderOptions from '../components/HeaderOptions'
import Response from '../Response'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SearchResults from '../components/SearchResults'

function Search({ results }) {
  const router = useRouter()
  const [dark, setDark] = useState(true)
  return (
    <div className={`${dark && 'dark'} h-full`}>
      <div className="dark:bg-slate-800 h-full overflow-y-hidden relative">
        <Head>
          <title>{router.query.term}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <SearchResults results={results} />

        <p
          className="link absolute bottom-1  right-0 text-[16px] border border-r-0 border-slate-500 py-1 px-2 dark:text-white"
          onClick={() => setDark(!dark)}
        >
          Dark Theme: {dark ? 'On' : 'Off'}
        </p>
      </div>
      {/* <div className="h-screen w-full z-10 bg-slate-800"></div> */}
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const useDummyData = true
  const startIndex = context.query.start || '0'

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`,
      ).then((response) => response.json())

  return {
    props: {
      results: data,
    },
  }
}
