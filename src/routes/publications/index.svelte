<script>
    import { Styles } from "sveltestrap";
    import { base } from "$app/paths";
    import Nav from "$lib/Nav.svelte";
    import { Col, Container, Row } from "sveltestrap";
    import Pubs  from "./pubs.md";
</script>


<div class="mainContainer">

  <Container>
    <Nav />
    <h2>Publications</h2>
    <hr />
    <Row>
      <Col>
        <div class="content">
          <Pubs/>
        </div>
      </Col>
    </Row>
  </Container>
</div>

<style> 
    .mainContainer {
        font-family: "Avenir", "Nunito", sans-serif;
        color: white;
    }
    h2{
        font-family: "Avenir", sans-serif;
        margin-top: 1em;
        font-weight: 600;
        color: #eee;
    }


</style>