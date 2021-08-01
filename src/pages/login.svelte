<script lang="ts">
  import { goto } from '@roxi/routify';

  import ButtonComponent from '../components/ButtonComponent.svelte';
  import LabelInputComponent from '../components/LabelInputComponent.svelte';
  import PasswordInputComponent from '../components/PasswordInputComponent.svelte';
  import type { AuthLoginCredentials, AuthLoginResponse, AuthRegisterCredentials } from '../datatypes/auth.datatypes';
  import { signInUser, signUpUser } from '../services/auth.service';
  import { setAccessToken } from '../services/cookie.service';
  import { openSnackbar } from '../services/snackbar.service';
  import { parseErrors } from '../util/string.util';

  let isLoginFormShown: boolean = true;
  let usernameLogin: string = '';
  let passwordLogin: string = '';
  let usernameRegister: string = '';
  let passwordRegister: string = '';
  let emailRegister: string = '';

  const toggleForm = (): void => {
    isLoginFormShown = !isLoginFormShown;
  };

  const loginUser = (): void => {
    const authLoginCredentials: AuthLoginCredentials = {
      username: usernameLogin,
      password: passwordLogin,
    };
    signInUser(authLoginCredentials)
      .then((res: AuthLoginResponse) => {
        setAccessToken(res.accessToken);
        resetInput();
        openSnackbar('Welcome back to Yobu!');
        $goto('/home');
      })
      .catch((err) => {
        openSnackbar(parseErrors(err.message));
      });
  };

  const registerUser = (): void => {
    const authRegisterCredentials: AuthRegisterCredentials = {
      username: usernameRegister,
      password: passwordRegister,
      email: emailRegister,
    };
    signUpUser(authRegisterCredentials)
      .then((res) => {
        // Send email to activate
        resetInput();
        openSnackbar('Welcome to Yobu!');
        $goto('/onboard');
      })
      .catch((err) => {
        openSnackbar(parseErrors(err.message));
      });
  };

  const resetInput = (): void => {
    usernameLogin = '';
    passwordLogin = '';
    usernameRegister = '';
    passwordRegister = '';
    emailRegister = '';
  };
</script>

<main>
  <div class="main-div">
    <div class="panel-div">
      {#if isLoginFormShown}
        <span class="title-span">Yobu LIVE!</span>
        <div class="input-div">
          <LabelInputComponent bind:value={usernameLogin} title="Username" />
          <PasswordInputComponent bind:value={passwordLogin} title="Password" />
        </div>
        <ButtonComponent label="Login" onPress={loginUser} />
        <span class="click-span" on:click={toggleForm}>Click here to register</span>
      {:else}
        <div class="input-div">
          <LabelInputComponent bind:value={emailRegister} title="Email" />
          <LabelInputComponent bind:value={usernameRegister} title="Username" />
          <PasswordInputComponent bind:value={passwordRegister} title="Password" />
        </div>
        <ButtonComponent label="Register" onPress={registerUser} />
        <span class="click-span" on:click={toggleForm}>Have an account? Login here!</span>
      {/if}
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
    padding: 0.5em;
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
    margin: 1em 0;
  }

  .click-span {
    text-decoration: underline;
    margin: 2em;
    font-size: 0.75rem;
  }

  .click-span:hover {
    opacity: 0.5;
    cursor: pointer;
  }
</style>
