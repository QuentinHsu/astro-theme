import React from 'react'
import CardPullRequests from './CardPullRequests'
import OcticonGitMerge from '@/components/icon/OctionGitMerge'

export default function PullRequests(): React.ReactElement {
  return (
    <div className="w-full py-12">
      <div className="flex items-center">
        <OcticonGitMerge className="text-[var(--fgColor-done)] w-5" />
        <h2 className="text-xl ml-2">Pull Requests</h2>
      </div>
      <CardPullRequests repository="https://github.com/Calcium-Ion/new-api" author="QuentinHsu" pageSize={10} />
    </div>
  )
}
