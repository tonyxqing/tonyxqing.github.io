<script>
  import Scrolly from "./Scrollytelling.svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import Hero from "./Hero.svelte";
  import About from "./About.svelte";
  import { onMount } from "svelte";
    import Contact from "./Contact.svelte";
    import Blog from "./Blog.svelte";
    import Projects from "./Projects.svelte";
  let scrollLevel = 0;
</script>

<Header ref="header" />
<Scrolly bind:value={scrollLevel}>
  <Hero />
  <About />
  <Projects/>
  <Contact/>
  <Blog/>
</Scrolly>
<Footer ref="footer" />

<style>
  :global(#app) {
    vertical-align: baseline;
  }
  :global([ref="header"]) {
    position: fixed;
    width: 100%;
  }
  :global([ref="footer"]) {
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 12px 0px;
  }

</style>
