<script>
    let hovered = false;
</script>

<div class="heroContainer">
    <svg class="textCircle" viewBox="0 0 1000 1000">
        <path
            id="circle"
            fill="none"
            d="M 499.9127335378432 0.0000076154354360369325 A 500 500 0 1 0 500.00000000000006 0"
        /><text
            font-family="Bebas Neue, sans-serif"
            font-size={101}
            fill="#ffffff"
            ><textPath href="#circle">
                <tspan>Tony Qing</tspan> - Frontend - Backend - Software Developer
                - College Station, TX - Chicago, Illinois -</textPath
            ></text
        ></svg
    >

    <img
        style="object-fit: cover;
        width: 100%;
        max-height: 100vh;
        height: 100%;
        transition: all 600ms ease;"
        id="moon"
        src="./moon.jpg"
        alt="the moon"
    />
    <div
        id="#cartman"
        role="button"
        tabindex="0"
        on:click={() => {
            window.scrollTo(0, 1200);
        }}
        on:keyup
        on:mouseover={() => {
            hovered = true;
        }}
        on:focus
        on:mouseleave={() => {
            hovered = false;
        }}
        style="position:absolute; width: 20%; aspect-ratio: 1;"
    >
        <img
            style="object-fit: cover; opacity: {hovered
                ? '.6'
                : '0'};  height: 100%; transition: all 3000ms ease-in-out;"
            src="./cartmanrealestate.png"
            alt="eric cartman as a realestate agent"
        />
    </div>
</div>

<style>
    .heroContainer {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        max-height: 100vh;
    }
    .textCircle {
        width: 40%;
        border-radius: 50%;
        overflow: visible;
        position: absolute;
        transform-origin: center center;
        stroke-opacity: 0.75;
    }



    /* @media screen and (max-width: 1128px) {
        .textCircle {
            height: 45%;
        }
    } */

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        .textCircle {
            animation: rotate 35s linear infinite;

        }
    }
    tspan {
        fill: #2e3053;
        filter: drop-shadow(0px 2px 2px rgb(254, 254, 254));
    }
</style>
