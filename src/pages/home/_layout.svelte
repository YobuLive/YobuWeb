<script lang="ts">
  import { goto } from '@roxi/routify';
  import { beforeUpdate } from 'svelte';
  import { checkSession } from '../../services/cookie.service';
  import { openSnackbar } from '../../services/snackbar.service';

  let isLoggedIn: boolean = false;

  beforeUpdate(() => {
    isLoggedIn = checkSession();
    if (!isLoggedIn) {
      openSnackbar('Your session has expired. Please login again.');
    }
  });
</script>

{#if isLoggedIn || true}
  <slot />
{:else}
  {$goto('/login')}
{/if}
