import React from 'react'
import { Image } from '@chakra-ui/react'

export default function Img({ dimension, alt, ...rest}) {
  const [width, height] = dimension.split('x')

  return (
    <Image
      htmlWidth={width}
      htmlHeight={height}
      alt={alt || 'image'}
      {...rest}
    />
  )
}
