<script>
    import PortfolioData from "./projects.json";
    let projects = Object.entries(PortfolioData);
</script>

<section>
    <h1>Projects</h1>
    <div class="projectsContainer">
        {#each projects as [project, data]}
            {#if data.url}
                <a class="projectCard" href={data.url}>
                    <div>
                        <h3>{project}</h3>
                        <p>{data.description}</p>
                    </div>
                </a>
            {:else}
                <div class="projectCard">
                    <h3>{project}</h3>
                    <p>{data.description}</p>
                </div>
            {/if}
        {/each}
    </div>
</section>

<style>
    section {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        padding: 36px 24px;
        height: 100%;
        flex-direction: column;
    }

    .projectsContainer {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 65%;
        height: 100%;
        justify-content: space-evenly;
        gap: 10px;
    }
    .projectCard {
        display: flex;
        flex: 1 1 100%;
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
