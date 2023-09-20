<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import Hero from "./Hero.svelte";
  import About from "./About.svelte";
  import Contact from "./Contact.svelte";
  import Blog from "./Blog.svelte";
  import Projects from "./Projects.svelte";
  import Scrollytelling from "./Scrollytelling.svelte";
  let scrollLevel = 0;
</script>

<Header ref="header" />
<Scrollytelling bind:value={scrollLevel}>
  <Hero />
  <About />
  <Projects />
  <Contact />
  <Blog />
</Scrollytelling>
<div class="dot_navigator">
  {#each Object.keys(Array(5).fill(0)) as dots}
    {#if dots == scrollLevel}
    <div class="dot active" />
    {:else}
    <div class="dot" />
    {/if}
  {/each}
</div>
<Footer ref="footer" />

<style>
  :global(#app) {
    vertical-align: baseline;
  }
  :global([ref="header"]) {
    position: sticky;
    top: 0;
    width: 100%;
    background: linear-gradient(#111a2b, #24272c);
    z-index: 99;
  }
  :global([ref="footer"]) {
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: center;
    height: 500px;
  }

  .dot_navigator {
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: fixed;
    left: 12px;
    bottom: 0;
    width: 100%;
    height: 50%;
  }

  .dot {
    aspect-ratio: 1;
    width: 8px;
    border-radius: 50%;
    border: 1px solid rgb(26, 116, 108);
  }
  .active {
    background-color: green;
  }
  
</style>
