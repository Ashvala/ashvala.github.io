<!-- <svelte:head> 
  <script src="//mozilla.github.io/pdf.js/build/pdf.mjs" type="module"></script>
</svelte:head> -->
<script>
    export const ssr = false;

    import { Styles } from "sveltestrap";
    import { base } from "$app/paths";
    import Nav from "$lib/Nav.svelte";
    import { Col, Container, Row } from "sveltestrap";
    import Pdf from "./pdf.svelte";
    import publications from "./publications.json";
</script>


<div class="mainContainer">
  <Container>
    <Nav />
    <h2>Publications</h2>
    <!-- <hr /> -->
    <Row>
      <Col>
        <div class="content">
          {#each publications.publications as publication}
          <div class="pdf_container">
            <Pdf url="{base}/pdfs/{publication.url}" meta={publication} />
          </div>
          {/each}

        </div>
      </Col>
    </Row>
  </Container>
</div>

<style> 
    .mainContainer {
        color: #333;
    }
    h2{
        margin-top: 1em;
        font-weight: 600;
        color: #222;
    }
    .pdf_container {
      display: flex;
      flex-direction: row; 
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      margin-bottom: 2em;

    }
    .content{ 
      margin-top: 2em;
    }

</style>