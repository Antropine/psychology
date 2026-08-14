import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './blog.css';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Ошибка загрузки новостей:', error));
  }, []);

  return (
    <div className="blog">
      <h1>Новости</h1>

      <div className="blog-list">
        {posts.map(post => (
          <article className="blog-card" key={post.slug}>

            {post.image && (
              <img
                src={post.image}
                alt={post.title}
              />
            )}

            <div className="blog-card-content">

              <div className="blog-date">
                {new Date(post.date).toLocaleDateString('ru-RU')}
              </div>

              <h2>{post.title}</h2>

              {post.excerpt && (
                <p>{post.excerpt}</p>
              )}

              <Link to={`/blog/${post.slug}`}>
                Читать далее
              </Link>

            </div>

          </article>
        ))}
      </div>
    </div>
  );
}