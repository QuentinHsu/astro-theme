import React from 'react'
import { classnames, lineHeight, margin, padding, width } from 'tailwindcss-classnames'
import SignatureQuentinHsu from '@/components/animata/signature/QuentinHsu.tsx'

export default function Introduction(): React.ReactElement {
  const styleParagraph = classnames(
    width('w-full'),
    padding('px-5'),
    lineHeight('leading-7'),
    margin('mb-4'),
  )
  return (
    <div className="w-full pt-12">
      <div className="flex justify-start items-center mb-10">
        <span className="text-4xl">
          👋
        </span>
        <div className="md:px-4 px-2 text-4xl">
          I'm
        </div>
        <div className="flex justify-center items-center w-60">
          <a href="https://github.com/QuentinHsu" target="_blank" rel="noreferrer">
            <SignatureQuentinHsu />
          </a>
        </div>
        <div className="md:px-3 px-2 text-xl">
          in GitHub.
        </div>

      </div>
      <p className={styleParagraph}>
        🧑‍💻 我喜爱和感谢开源社区带来的一切，也在竭尽所能贡献自己的力量。并鼓励身边的朋友积极参加与贡献开源。
      </p>
    </div>
  )
}
