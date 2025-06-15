import React, { useState } from 'react'

import { useRouter } from '../../Router'

import * as constants from './constants'
import './SearchBar.scss'

export interface SearchBarProps {
  className?: string
  query?: string
}

export default function SearchBar(props: SearchBarProps) {
  const router = useRouter()
  const [input, setInput] = useState(props.query || '')

  const onInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    setInput(event.currentTarget.value)
  }

  const onSearch = () => {
    const query = encodeURIComponent(input.trim())
    if (query) {
      router.navigate(`/search?query=${query}`)
    }
  }

  const onEnter: React.KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <div className={`csearch-bar ${props.className || ''}`} onKeyDown={onEnter}>
      <input
        className="search-input"
        placeholder={constants.INPUT_PLACEHOLDER}
        value={input}
        onInput={onInput}
      />
      <button className="search-btn" disabled={!input.trim()} onClick={onSearch}>
        Search
      </button>
    </div>
  )
}
