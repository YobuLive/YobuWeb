<script lang="ts">
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';
  import SnackbarComponent from './components/SnackbarComponent.svelte';
</script>

<main>
  <SnackbarComponent />
  <Router {routes} />
</main>
