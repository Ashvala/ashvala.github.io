<script context="module">
  import { base } from "$app/paths";
  import Nav from "$lib/Nav.svelte";

  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const post = await fetch(`${base}/blog/${slug}.json`).then((r) => r.json());
    return {
      props: { post },
    };
  }
</script>

<script>
  export let post;
  import { Styles } from "sveltestrap";
  import { Col, Container, Row } from "sveltestrap";
  import { onMount } from "svelte";
  let date = post.metadata.date.toUpperCase();
  onMount(() => {
    // typeset
    MathJax.typeset();
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/aymanbagabas/iosevka-fonts@v6.1.2/dist/iosevka/iosevka.min.css"
  />
  <title>{post.metadata.title}</title>

  <script>
    MathJax = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"],
        ],
      },
    };
  </script>
  <script
    id="MathJax-script"
    async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
  </script>
</svelte:head>
<Styles />
<Container sm>
  <Nav />
  <Row />
  <Row>
    <h1 class="title">{post.metadata.title}</h1>
    <h4 class="date">{date}</h4>
    <div class="post_content">
      {@html post.content}
    </div>
  </Row>
</Container>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;1,200;1,300&display=swap");

  h1.title {
    margin-bottom: 10px;    
    color: #222;
  }
  .post_content a {
    text-decoration: none;
    color: #afafaf;
  }

  .post_content {
    width: 60%;
    margin-top: 1em;
    line-height: 1.5em;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 1.2em;
    color: #111;
  }



  .date{
    color: #aaa;
  }

</style>
