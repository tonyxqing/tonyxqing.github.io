<script>
  import Banner from "./Banner.svelte";
</script>

<div id="about">
  <h1>About</h1>
  <div class="card">
    <p>
      I'm a software developer with over a year of professional frontend
      experience in mobile and web applications. I get satisfication from
      converting mockups and design specifications into functional user friendly
      websites. Currently, I am based in Chicago working remotely for TCAT,
      which is a research center at Texas A&M, coding web and mobile solutions
      in React and React Native. In my freetime I am practicing backend skills
      using Rust and MongoDB to create the backbone of my card trading game.
      Aside from work, I love to spend time with my wife, cook new recipies, and
      helping beginners learn to code.
    </p>
  </div>
  <div class="card">
    <h2>Skills</h2>
    <ul class="skills">
      <h3>Programming</h3>
      <ul>
        <div>Javascript</div>
        <div>CSS</div>
        <div>HTML</div>
        <div>React</div>
        <div>React Native</div>
        <div>C++</div>
        <div>Rust</div>
      </ul>
      <h3>Database</h3>
      <ul>
        <div>MongoDB</div>
        <div>PostgreSQL</div>
      </ul>
      <h3>Other</h3>
      <ul>
        <div>SOLID design principles</div>
        <div>UI UX oriented design</div>
      </ul>
    </ul>
  </div>
  <Banner />
</div>

<style>
  #about {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: 36px 24px;
    height: 100%;
    box-shadow: rgb(10, 11, 16) 0px 30px 300px 300px;
  }
  .card {
    width: 65%;
    text-wrap: wrap;
  }

  .skills > ul {
    display: flex;
    gap: 20px;
  }
</style>
