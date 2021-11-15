/** 
 * Adapted From: https://github.com/svelteland/svelte-kit-blog-demo/blob/main/src/routes/index.json.js
 */

import { process } from '$lib/markdown';
import fs from 'fs';


export function get() {
  let posts = fs.readdirSync(`src/blog_posts`)
      .filter(fileName => /.+\.md$/.test(fileName))
      .map(fileName => {
        const { metadata, content } = process(`src/blog_posts/${fileName}`);
        console.log(metadata);
        return {
          metadata,          
          slug: `blog/${fileName.slice(0, -3)}`
        };
      });
  let body = JSON.stringify(posts);

  return {
    body
  }
}