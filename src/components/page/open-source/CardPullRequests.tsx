import { z } from 'astro/zod'
import React, { useEffect, useState } from 'react'

const SProps = z.object({
  repository: z.string().url(),
  author: z.string(),
  pageSize: z.number().default(10).optional(),
})
const SPullRequest = SProps.extend({})

type IProps = z.infer<typeof SProps>
type IPullRequest = z.infer<typeof SPullRequest>

interface PullRequest {
  title: string
  url: string
}

const CardPullRequests: React.FC<IProps> = ({ repository, author, pageSize = 10 }) => {
  return (
    <div>
      <div>{repository}</div>
      <ListPullRequests repository={repository} author={author} pageSize={pageSize} />
    </div>
  )
}

export default CardPullRequests

function ListPullRequests(props: IPullRequest): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(true)
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([])
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const repositoryPath = props.repository.split('/').slice(-2).join('/')
    const url = `https://api.github.com/search/issues?q=repo:${repositoryPath}+author:${props.author}+is:merged&per_page=${props.pageSize}&page=1`

    const fetchPullRequests = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`)
        }
        const data = await response.json()
        const newPullRequests = data.items.map((item: any) => ({
          title: item.title,
          url: item.html_url,
        }))
        setPullRequests(newPullRequests)
      }
      catch (error) {
        setError((error as Error).message)
      }
      finally {
        setLoading(false)
      }
    }

    fetchPullRequests()
  }, [props.repository, props.author, props.pageSize])
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && (
        <div>
          Error:
          {error}
        </div>
      )}
      {pullRequests.map(pullRequest => (
        <div key={pullRequest.url}>
          <a href={pullRequest.url} target="_blank" rel="noreferrer">{pullRequest.title}</a>
        </div>
      ))}
    </div>
  )
}
