import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function Article() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(posts => {
        const foundPost = posts.find(
          post => post.slug === slug
        );

        setPost(foundPost);
      });
  }, [slug]);

  if (!post) {
    return <div>Загрузка...</div>;
  }

  return (
    <article className="article">

      <h1>{post.title}</h1>

      <div className="article-date">
        {new Date(post.date).toLocaleDateString('ru-RU')}
      </div>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
        />
      )}

      <div className="article-content">
        <ReactMarkdown>
          {post.content}
        </ReactMarkdown>
      </div>

    </article>
  );
}