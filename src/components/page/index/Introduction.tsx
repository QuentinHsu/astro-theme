import React from 'react'
import SignatureQuentinHsu from '@/components/animata/signature/QuentinHsu.tsx'

export default function Introduction(): React.ReactElement {
  return (
    <>
      <div className="w-full flex justify-start items-center mb-8">
        <span className="text-4xl">
          👋
        </span>
        <div className="md:px-4 px-2 text-4xl">
          I'm
        </div>
        <div className="flex justify-center items-center w-60">
          <SignatureQuentinHsu />
        </div>
      </div>
      <p className="w-full">
        I'm a developer.
      </p>
    </>
  )
}
