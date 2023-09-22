<section id="hero" class="hero_container">
    <svg class="text_circle" viewBox="0 0 1000 1000">
        <path
            id="circle"
            fill="none"
            d="M 499.9127335378432 0.0000076154354360369325 A 500 500 0 1 0 500.00000000000006 0"
        /><text
            font-family="Bebas Neue, sans-serif"
            font-size={110}
            fill="#ffffff"
            ><textPath href="#circle" spacing="auto">
                <tspan id="name_tspan">Tony Qing</tspan> - Frontend - 
                Software Developer - Texas
                <tspan id="university_tspan">A&M</tspan> University - Chicago, Illinois
                -</textPath
            ></text
        ></svg
    >
    <img id="moon" src="./moon.jpg" alt="the moon" />
    <div id="cartman">
        <img
            src="./cartmanrealestate.png"
            alt="eric cartman as a realestate agent"
        />
    </div>
</section>

<style>
    section {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }
    .text_circle {
        width: 40%;
        min-width: 280px;
        border-radius: 50%;
        overflow: visible;
        position: absolute;
        transform-origin: center center;
        stroke-opacity: 0.75;
    }

    #cartman {
        position: absolute;
        width: 20%;
        aspect-ratio: 1;
    }

    #cartman > img {
        object-fit: cover;
        opacity: 0;
        height: 100%;
        transition: all 3000ms ease-in-out;
    }

    #cartman > img:hover {
        opacity: 0.6;
    }

    #moon {
        object-fit: cover;
        width: 100%;
        min-height: 50vh;
        max-height: 100vh;
        height: 100%;
        transition: all 600ms ease;
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
        .text_circle {
            animation: rotate 35s linear infinite;
        }
    }
    #name_tspan {
        fill: #5559d4;
        filter: drop-shadow(0px 2px 2px rgb(53, 35, 35));
    }

    #university_tspan {
        fill: #500000;
        filter: drop-shadow(0px 2px 2px rgb(254, 254, 254));
    }
</style>
