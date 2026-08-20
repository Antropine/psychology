const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const matter = require('gray-matter');

const postsDir = path.join(__dirname, '../content/posts');
const outputFile = path.join(__dirname, '../public/posts.json');

const authors = {
  ulia: {
    name: 'Юлия Верёвочникова',
    image: '/images/ulia.png',
    href: '/specialists/ulia'
  },
  arina: {
    name: 'Арина Джумаян',
    image: '/images/arina.png',
    href: '/specialists/arina'
  },
  valeria: {
    name: 'Валерия Федина',
    image: '/images/valeria.png',
    href: '/specialists/valeria'
  }
};

function resolveAuthor(value) {
  if (!value) return null;
  const key = String(value).trim().toLowerCase();
  if (authors[key]) return authors[key];
  return Object.values(authors).find(author => (
    author.name.toLowerCase() === key
  )) || null;
}

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

function generate() {
  const files = fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.md'));

  const posts = files.map(file => {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const slug = file.replace('.md', '');

    const date = data.date
      ? new Date(data.date).toISOString().slice(0, 10)
      : '';

    return {
      slug,
      title: data.title || '',
      date,
      image: data.image || '',
      excerpt: data.excerpt || '',
      author: resolveAuthor(data.author),
      tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
      content
    };
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2), 'utf8');
  console.log(`Generated ${posts.length} posts`);
}

function watch() {
  let timer;
  const run = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      try {
        generate();
      } catch (error) {
        console.error('Failed to generate posts:', error.message);
      }
    }, 200);
  };

  fs.watch(postsDir, run);

  fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.md'))
    .forEach(file => {
      fs.watchFile(path.join(postsDir, file), { interval: 400 }, run);
    });

  console.log('Watching content/posts for changes');
}

generate();

if (process.argv.includes('--watch') || process.argv.includes('--dev')) {
  watch();
}

if (process.argv.includes('--dev')) {
  const child = spawn('react-scripts', ['start'], {
    stdio: 'inherit',
    shell: true,
    cwd: path.join(__dirname, '..'),
    env: process.env
  });

  child.on('exit', code => process.exit(code || 0));
}
