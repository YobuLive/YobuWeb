<script lang="ts">
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';
  import Snackbar from './components/Snackbar.svelte';
</script>

<main>
  <Snackbar />
  <Router {routes} />
</main>
