'use client'

import Image from 'next/image'

import React, { ReactElement } from 'react'

interface AvatarProps {
  src?: string | null | undefined,
}

function Avatar({ src }: AvatarProps): ReactElement {
  return (

    <Image
      className='rounded-full'
      height='30'
      width='30'
      alt='Avatar'
      src={src || '/images/placeholder.jpg'}
    />
  )
}

export default Avatar