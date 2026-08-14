const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(__dirname, '../content/posts');
const outputDir = path.join(__dirname, '../public');
const outputFile = path.join(outputDir, 'posts.json');

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

const files = fs.readdirSync(postsDir)
  .filter(file => file.endsWith('.md'));

const posts = files.map(file => {
  const filePath = path.join(postsDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent);

  const slug = file.replace('.md', '');

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    image: data.image || '',
    excerpt: data.excerpt || '',
    content
  };
});

posts.sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

fs.writeFileSync(
  outputFile,
  JSON.stringify(posts, null, 2),
  'utf8'
);

console.log(`Generated ${posts.length} posts`);