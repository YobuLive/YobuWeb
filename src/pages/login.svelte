<script>
  import ButtonComponent from '../components/ButtonComponent.svelte';
  import LabelInputComponent from '../components/LabelInputComponent.svelte';
</script>

<main>
  <div class="main-div">
    <div class="panel-div">
      <span class="title-span">Yobu LIVE!</span>
      <div class="input-div">
        <LabelInputComponent type="text" title="Username" />
        <LabelInputComponent type="password" title="Password" />
      </div>
      <ButtonComponent label="Login" />
      <span class="click-span">Click here to register</span>
    </div>
  </div>
</main>

<style>
  main {
    height: 100vh;
    background-color: #f0d9ea;
  }

  .main-div {
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .panel-div {
    min-height: 40%;
    min-width: 25%;
    padding: 1em;
    background-color: #9d6079;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .title-span {
    color: white;
    font-weight: 700;
    font-size: 3rem;
  }

  .input-div {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
  }

  .click-span {
    text-decoration: underline;
    margin: 2em;
    font-size: 0.75rem;
  }

  .click-span:hover {
    opacity: 0.5;
    cursor: pointer;
  }
</style>
