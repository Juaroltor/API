<script>
	import Router from 'svelte-spa-router';
	import NotFound from './NotFound.svelte' ;  
	import Home from './Home.svelte';
  import Inicio from './Inicio.svelte'

  //Imports para APIs
  import HivAPI from './hivGUI/childrenWithHIVTable.svelte'
  import EditHIV from './hivGUI/editHIV.svelte'

  //Imports para analytics
  import AnalyticsHIV from "./analytics/HIV/HIVAnalytics.svelte";

	import {Collapse,Jumbotron,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Dropdown,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'sveltestrap';
  

    let isOpen=false;
    
    const routes = {
      "/": Inicio,
		  "/info":Home,
      
      "/children-with-hiv": HivAPI,
      "/children-with-hiv/:country/:year":EditHIV,
      "/analytics/children-with-hiv": AnalyticsHIV,
		  '*': NotFound,
    };
</script>

<main>
  <body>
    <Jumbotron style="background-color:mediumpurple;"class="p-3" >
      <h1 style="text-align:center; " class="display-4">SOS2021-24 API NIÑOS/AS CON VIH</h1>
    </Jumbotron>
      <Navbar color="dark" dark expand = "md" >
          <NavbarBrand href="#/">SOS2021-24</NavbarBrand>
          <Nav navbar >
            <NavItem>
              <NavLink href="#/children-with-hiv">Niños/as con VIH</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/analytics/children-with-hiv">Analítica</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
  </body>

  <Router {routes}> </Router>
</main>