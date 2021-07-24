<script lang="ts">
  import { url } from '@roxi/routify';
</script>

<main>
  <div class="main-div">
    <span class="title-span">Yobu Live</span>
    <span
      >Another way to make friends.
      <a class="click-span" href={$url('./login')}>Click here to try!</a>
    </span>
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
