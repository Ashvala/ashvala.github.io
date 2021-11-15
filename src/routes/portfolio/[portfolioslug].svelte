<script context="module">
  import { base } from '$app/paths';
  import Nav from '$lib/Nav.svelte';

  export async function load({ page, fetch }) {
    const slug = page.params.portfolioslug;
    const post = await fetch(`${base}/portfolio/${slug}.json`)
        .then((r) => r.json());
    return {
      props: { post }
    };
  }
</script>

<script>
  export let post;
  import { Styles } from 'sveltestrap';
  import { Col, Container, Row } from 'sveltestrap';
</script>

<svelte:head>
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aymanbagabas/iosevka-fonts@v6.1.2/dist/iosevka/iosevka.min.css">
  <title>{post.metadata.title}</title>
</svelte:head>
<Styles/>
<Container> 
  <Nav/>
  <Row>      
    <h1 class="title">{post.metadata.title}</h1>    
    <div class="post_content">
      {@html post.content}
    </div>
  </Row>
</Container>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;1,200;1,300&display=swap');
  :global(body){ 
    font-family: "Iosevka Web";
  }
  h1.title {
    margin-bottom: 10px;
  }

  a{ 
    text-decoration: none;
    color: #666;
  }

  .post_content{
    margin-top: 1em;
    line-height: 1.5em;
    font-family: "Nunito";
    font-size: 1.1em;
  }
</style>