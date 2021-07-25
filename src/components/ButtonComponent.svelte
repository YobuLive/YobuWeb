<script lang="ts">
  export let label: string;
  export let onPress: Function;
</script>

<button class="component-button" on:click={() => onPress()}>{label}</button>

<style>
  .component-button {
    background-color: #fa5770;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 200;
    padding: 1em 4em;
    font-size: 1rem;
  }

  .component-button:hover {
    opacity: 0.5;
    cursor: pointer;
  }
</style>
