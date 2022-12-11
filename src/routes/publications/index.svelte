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
    <h1>Publications</h1>
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
        margin-top: 20px;
        color: white;
    }
</style>