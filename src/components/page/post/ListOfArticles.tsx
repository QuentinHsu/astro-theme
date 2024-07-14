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
        <li key={year} className="py-10 mt-20">
          <h2 className="md:text-9xl text-7xl font-bold stroke-text absolute md:mt-[-4rem] md:ml-[-3rem] mt-[-1.5rem] ml-[-0.5rem]">
            {year}
          </h2>
          <ul className="ml-4 relative">
            {posts.map(post => (
              <li key={post.slug}>
                <a href={`/blog/${post.slug}/`} className="w-full flex items-center justify-between dark:text-gray-500 dark:hover:text-gray-300 text-slate-500 hover:text-slate-950  duration-300">
                  <div className="md:text-xl">
                    {post.data.title}
                  </div>
                  <p className="m-2">{dayjs(post.data.createdTime).format('MM-DD')}</p>
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
