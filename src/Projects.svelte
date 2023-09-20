<script>
  import { quintOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  import PortfolioData from "./projects.json";
  import Scrolly from "./Scrollytelling.svelte";
  let scrollLevel;
  let projects = Object.entries(PortfolioData);
</script>

<section>
  <h1>Projects</h1>
  <div class="projectsContainer">
    <Scrolly once={true} bind:value={scrollLevel}>
      <div class="projectCard hidden" />
      {#each projects as [project, data], i}
        {#if data.url}
          <div class="hiddenCard" >
            {#if scrollLevel >= i + 1}
              <a class="projectCard" transition:fly={{  duration: 500, x: 200, opacity: 0.5 }} href={data.url}>
                <h3>{project}</h3>
                <p>{data.description}</p>
              </a>
            {/if}
          </div>
        {:else}
          <div class="hiddenCard">
            {#if scrollLevel >= i + 1}
              <div class="projectCard" transition:fly={{  duration: 500, x: 200, opacity: 0.5 }}>
                <h3>{project}</h3>
                <p>{data.description}</p>
              </div>
            {/if}
          </div>
        {/if}
      {/each}
    </Scrolly>
  </div>
</section>

<style>
  h1 {
    color: rgb(233, 233, 233);
  }
  section {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 36px 24px;
    flex-direction: column;
  }

  .hidden {
    visibility: hidden;
    margin-top: -250px;
    position: absolute
  }

  .projectsContainer {
    width: 65%;
  }
  .hiddenCard {
    max-height: 250px;
    min-height: 250px;
  }
  .projectCard {
    display: flex;
    flex: 1 1 100%;
    min-height: 250px;
    height: 80%;
    max-height: 250px;
    border: 1px solid black;
    border-radius: 8px;
    justify-content: center;
    flex-direction: column;
    padding: 24px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      172deg,
      rgb(39, 38, 38) 0%,
      rgba(52, 50, 50, 1) 41%,
      rgba(47, 51, 52, 1) 100%
    );
    color: rgb(233, 233, 233);
    transition: box-shadow 250ms linear;
  }

  .projectCard p {
    width: 60%;
  }

  .projectCard:hover {
    border: 1px solid white;
    box-shadow: 0px 0px 8px 4px white;
  }
</style>
