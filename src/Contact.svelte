<script>
</script>
<section id="contact">
  <h1>Contact</h1>
  <form>
    <label for="name">Name </label>
    <input id="name" type="text" />
    <label for="email">Email </label>
    <input id="email" type="email" />
    <label for="message">Message </label>
    <textarea id="message" />
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
