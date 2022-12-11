<script context="module">
  import { Styles } from "sveltestrap";
  import { base } from "$app/paths";
  import { Col, Container, Row, Image } from "sveltestrap";
  import Nav from "$lib/Nav.svelte";
  export async function load({ fetch }) {
    const posts = await fetch(`${base}/portfolio/portfolio.json`).then((r) =>
      r.json()
    );
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

<Container>
  <Nav />

  <Row>
    <Col>
      <h2>Portfolio</h2>
      {#each posts as post}
        <a href={`${base}/${post.portfolioslug}`}>
          <div class="portfolio_link" data-title={post.metadata.title}>
            {post.metadata.title}
          </div>
        </a>
      {/each}
    </Col>
  </Row>
</Container>

<style>
  :global(body) {
    font-family: "Iosevka Web";
  }
  a h1 {
    text-decoration: None;
  }
  h1 {
    font-family: "Iosevka Web";
    font-size: 3em;
    font-weight: 400;
    color: #aaa;
    text-decoration: none;
  }

  p {
    font-family: "Iosevka Web";
    font-size: 0.95em;
    font-weight: 400;
    text-align: left;
  }

  h2 {
    font-family: "Iosevka Web";
    margin-bottom: 20px;
  }

  .portfolio_link {
    font-family: "Iosevka Web";
    font-size: 1.1em;
    margin-bottom: 20px;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 3px;
    text-decoration: none !important;
  }

  .portfolio_link:hover {
    cursor: pointer;
    background-color: #666;
    color: white;
  }
</style>
