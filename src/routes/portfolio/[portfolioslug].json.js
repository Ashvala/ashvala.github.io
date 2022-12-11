import { process } from "$lib/markdown";

export function get({ params }) {
  const { portfolioslug } = params;

  const { metadata, content } = process(`src/portfolio/${portfolioslug}.md`);
  const body = JSON.stringify({ metadata, content });
  return {
    body,
  };
}
