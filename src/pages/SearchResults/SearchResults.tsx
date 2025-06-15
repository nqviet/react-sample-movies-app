import React, { useState } from 'react'

import { PageContent } from '../../components/PageContent'
import { useQueryParams } from '../../Router'
import { SearchList } from '../../components/SearchList'
import { SearchBar } from '../../components/SearchBar'
import { ViewMode } from '../../types'
import { ViewModeSwitch } from '../../components/ViewModeSwitch'

import './SearchResults.scss'

export interface SearchResultsProps {}

export default function SearchResults() {
  const { query = '' } = useQueryParams<{ query: string }>()
  const [view, setView] = useState(ViewMode.List)

  return (
    <div className="csearch-results">
      <PageContent>
        <SearchBar className="search-bar" query={query} />
        <h1>Search Results</h1>
        <ViewModeSwitch view={view} onChange={(active: ViewMode) => setView(active)} />
        <SearchList params={{ query }} view={view} />
      </PageContent>
    </div>
  )
}
