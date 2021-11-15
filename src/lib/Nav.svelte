<script> 
    import { Styles } from 'sveltestrap';
    import { base } from "$app/paths";
    import { Col, Container, Row, Image, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'sveltestrap';
</script>

<Styles />

<div> 
   <nav> 
       <h1> Ashvala Vinay </h1>
       <ul> 
           <li> <a href="/blog"> Blog </a> </li>
            <li> <a href="/portfolio"> Portfolio </a> </li>            
        </ul>
   </nav>
</div>  

<style lang="scss"> 

nav{
    display: flex;
    height: 64px;
    font-family: "Iosevka Web";
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}

ul{ 
    display: flex;
    list-style: none;
    align-content: center;
    height: 100%;
    width: 50%;
    justify-content: center;
}

li{
    display: flex;
    height: 100%;
    align-content: center;
    justify-content: center;
    margin-right: 10px;
    justify-self: center;
}

</style>