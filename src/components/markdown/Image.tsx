import React from 'react'

interface IProps {
  url: string | string[]
  alt: string | string[]
  className?: string
  classNameImage?: string
}

const Images: React.FC<IProps> = ({ url, alt, className, classNameImage }) => {
  const isMultipleImages = Array.isArray(url)
  const renderImage = (src: string, altText: string, index?: number) => (
    <img
      key={index}
      className={classNameImage || 'w-full '}
      src={src}
      alt={altText}
    />
  )

  return (
    <div className={`w-full flex items-center justify-center ${className || ''}`}>
      {isMultipleImages
        ? (url.map((src, index) => renderImage(src, Array.isArray(alt) ? alt[index] || '' : alt, index)))
        : (renderImage(url, typeof alt === 'string' ? alt : ''))}
    </div>
  )
}

export default Images
