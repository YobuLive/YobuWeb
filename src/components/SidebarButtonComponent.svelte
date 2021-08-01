<script lang="ts">
  export let label: string;
  export let onPress: Function;
</script>

<button class="sidebar-button" on:click={() => onPress()}>{label}</button>

<style>
  .sidebar-button {
    background-color: #9d6079;
    color: white;
    border: none;
    width: 100%;
    min-height: 80px;
    font-size: 1rem;
    font-weight: 300;
  }

  .sidebar-button:hover {
    background-color: #7d4d61;
    cursor: pointer;
  }
</style>
