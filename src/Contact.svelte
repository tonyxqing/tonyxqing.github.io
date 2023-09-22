<script lang="ts">
  let name: string;
  let message: string;
</script>

<section id="contact">
  <h1>Contact</h1>
  <form id="contact_form">
    <label for="name">Name </label>
    <input id="name" type="text" bind:value={name} />
    <label for="message">Message </label>
    <textarea id="message" bind:value={message} />
    <a
      style={!name || !message
        ? "pointer-events: none;"
        : "pointer-events: auto"}
      href={`mailto:tonyqing2022@gmail.com?subject=Hello%20from%20${encodeURI(
        name
      )}&body=${encodeURI(message)}`}
      ><button type="button">Send Message</button></a
    >
  </form>
</section>

<style>
  section {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 36px 24px;
    height: 100%;
    flex-direction: column;
  }
  form {
    display: flex;
    flex-direction: column;
    min-width: 280px;
    width: 35%;
    gap: 8px;
    z-index: 1;
  }
  input {
    height: 32px;
  }
  textarea {
    min-height: 180px;
    resize: vertical;
  }
</style>
