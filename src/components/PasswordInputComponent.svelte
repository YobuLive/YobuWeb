<script lang="ts">
  export let title: string;
  export let value: string;
</script>

<div class="cell-div">
  <span class="input-label-span">{title}</span>
  <input bind:value class="input" type="password" />
</div>

<style>
  .cell-div {
    display: flex;
    flex-direction: row;
    margin: 0.5em;
  }

  .input-label-span {
    width: 50%;
    margin: 0 0.25em;
    font-weight: 300;
    line-height: 2em;
  }

  .input {
    width: 15em;
    color: white;
    background-color: #ffa5b9;
    border: none;
    border-radius: 10px;
    padding: 0.5em 1em;
  }

  .input:focus {
    outline: none;
  }
</style>
