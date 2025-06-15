import React, { useEffect, useRef, useState } from 'react'

import { FadeInEffect } from '../FadeInEffect'

import './LazyImg.scss'

export interface LazyImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string
}

function LazyImg(props: LazyImgProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [error, setError] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (imageRef.current) {
      observer.observe(imageRef.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [])

  const handleError = () => {
    if (isVisible) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const { className, src, srcSet, loading, onError, onLoad, style, ...otherProps } = props
  const noImageStyle = {
    width: props.width,
    height: props.height,
  }

  return (
    <>
      <FadeInEffect>
        {(fadeInStyle, onShow) => (
          <img
            ref={imageRef}
            className={`clazy-img ${props.className ? props.className : ''} ${error ? 'error' : ''}`}
            src={isVisible ? props.src : ''}
            srcSet={isVisible ? props.srcSet : ''}
            loading="lazy"
            onError={handleError}
            onLoad={() => onShow()}
            style={{ ...fadeInStyle, ...style }}
            {...otherProps}
          />
        )}
      </FadeInEffect>
      {error && (
        <div
          className={`no-img ${props.className ? props.className : ''}`}
          {...otherProps}
          style={noImageStyle}
        >
          No Image
        </div>
      )}
    </>
  )
}

function Img(props: LazyImgProps) {
  const [error, setError] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleError = () => {
    setError(true)
  }

  const { className, src, srcSet, loading, onError, onLoad, style, ...otherProps } = props
  const noImageStyle = {
    width: props.width,
    height: props.height,
  }

  return (
    <>
      <FadeInEffect>
        {(fadeInStyle, onShow) => (
          <img
            ref={imageRef}
            className={`clazy-img ${props.className ? props.className : ''} ${error ? 'error' : ''}`}
            src={props.src}
            srcSet={props.srcSet}
            onError={handleError}
            onLoad={() => onShow()}
            style={{ ...fadeInStyle, ...style }}
            {...otherProps}
          />
        )}
      </FadeInEffect>
      {error && (
        <div
          className={`no-img ${props.className ? props.className : ''}`}
          {...otherProps}
          style={noImageStyle}
        >
          No Image
        </div>
      )}
    </>
  )
}

export default process.env.FEATURE_LAZY_LOAD_IMAGE === 'true' ? LazyImg : Img
