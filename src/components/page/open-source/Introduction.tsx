import React from 'react'
import { classnames, lineHeight, padding, width } from 'tailwindcss-classnames'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export default function Introduction(): React.ReactElement {
  const styleParagraph = classnames(
    width('w-full'),
    padding('pb-5', 'py-5'),
    lineHeight('leading-7'),
  )
  return (
    <div className="w-full pt-12">
      <div className="flex justify-start items-center mb-5">
        <GitHubLogoIcon className="w-8 h-8" />
      </div>
      <p className={styleParagraph}>
        🧑‍💻 我喜爱和感谢开源社区带来的一切，也在竭尽所能贡献自己的力量。并鼓励身边的朋友积极参加与贡献开源。
      </p>
    </div>
  )
}
