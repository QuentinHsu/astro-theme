import React from 'react'
import '@/styles/index.css'
import BlurryBlob from '@/components/animata/background/blurry-blob.tsx'

export function Hero(): React.ReactElement {
  return (

    <div className="flex flex-col items-center justify-center h-[calc(100vh-20rem)] relative ">
      <BlurryBlob
        className="rounded-xl opacity-45"
        firstBlobColor="bg-purple-400"
        secondBlobColor="bg-blue-400"
      />
    </div>

  )
}
