<script lang="ts">
  import { goto } from '@roxi/routify';
  import { removeAccessToken } from '../../services/cookie.service';

  const logoutUser = (): void => {
    removeAccessToken();
    $goto('/login');
  };
</script>

<main>
  <div class="main-div">
    <span class="title-span">Yobu Live</span>
    <span
      >This site is under construction. Exciting things will pop up soon.
      <span class="click-span" on:click={logoutUser}>Click here to log out!</span>
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
