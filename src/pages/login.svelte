<script lang="ts">
  import ButtonComponent from '../components/ButtonComponent.svelte';
  import LabelInputComponent from '../components/LabelInputComponent.svelte';

  let isLoginFormShown: boolean = true;

  const toggleForm = (): void => {
    isLoginFormShown = !isLoginFormShown;
  };

  const loginUser = (): void => {
    console.log('Login');
  };
</script>

<main>
  <div class="main-div">
    <div class="panel-div">
      {#if isLoginFormShown}
        <span class="title-span">Yobu LIVE!</span>
        <div class="input-div">
          <LabelInputComponent type="text" title="Username" />
          <LabelInputComponent type="password" title="Password" />
        </div>
        <ButtonComponent label="Login" onPress={loginUser} />
        <span class="click-span" on:click={toggleForm}>Click here to register</span>
      {:else}
        <div class="input-div">
          <LabelInputComponent type="text" title="Email" />
          <LabelInputComponent type="password" title="Password" />
          <LabelInputComponent type="password" title="Re-Password" />
        </div>
        <ButtonComponent label="Register" onPress={toggleForm} />
        <span class="click-span" on:click={toggleForm}>Have an account? Login here!</span>
      {/if}
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
    padding: 0.5em;
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
