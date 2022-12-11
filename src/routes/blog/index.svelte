<script context="module">
  import { Styles } from "sveltestrap";
  import { base } from "$app/paths";
  import { Col, Container, Row, Image } from "sveltestrap";
  import Nav from "$lib/Nav.svelte";
  export async function load({ fetch }) {
    const posts = await fetch(`${base}/blog/blog.json`).then((r) => r.json());
    return {
      props: { posts },
    };
  }
</script>

<script>
  export let posts;
  console.log(posts);
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/aymanbagabas/iosevka-fonts@v6.1.2/dist/iosevka/iosevka.min.css"
  />
</svelte:head>

<Styles />

<Container sm>
  <Nav />

  <Row>
    <Col>
      <h2>Posts</h2>
      <hr />
      {#each posts as post}
        {#if post.metadata.draft !== true}
          <a href={`${base}/${post.slug}`} class="portfolio_link">
            <div class="post_title" data-title={post.metadata.title}>
              {post.metadata.title}
            </div>
            <div class="excerpt">{post.metadata.excerpt}</div>
          </a>
          <hr />
        {/if}
      {/each}
    </Col>
  </Row>
</Container>

<style>
  :global(body) {
    font-family: "Iosevka";
  }

  h2 {
    font-family: "Iosevka";
    margin-top: 1em;
    font-weight: 400;
    color: #aaa;
  }

  p {
    font-family: "Iosevka";
    font-size: 0.95em;
    font-weight: 400;
    text-align: left;
  }

  h2 {
    margin-bottom: 20px;
  }

  .portfolio_link {
    font-family: "Avenir", sans-serif;
    margin-bottom: 20px;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 3px;
    color: black;
    text-decoration: none !important;
  }

  .portfolio_link:hover {
    cursor: pointer;
    color: #666;
  }

  .post_title {
    font-size: 1.6em;
  }
  .excerpt {
    font-size: 1.1em;
  }

  .me_img {
    width: 40%;
  }
</style>
