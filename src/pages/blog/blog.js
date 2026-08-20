import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './blog.css';

export function formatPostDate(date) {
  if (!date) return '';
  return new Date(date)
    .toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    .replace(/\sг\.?$/, '');
}

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = () => {
      fetch('/posts.json?t=' + Date.now())
        .then(response => response.json())
        .then(setPosts)
        .catch(() => setPosts([]));
    };

    loadPosts();
    window.addEventListener('focus', loadPosts);
    return () => window.removeEventListener('focus', loadPosts);
  }, []);

  return (
    <div className='blog-section'>
      <div className="blog">
        <div className='about-text'>
          <h1>Блог</h1>
          <p>Здесь вы можете ознакомиться с текстами, написанными нашими специалистами на популярные и острые темы. Статьи помогут вам лучше понять себя и разобраться в своем поведении.</p>
        </div>
        <div className='about-img'>
          <img src='images/blog_iskra.png' alt='искра' />
        </div>
      </div>

      <div className='blog-articles'>
        <h2>Статьи</h2>
        <div className='blog-list'>
          {posts.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className='blog-card'
            >
              {post.image && (
                <div className='blog-card-cover'>
                  <img src={post.image} alt={post.title} />
                </div>
              )}

              <div className='blog-card-meta'>
                <div className='blog-card-tags'>
                  {(post.tags || []).map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {post.date && (
                  <p className='blog-card-date'>{formatPostDate(post.date)}</p>
                )}
              </div>

              <p className='blog-card-title'>{post.title}</p>
              {post.excerpt && (
                <p className='blog-card-excerpt'>{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
