<script>
  import Scrolly from "./Scrollytelling.svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import Hero from "./Hero.svelte";
  import About from "./About.svelte";
  let scrollLevel = 0;

</script>

<Header ref="header" />
<Scrolly bind:value={scrollLevel}>
  <Hero/>
  <About/>
  <div
    style="display: flex; flex: 1; justify-content: center; padding: 36px 24px; height: 80vh"
    id="projects"
  >
    <h3>Projects</h3>
  </div>
  <div
    style="display: flex; flex: 1; justify-content: center; padding: 36px 24px; height: 80vh"
    id="contact"
  >
    <h3>Contact</h3>
  </div>
  <div
    style="display: flex; flex: 1; justify-content: center; padding: 36px 24px; height: 80vh"
    id="blog"
  >
    <h3>Blog</h3>
  </div>
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
