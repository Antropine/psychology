import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import './blog.css';

export default function Article() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadPosts = () => {
      fetch('/posts.json?t=' + Date.now())
        .then(response => response.json())
        .then(items => {
          setPosts(items);
          setNotFound(!items.find(item => item.slug === slug));
          setLoaded(true);
        })
        .catch(() => {
          setNotFound(true);
          setLoaded(true);
        });
    };

    loadPosts();
    window.addEventListener('focus', loadPosts);
    return () => window.removeEventListener('focus', loadPosts);
  }, [slug]);

  const post = posts.find(item => item.slug === slug);
  const related = posts.filter(item => item.slug !== slug).slice(0, 3);

  if (!loaded) {
    return <div>Загрузка...</div>;
  }

  if (notFound || !post) {
    return (
      <article className="article">
        <h1>Статья не найдена</h1>
      </article>
    );
  }

  return (
    <article className="article">
      <div className="article-layout">
        <div className="article-main">
          <h1>{post.title}</h1>
          <div className="article-content">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {post.author && (
          <aside className="article-author">
            <p className="article-author-label">Автор статьи</p>
            <Link to={post.author.href} className="article-author-photo">
              <img src={post.author.image} alt={post.author.name} />
            </Link>
            <Link to={post.author.href} className="article-author-name">
              {post.author.name}
            </Link>
            <Link to={post.author.href} className="article-author-more">
              Подробнее о специалисте
            </Link>
          </aside>
        )}
      </div>

      {related.length > 0 && (
        <section className="article-related">
          <h2>Вам также могут быть интересны статьи</h2>
          <div className="article-related-list">
            {related.map(item => (
              <Link
                key={item.slug}
                to={`/blog/${item.slug}`}
                className="article-related-card"
              >
                {item.image && <img src={item.image} alt={item.title} />}
                <span className="article-related-link">
                  узнать больше
                  <img src="/images/black_arrow.svg" alt="" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
