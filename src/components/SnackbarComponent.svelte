<script lang="ts">
  import { closeSnackbar } from '../services/snackbar.service';
</script>

<div id="snackbar-wrapper" class="snackbar-wrapper snackbar-hidden">
  <div on:click={closeSnackbar} class="close-btn">x</div>
  <div id="snackbar" class="snackbar-div">This is a Snackbar. This is a Snackbar. This is a Snackbar. This is a Snackbar.</div>
</div>

<style>
  .close-btn {
    position: absolute;
    right: 5px;
    top: 3px;
    border-radius: 50%;
    text-align: center;
    line-height: 0.75rem;
  }

  .snackbar-wrapper {
    top: 1.25em;
    right: 1.25em;
    position: absolute;
    background-color: #fa5770;
    color: white;
    border-radius: 10px;
    max-width: 80%;
    max-height: 25%;
    visibility: visible;
    -webkit-animation: fadein 0.5s;
    animation: fadein 0.5s;
    border: 1px white solid;
  }

  .snackbar-hidden {
    display: none;
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .close-btn:hover {
    cursor: pointer;
  }

  .snackbar-div {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    font-size: 0.75rem;
    padding: 1em 1.5em 1em 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
  }

  @media screen and (min-width: 1024px) {
    .snackbar-wrapper {
      max-width: 50%;
    }
  }
</style>
