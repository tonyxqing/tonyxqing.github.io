<script lang="ts">
  export let ref: any;
</script>

<footer {ref}>
  <div>
    Built with 💕 and <a href="https://svelte.dev/">Svelte</a> by
    <a href="https://github.com/tonyxqing">Tony</a>
  </div>
  <img src="wave-haikei.svg" />
</footer>

<style>
  div {
    padding: 12px 0px;
    z-index: 10;
    color: whitesmoke;
  }
  img {
    position: absolute;
    width: 100%;
    z-index: 0;
  }
</style>
