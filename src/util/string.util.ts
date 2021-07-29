export const parseErrors = (errorString: string[] | string): string => {
  let result: string = '';
  if (typeof errorString == 'string') {
    result = errorString;
  } else {
    errorString.forEach((s) => {
      result += s + '\n';
    });
  }
  return result;
};
