<script>
  import { quintOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  import PortfolioData from "./projects.json";
  import Scrolly from "./Scrollytelling.svelte";
  let scrollLevel;
  let projects = Object.entries(PortfolioData);
</script>

<section id="projects">
  <h1>Projects</h1>
  <div class="projectsContainer">
    {#each projects as [project, data], i}
      <div class="projectCard">
        <h2>{project}</h2>
        <p>{data.description}</p>
        <img
          style="border-radius: 8px; height: 300px; min-width: 280px; max-width: 780px; width: 100%; object-fit: {data.mobile
            ? 'contain'
            : 'cover'};"
          alt="{project} project"
          src={data.img}
        />
        <div style="display: flex; justify-content: center">
          {#if data.url}
            <a href={data.url}>Visit Demo</a>
          {/if}
          {#if data.source}
            <a href={data.source}>Source Code</a>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  a {
    display: flex;
    justify-content: center;
    margin: 8px;
    padding: 8px;
    align-self: center;
    border: 1px solid rgb(117, 68, 233);
    border-radius: 12px;
  }
  a:hover {
    background: rgb(255, 217, 245);
  }
  h1 {
    color: rgb(233, 233, 233);
  }
  h2 {
    margin: 0;
  }
  section {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 36px 24px;
    flex-direction: column;
  }

  .projectsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 80%;
    min-width: 300px;
  }

  .projectCard {
    display: flex;
    border-radius: 8px;
    min-width: 280px;
    max-width: 780px;
    width: 100%;
    flex-direction: column;
    padding: 24px;
    color: rgb(233, 233, 233);
  }
  .projectCard > img {
    align-self: center;
  }
</style>
