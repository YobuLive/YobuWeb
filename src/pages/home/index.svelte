<script lang="ts">
  import HomeSidebarComponent from '../../components/HomeSidebarComponent.svelte';

  let isBarToggled: boolean = false;

  const toggleSidebar = (): void => {
    const sidebarElement = document.getElementById('sidebar');
    const contentElement = document.getElementById('content');
    sidebarElement.style.left = isBarToggled ? '-150px' : '0';
    contentElement.style.marginLeft = isBarToggled ? '0px' : '150px';
    isBarToggled = !isBarToggled;
  };
</script>

<main>
  <button on:click={() => toggleSidebar()} />
  <aside id="sidebar" class="sidebar-wrapper">
    <HomeSidebarComponent closeBar={toggleSidebar} />
  </aside>
  <div id="content">This is the home page.</div>
</main>

<style>
  main {
    height: 100vh;
    background-color: #f0d9ea;
  }

  #content {
    transition: margin-left 0.8s ease-in-out;
    -moz-transition: margin-left 0.8s ease-in-out;
    -o-transition: margin-left 0.8s ease-in-out;
    -webkit-transition: margin-left 0.8s ease-in-out;
  }

  .sidebar-wrapper {
    left: -150px;
    position: absolute;
    transition: all 0.8s ease-in-out;
    -moz-transition: all 0.8s ease-in-out;
    -o-transition: all 0.8s ease-in-out;
    -webkit-transition: all 0.8s ease-in-out;
  }
</style>
