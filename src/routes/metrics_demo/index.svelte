<script>
  import { Styles } from "sveltestrap";
  import { base } from "$app/paths";
  import { Col, Container, Row } from "sveltestrap";
  import Col1 from "./Col1.md";
  import Col2 from "./Col2.md";
  //  import Col3 from "./Col3.md"

  function goBack() {
    window.history.back();
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
  />
</svelte:head>

<div class="mainContainer">
  <div class="backButton" on:click={goBack}>
    <i class="las la-angle-left" />
  </div>

  <Container>
    <h1>Evaluating Neural Audio Synthesizers</h1>
    <hr />
    <Row>
      <Col>
        <div class="content">
          <Col1 />
        </div>
      </Col>
    </Row>
  </Container>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: Baskerville, monospace;
  }

  h1 {
    font-family: Avenir, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .mainContainer {
    width: 100vw;
    min-height: 100vh;
    background-color: #111;
    color: white;
    font-size: 1.1em;
  }

  .backButton {
    position: relative;
    top: 32px;
    left: 10px;
    width: 32px;
    height: 32px;
    color: black;
    background: #fff;
    border-radius: 100px;
    cursor: pointer;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px black;
  }

  .backButton i {
    font-size: 1.2em;
  }

  .backButton:hover {
    background: #aaa;
    color: black;
  }
  .content {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
