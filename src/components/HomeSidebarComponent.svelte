<script lang="ts">
  import { goto } from '@roxi/routify';
  import { removeAccessToken } from '../services/cookie.service';
  import { openSnackbar } from '../services/snackbar.service';
  import SidebarButtonComponent from './SidebarButtonComponent.svelte';

  export let closeBar: Function;

  const testPress = (): void => {
    openSnackbar('This function is still under construction. Come back later!');
  };

  const logoutUser = (): void => {
    removeAccessToken();
    $goto('/login');
  };
</script>

<div class="sidebar-wrapper">
  <div class="logo-wrapper">
    <span class="logo-title">Yobu</span>
    <img alt="" src="/images/close-sidebar-icon.png" id="toggle-layout" on:click={() => closeBar()} />
  </div>
  <SidebarButtonComponent label="Log Out" onPress={logoutUser} />
  <SidebarButtonComponent label="Home" onPress={testPress} />
  <SidebarButtonComponent label="Settings" onPress={testPress} />
  <SidebarButtonComponent label="Chat" onPress={testPress} />
</div>

<style>
  #toggle-layout:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  #toggle-layout {
    min-width: 24px;
    height: auto;
    margin: 8px;
  }
  .sidebar-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 150px;
    background-color: #fa5770;
    min-height: 100vh;
  }

  .logo-wrapper {
    padding: 1em;
    display: flex;
    flex-direction: row;
  }

  .logo-title {
    color: white;
    font-size: 2rem;
  }
</style>
