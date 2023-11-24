/**
 * Adapted From: https://github.com/svelteland/svelte-kit-blog-demo/blob/main/src/routes/index.json.js
 */

import { process } from "$lib/markdown";
import fs from "fs";
import dayjs from "dayjs";

export function get() {
  let posts = fs
    .readdirSync(`src/blog_posts`)
    .filter((fileName) => /.+\.md$/.test(fileName))
    .map((fileName) => {
      const { metadata, content } = process(`src/blog_posts/${fileName}`);
      return {
        metadata,
        slug: `blog/${fileName.slice(0, -3)}`,
      };
    });
  console.log(posts);
  posts.sort(
    (a, b) =>
      dayjs(b.metadata.date, "MMM D, YYYY") -
      dayjs(a.metadata.date, "MMM D, YYYY")
  );
  let body = JSON.stringify(posts);

  return {
    body,
  };
}
