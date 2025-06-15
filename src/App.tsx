import React from 'react'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { SearchResults } from './pages/SearchResults'
import { Route, Router } from './Router'
import { Movie } from './pages/Movie'

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/search">
          <SearchResults />
        </Route>
        <Route path="/movie/:id">
          <Movie />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Router>
      <Footer />
    </>
  )
}
