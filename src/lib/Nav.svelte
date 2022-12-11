<script>
  import { Styles } from "sveltestrap";
  import { base } from "$app/paths";
  import {
    Col,
    Container,
    Row,
    Image,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "sveltestrap";
</script>

<Styles />

<div>
  <nav>
    <h1><a href="/"> Ashvala Vinay </a></h1>
    <ul>
      <li><a href="/blog"> Blog </a></li>
      <li><a href="/portfolio"> Portfolio </a></li>
      <li><a href="/publications"> Publications </a></li>
    </ul>
  </nav>
</div>

<style>
  a {
    text-decoration: none;
    color: white;
    align-self: center;
  }

  a:hover {
    color: #0ca7db;
  }

  h1 {
    width: 50%;
  }
  nav {
    display: flex;
    height: 64px;
    font-family: "Avenir Next";
    margin-top: 10px;
    margin-bottom: 20px;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #afafaf;
    /* background: #222; */
  }

  ul {
    display: inline-flex;
    width: 50%;
    justify-content: center;
  }

  li {
    display: inline-flex;
    width: 16em;
    align-content: center;
    justify-content: center;
    font-weight: bold;
  }
</style>
