<script>
    export let ref;
</script>

<header {ref}>
    <section>
        <div class="name">
        Tony Qing
        </div>
        <div class="links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#blog">Blog</a>
        </div>
    </section>
</header>

<style>
    .name {
        color: white
    }
    section {
        display: flex;
        justify-content: space-between;
        padding: 16px 16px;
    }
    .links {
        display: flex; 
        gap: 24px
    }
    .links > a {
        margin: auto;
    }
</style>