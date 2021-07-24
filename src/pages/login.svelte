<main>
  <div class="main-div">
    <div class="panel-div">
      <span class="title-span">Yobu LIVE!</span>
      <div class="input-div">
        <div class="cell-div">
          <span class="input-label-span">Username</span>
          <input class="input" type="text" />
        </div>
        <div class="cell-div">
          <span class="input-label-span">Password</span>
          <input class="input" type="password" />
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    height: 100vh;
    background-color: #f0d9ea;
  }

  .main-div {
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .panel-div {
    min-height: 40%;
    min-width: 25%;
    padding: 1em;
    background-color: #9d6079;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .title-span {
    color: white;
    font-weight: 700;
    font-size: 3rem;
  }

  .input-div {
    display: flex;
    flex-direction: column;
  }

  .cell-div {
    display: flex;
    flex-direction: row;
    margin: 0.5em;
  }

  .input-label-span {
    width: 40%;
    font-weight: 300;
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
