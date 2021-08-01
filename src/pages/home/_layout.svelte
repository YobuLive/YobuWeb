<script lang="ts">
  import { goto } from '@roxi/routify';
  import { beforeUpdate } from 'svelte';
  import { checkSession } from '../../services/cookie.service';
  import { openSnackbar } from '../../services/snackbar.service';
  import HomeSidebarComponent from '../../components/HomeSidebarComponent.svelte';

  let isLoggedIn: boolean = false;
  let isBarToggled: boolean = true;

  const toggleSidebar = (): void => {
    const sidebarElement = document.getElementById('sidebar-layout');
    const contentElement = document.getElementById('content-layout');
    sidebarElement.style.left = isBarToggled ? '-150px' : '0';
    contentElement.style.marginLeft = isBarToggled ? '0px' : '150px';
    isBarToggled = !isBarToggled;
  };

  beforeUpdate(() => {
    isLoggedIn = checkSession();
    if (!isLoggedIn) {
      openSnackbar('Your session has expired. Please login again.');
    }
  });
</script>

<main>
  {#if isLoggedIn}
    <img alt="" src="/images/sidebar-icon.png" id="toggle-layout" on:click={() => toggleSidebar()} />
    <aside id="sidebar-layout">
      <HomeSidebarComponent closeBar={toggleSidebar} />
    </aside>
    <div id="content-layout"><slot /></div>
  {:else}
    {$goto('/login')}
  {/if}
</main>

<style>
  main {
    height: 100vh;
    background-color: #f0d9ea;
  }

  #toggle-layout:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  #toggle-layout {
    position: absolute;
    min-width: 24px;
    height: auto;
    margin: 8px;
  }
  #content-layout {
    margin-left: 150px;
    padding: 32px 0 0 48px;
    transition: margin-left 0.8s ease-in-out;
    -moz-transition: margin-left 0.8s ease-in-out;
    -o-transition: margin-left 0.8s ease-in-out;
    -webkit-transition: margin-left 0.8s ease-in-out;
  }

  #sidebar-layout {
    left: 0px;
    position: absolute;
    transition: all 0.8s ease-in-out;
    -moz-transition: all 0.8s ease-in-out;
    -o-transition: all 0.8s ease-in-out;
    -webkit-transition: all 0.8s ease-in-out;
  }
</style>
