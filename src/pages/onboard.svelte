<script lang="ts">
  import { url } from '@roxi/routify';
</script>

<main>
  <div class="main-div">
    <span class="title-span">Glad to have you on board!</span>
    <span>Congrats on creating an account!</span>
    <a class="click-span" href={$url('./login')}>Click here to login.</a>
  </div>
</main>

<style>
  main {
    height: 100vh;
    background-color: #f0d9ea;
  }

  .main-div {
    text-align: center;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title-span {
    font-size: 5rem;
    color: #9d6079;
  }

  .click-span {
    text-decoration: underline;
    color: black;
  }

  .click-span:hover {
    opacity: 0.5;
    cursor: pointer;
  }
</style>
