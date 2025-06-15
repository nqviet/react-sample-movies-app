import React, { useCallback, useState } from 'react'

import { Banner } from '../../components/Banner'
import { MovieList } from '../../components/MovieList'
import { MovieListType, ViewMode } from '../../types'
import { Tabs } from '../../components/Tabs'
import { SearchBar } from '../../components/SearchBar'
import { PageContent } from '../../components/PageContent'
import { ViewModeSwitch } from '../../components/ViewModeSwitch'

import * as constants from './constants'
import './Home.scss'

export interface HomeProps {}

export default function Home() {
  const [movieListType, setMovieListType] = useState(MovieListType.NowPlaying)
  const [view, setView] = useState(ViewMode.Grid)

  const onMoveListTypeChange = useCallback((activeTabIndex: number) => {
    setMovieListType(activeTabIndex)
  }, [])

  return (
    <div className="chome">
      <Banner title={constants.BANNER_TITLE} subTitle={constants.BANNER_SUBTITLE}>
        <SearchBar />
      </Banner>

      <PageContent>
        <ViewModeSwitch view={view} onChange={(active: ViewMode) => setView(active)} />
        <Tabs
          activeIndex={movieListType}
          label="What's playing"
          tabNames={constants.MOVIE_LIST_TAB_NAMES}
          onChange={onMoveListTypeChange}
        />
        <MovieList type={movieListType} view={view} />
      </PageContent>
    </div>
  )
}
