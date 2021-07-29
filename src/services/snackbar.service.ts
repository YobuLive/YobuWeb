let timer: NodeJS.Timeout = null;

//Will think of a better way to do the debouncing lol
export const openSnackbar = (message: string): void => {
  const messageDiv: HTMLElement = document.getElementById('snackbar');
  const messageSnackbar: HTMLElement = document.getElementById('snackbar-wrapper');
  messageDiv.textContent = message;
  messageSnackbar.classList.remove('snackbar-hidden');
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    messageSnackbar.classList.add('snackbar-hidden');
    timer = null;
  }, 3000);
};

export const closeSnackbar = (): void => {
  const snackbar: HTMLDivElement = document.getElementById('snackbar-wrapper') as HTMLDivElement;
  snackbar.classList.add('snackbar-hidden');
  clearTimeout(timer);
  timer = null;
};
