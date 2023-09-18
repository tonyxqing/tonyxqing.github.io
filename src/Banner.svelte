<script>
    import {
        DiReact,
        DiWordpress,
        DiJavascript1,
        DiCss3,
        DiMongodb,
        DiPostgresql,
        DiHtml5,
        DiRust,
    } from "svelte-icons/di";
    import IconBase from "svelte-icons/components/IconBase.svelte";
</script>

<div class="card">
    <div class="skillsWrapper">
        <div class="skillsBanner">
            <div>
                <IconBase viewBox="0 0 35 35">
                    <path
                        fill="currentColor"
                        d="M29.86 8c-.224-.385-.532-.724-.871-.921L17.234.292c-.677-.391-1.787-.391-2.464 0L3.015 7.079C2.338 7.47 1.78 8.432 1.78 9.214v13.573c0 .391.14.828.364 1.213c.219.385.532.724.871.917l11.749 6.791c.683.391 1.787.391 2.464 0l11.755-6.791c.339-.193.647-.532.871-.917s.359-.823.359-1.213V9.214c.005-.391-.135-.828-.353-1.213zM16 25.479c-5.229 0-9.479-4.249-9.479-9.479S10.77 6.521 16 6.521a9.513 9.513 0 0 1 8.208 4.733l-4.104 2.376A4.76 4.76 0 0 0 16 11.259c-2.615 0-4.74 2.125-4.74 4.74s2.125 4.74 4.74 4.74a4.759 4.759 0 0 0 4.104-2.371l4.104 2.376A9.513 9.513 0 0 1 16 25.477zm9.479-8.952h-1.052v1.052H23.37v-1.052h-1.052v-1.053h1.052v-1.052h1.057v1.052h1.052zm3.948 0h-1.052v1.052h-1.052v-1.052h-1.052v-1.053h1.052v-1.052h1.052v1.052h1.052z"
                    />
                </IconBase>
                <p>C++</p>
            </div>
            <div>
                <DiReact />
                <p>React</p>
            </div>
            <div>
                <DiWordpress />
                <p>Wordpress</p>
            </div>
            <div>
                <DiJavascript1 />
                <p>Javascript</p>
            </div>
            <div>
                <DiCss3 />
                <p>CSS</p>
            </div>
            <div>
                <DiHtml5 />
                <p>HTML</p>
            </div>
            <div>
                <DiMongodb />
                <p>MongoDB</p>
            </div>
            <div>
                <DiRust />
                <p>Rust</p>
            </div>
            <div>
                <DiPostgresql />
                <p>PostgreSQL</p>
            </div>
        </div>
        <div class="skillsBanner">
            <div>
                <IconBase viewBox="0 0 35 35">
                    <path
                        fill="currentColor"
                        d="M29.86 8c-.224-.385-.532-.724-.871-.921L17.234.292c-.677-.391-1.787-.391-2.464 0L3.015 7.079C2.338 7.47 1.78 8.432 1.78 9.214v13.573c0 .391.14.828.364 1.213c.219.385.532.724.871.917l11.749 6.791c.683.391 1.787.391 2.464 0l11.755-6.791c.339-.193.647-.532.871-.917s.359-.823.359-1.213V9.214c.005-.391-.135-.828-.353-1.213zM16 25.479c-5.229 0-9.479-4.249-9.479-9.479S10.77 6.521 16 6.521a9.513 9.513 0 0 1 8.208 4.733l-4.104 2.376A4.76 4.76 0 0 0 16 11.259c-2.615 0-4.74 2.125-4.74 4.74s2.125 4.74 4.74 4.74a4.759 4.759 0 0 0 4.104-2.371l4.104 2.376A9.513 9.513 0 0 1 16 25.477zm9.479-8.952h-1.052v1.052H23.37v-1.052h-1.052v-1.053h1.052v-1.052h1.057v1.052h1.052zm3.948 0h-1.052v1.052h-1.052v-1.052h-1.052v-1.053h1.052v-1.052h1.052v1.052h1.052z"
                    />
                </IconBase>
                <p>C++</p>
            </div>
            <div>
                <DiReact />
                <p>React</p>
            </div>
            <div>
                <DiWordpress />
                <p>Wordpress</p>
            </div>
            <div>
                <DiJavascript1 />
                <p>Javascript</p>
            </div>
            <div>
                <DiCss3 />
                <p>CSS</p>
            </div>
            <div>
                <DiHtml5 />
                <p>HTML</p>
            </div>
            <div>
                <DiMongodb />
                <p>MongoDB</p>
            </div>
            <div>
                <DiRust />
                <p>Rust</p>
            </div>
            <div>
                <DiPostgresql />
                <p>PostgreSQL</p>
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        overflow: hidden;
        width: 65%;
        height: 100%;
    }
    .skillsWrapper {
        height: 128px;
        display: inline-flex;
        flex-wrap: nowrap;
    }

    .skillsBanner {
        display: none;
        height: 100%;
        width: 100%;
        padding: 0px 12px;
    }

    .skillsBanner > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 150px;
        width: 150px;
        font-family: monospace;
        font-size: 16px;
    }


    .skillsBanner > div > p {
        text-align: center;    
    }
    @media (prefers-reduced-motion: no-preference) {
        .skillsBanner {
            display: flex;
            gap: 30px;
            animation: marquee 30s linear infinite;
        }
    }

    @keyframes marquee {
        100% {
            transform: translate(-100%);
        }
    }
</style>
