import React from 'react'
import { SIGNATURE_QUENTIN_HSU } from '@/constants/svg'

function SVGSignature(): React.ReactElement {
  return (
    <div className="flex justify-center items-center mx-auto w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 550 110" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <path
          d={SIGNATURE_QUENTIN_HSU}
          stroke="currentColor"
          strokeWidth="2"
          style={{
            strokeDasharray: '2400',
            strokeDashoffset: '2400',
          }}
          className="fill-transparent animate-[drawSignature_8s_linear_infinite] mt-[10px]"
        />
      </svg>
    </div>
  )
}

export default SVGSignature
