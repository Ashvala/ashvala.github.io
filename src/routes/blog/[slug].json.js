import { process } from '$lib/markdown';

export function get({ params }) {
  const { slug } = params;

  const { metadata, content } = process(`src/blog_posts/${slug}.md`);
  const body = JSON.stringify({ metadata, content });
  console.log(body);
  return {
    body
  }
}