<script lang="ts">
  export let title: string;
  export let type: string;
</script>

<div class="cell-div">
  <span class="input-label-span">{title}</span>
  <input class="input" {type} />
</div>

<style>
  .cell-div {
    display: flex;
    flex-direction: row;
    margin: 0.5em;
  }

  .input-label-span {
    width: 30%;
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
