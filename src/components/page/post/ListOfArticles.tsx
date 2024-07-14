// src/components/PostList.tsx
import React from 'react'
import dayjs from 'dayjs'

interface Post {
  id: string
  slug: string
  body: string
  collection: string
  data: {
    title: string
    description: string
    createdTime: Date
    updatedTime?: Date
    heroImage?: string
  }
}

interface PostListProps {
  posts: Post[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const postsByYear = posts.reduce<Map<number, Post[]>>((acc, post) => {
    const year = dayjs(post.data.createdTime).year()
    if (!acc.has(year)) {
      acc.set(year, [])
    }
    acc.get(year)!.push(post)
    return acc
  }, new Map<number, Post[]>())

  return (
    <ul>
      {Array.from(postsByYear).map(([year, posts]) => (
        <li key={year}>
          <h2 className="text-2xl font-bold">{year}</h2>
          <ul className="ml-4">
            {posts.map(post => (
              <li key={post.slug}>
                <a href={`/blog/${post.slug}/`} className="flex items-center justify-between">
                  <h4 className="md:text-xl">{post.data.title}</h4>
                  <p className="date m-2">{dayjs(post.data.createdTime).format('MM-DD')}</p>
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default PostList
