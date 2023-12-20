<script context="module">
  import { Styles } from "sveltestrap";
  import { base } from "$app/paths";
  import { Col, Container, Row, Image } from "sveltestrap";
  import Nav from "$lib/Nav.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/aymanbagabas/iosevka-fonts@v6.1.2/dist/iosevka/iosevka.min.css"
  />
  <title> Ashvala Vinay </title>
</svelte:head>

<Styles />

<Container>
  <Nav />

  <Row xs>
    <Col>
      <Image thumbnail src="{base}/me.jpg" alt="Ashvala" class="me_img" />
    </Col>
    <Col>
      <div class="content">
        <h1>Hi, I am Ashvala Vinay!</h1>
        <p>
          I am a PhD student at Georgia Tech's Center for Music Technology. I am
          currently working with Prof. Alexander Lerch on problems related to
          evaluating generative audio synthesizers.
        </p>
        <p>
          I graduated from Berklee College of Music in 2016. Following that, I
          worked on some personal projects and helped get two startups off the
          ground with their software engineering work. After that, I got my
          Masters in Music Technology at GTCMT.
        </p>
        <p>
          On this page, I will be sharing my work, and some posts where I will
          discuss music, technology and my progress through the course of my PhD
          work.
        </p>
      </div>
    </Col>
  </Row>
  <hr />
  <Row />
</Container>

<style>
  :global(body) {
    font-family: "Inter", "Avenir";
  }

  .content {
    margin-right: auto;
    margin-top: 20px;
    font-size: 1em;
    color: black;
  }

  .me_img {
    margin-top: 20px;
  }

  h1 {
    font-family: "Inter", "Avenir";
    font-size: 3em;
    font-weight: 400;
    color: #111;
  }

  p {
    font-family: "Inter", "Avenir";
    font-size: 0.95em;
    font-weight: 400;
    text-align: left;
  }

  h2 {
    margin-bottom: 20px;
  }

  .portfolio_link {
    font-size: 1.1em;
    margin-bottom: 20px;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 3px;
    text-decoration: none !important;
  }

  .portfolio_link.active {
    background-color: #333;
    color: white;
  }

  .portfolio_content_text {
    font-family: "Iosevka Web", Helvetica, Arial, sans-serif;
    color: #ccc;
  }

  .portfolio_link:hover {
    cursor: pointer;
    background-color: #666;
    color: white;
  }

  .me_img {
    width: 40%;
  }
</style>
