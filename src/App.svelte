<script>
  import Scrolly from "./Scrollytelling.svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import Hero from "./Hero.svelte";
  import About from "./About.svelte";
  import PortfolioData from "./../public/projects.json";
  import { onMount } from "svelte";
  let scrollLevel = 0;
  let projects = Object.entries(PortfolioData);
</script>

<Header ref="header" />
<Scrolly bind:value={scrollLevel}>
  <Hero />
  <About />
  <div
    style="display: flex; flex: 1; justify-content: center; align-items:center; padding: 36px 24px; height: 100%; flex-direction: column"
    id="projects"
  >
    <h1>Projects</h1>
    <div class="projectsContainer">
      {#each projects as [project, data]}
        {#if data.url}
          <a class="projectCard" href={data.url}>
            <div>
              <h5>{project}</h5>
              <p>{data.description}</p>
            </div>
          </a>
        {:else}
          <div class="projectCard">
            <h5>{project}</h5>
            <p>{data.description}</p>
          </div>
        {/if}
      {/each}
    </div>
  </div>
  <div
    style="display: flex; flex: 1; align-items: center; justify-content: center; padding: 36px 24px; height: 100%; flex-direction: column;"
    id="contact"
  >
    <h1>Contact</h1>
    <label>Name</label>
    <input type="text" />
    <label>Email</label>
    <input type="email" />
    <label>Message</label>
    <textarea />
  </div>
  <div
    style="display: flex; flex: 1; align-items: center; justify-content: center; padding: 36px 24px; height: 100%; flex-direction: column;"
    id="blog"
  >
    <h3>Blog</h3>
    <div>
      <h4>What I've learned a year after I graduated.</h4>
      <p>
        It feels that I've learned nothing, which is why it is good to reflect
        and realize.
      </p>
    </div>
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

  .projectsContainer {
    display: flex;
    flex-wrap: wrap;
    width: 65%;
    height: 100%;
    justify-content: space-evenly;
    gap: 10px;
  }
  .projectCard {
    display: flex;
    flex: 0 1 30%;
    height: 300px;
    border: 1px solid black;
    border-radius: 8px;
    justify-content: center;
    flex-direction: column;
    padding: 24px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      172deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(52, 50, 50, 1) 41%,
      rgba(47, 51, 52, 1) 100%
    );
  }
</style>
