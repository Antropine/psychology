import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function SpecialistArticles({ author }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/posts.json?t=' + Date.now())
      .then(response => response.json())
      .then(items => {
        const own = items
          .filter(post => post.author?.href === `/specialists/${author}`)
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 2)
        setPosts(own)
      })
      .catch(() => setPosts([]))
  }, [author])

  if (!posts.length) return null

  return (
    <div className='spec-articles'>
      <div className='spec-articles-list'>
        {posts.map(post => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className='spec-articles-card'
          >
            <img src={post.image} alt={post.title} />
          </Link>
        ))}
      </div>
      <Link to='/blog' className='spec-articles-title'>
        Специалист пишет
        <img src='/images/black_arrow.svg' alt='' />
      </Link>
    </div>
  )
}
